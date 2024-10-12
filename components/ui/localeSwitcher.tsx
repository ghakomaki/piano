import { useLocale } from 'next-intl';
import { routing, Locale, localeNames } from '@/i18n/routing';
import { SelectItem } from './select';
import React from 'react';
import LocaleSwitcherSelect from './localeSwitcherSelect';
export default function LocaleSwitcher() {
    const locale = useLocale();

    return (
        <LocaleSwitcherSelect defaultValue={locale}>
            {routing.locales.map((lang: Locale) => (
                <SelectItem key={lang} value={lang} >
                    {localeNames[lang]}
                </SelectItem>
            ))}
        </LocaleSwitcherSelect>
    );
}

