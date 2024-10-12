"use client";

import { useLocale } from 'next-intl';
import { routing, Locale, localeNames } from '@/i18n/routing';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import React, { useTransition } from 'react';
import { useRouter } from '@/i18n/routing';
import { SelectPortal } from '@radix-ui/react-select';
import { PrefetchKind } from 'next/dist/client/components/router-reducer/router-reducer-types';

export default function LocaleSitcher() {
    const router = useRouter();
    const locale = useLocale();

    const [selectedLocale, setSelectedLocale] = React.useState<string>(locale);
    const [isPending, startTransition] = useTransition();

    function handleLocaleChange(newLocale: string): void {
        startTransition(() => {
            setSelectedLocale(newLocale);
            router.replace("/", { locale: newLocale });
        });
    };
    return (
        <Select
            value={selectedLocale}
            onValueChange={handleLocaleChange}
            disabled={isPending} >
            <SelectTrigger className="w-[100px] h-[40px]" >
                <SelectValue />
            </SelectTrigger>
            <SelectPortal>
                <SelectContent  >
                    {routing.locales.map((lang: Locale) => (
                        <SelectItem key={lang} value={lang} dir={lang === "ar" ? "rtl" : "ltr"}
                            onMouseOver={() => router.prefetch("/", { kind: PrefetchKind.AUTO, locale: lang })}
                        >
                            {localeNames[lang]}
                        </SelectItem>
                    ))}
                </SelectContent>
            </SelectPortal>
        </Select>
    );
}
