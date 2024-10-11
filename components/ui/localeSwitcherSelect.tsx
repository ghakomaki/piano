"use client";

import { usePathname, useRouter } from '@/i18n/routing';
import { Select, SelectTrigger, SelectValue, SelectContent } from './select';
import { useParams } from 'next/navigation';
import { ReactNode, useTransition } from 'react';

type Props = {
    children: ReactNode;
    defaultValue: string;
};

export default function LocaleSwitcherSelect({ children, defaultValue }: Props) {
    const router = useRouter();
    const params = useParams();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    function handleLocaleChange(newLocale: string): void {
        // @ts-expect-error next-intl types
        startTransition(() => router.replace({ pathname, params }, { locale: newLocale }));
    };
    return (
        <Select value={defaultValue} onValueChange={handleLocaleChange} disabled={isPending} >
            <SelectTrigger className="w-auto" >
                <SelectValue placeholder={'en'} />
            </SelectTrigger>
            <SelectContent defaultValue={defaultValue}  >
                {children}
            </SelectContent>
        </Select>
    );
}