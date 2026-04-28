import { usePage } from '@inertiajs/react';

export function useTranslation() {
    const { translations } = usePage().props;

    function t(key, replacements = {}) {
        let translation = translations[key] ?? key;

        Object.keys(replacements).forEach((placeholder) => {
            translation = translation.replace(
                `:${placeholder}`,
                replacements[placeholder]
            );
        });

        return translation;
    }

    return { t };
}