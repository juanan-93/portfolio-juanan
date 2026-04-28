import { router, usePage } from '@inertiajs/react';
import "../../css/LanguageSwitcher.css";

export default function LanguageSwitcher() {
    const { locale, availableLocales = [] } = usePage().props;

    const labels = {
        es: 'ES',
        en: 'EN',
        de: 'DE',
        ca: 'CA',
    };

    function changeLocale(newLocale) {
        if (newLocale === locale) return;

        router.post(route('language.switch'), { locale: newLocale }, {
            preserveScroll: true,
        });
    }

    return (
        <div className="language-switcher">
            {availableLocales.map((lang) => (
                <button
                    key={lang}
                    onClick={() => changeLocale(lang)}
                    className={`lang-btn ${locale === lang ? 'active' : ''}`}
                >
                    {labels[lang]}
                </button>
            ))}
        </div>
    );
}