"use client";

import { useRouter } from '@/i18n/routing';
import { Select, SelectTrigger, SelectContent, SelectValue } from './select';
import { ReactNode, useTransition } from 'react';

type Props = {
    children: ReactNode;
    defaultValue: string;
};

export default function LocaleSwitcherSelect({ children, defaultValue }: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    function handleLocaleChange(newLocale: string): void {
        startTransition(() => router.replace("/", { locale: newLocale }));
    };
    return (
        <Select defaultValue={defaultValue} onValueChange={handleLocaleChange} disabled={isPending} >
            <SelectTrigger className="w-[100px]" >
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {children}
            </SelectContent>
        </Select>
    );
}