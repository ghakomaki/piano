import PageLayout from '@/components/ui/pageLayout';

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {

    return (
        <PageLayout title={"NotFound"}>
            <p className="max-w-[460px]">{ }</p>
        </PageLayout>
    );
}