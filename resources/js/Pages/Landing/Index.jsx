import { Link, usePage } from "@inertiajs/react";
import LanguageSwitcher from "@/Components/LanguageSwitcher";
import "../../../css/landing.css";


export default function Index() {
    const { auth, translations = {}, locale } = usePage().props;
    const avatarHref = auth.user ? route("dashboard") : route("login");
    const t = (key, fallback) => translations[key] ?? fallback;

    return (
        <div className="landing-page">

            {/* NAVBAR */}
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="#">{t('landing.nav.about', 'Sobre mi')}</a>
                    <a href="#">{t('landing.nav.portfolio', 'Portfolio')}</a>
                </div>
                <div className="navbar-right">
                    <a href="#">GitHub</a>
                    <a href="#">LinkedIn</a>
                    <LanguageSwitcher />
                    <div className="apps-icon">⋮⋮⋮</div>                  
                    <Link href={avatarHref} className="avatar">JA</Link>
                </div>
            </nav>

            {/* MAIN */}
            <main className="main">
                <h1 className="logo">Juanan</h1>

                <div className="search-wrapper">
                    <input
                        key={locale}
                        type="text"
                        className="search-input"
                        placeholder=""
                        defaultValue={t('landing.search.default', 'Quien es Juanan?')}
                    />
                    <div className="search-icons">
                        <span className="material-icons">search</span>
               
                    </div>
                </div>

                <div className="buttons">
                    <Link href={route("search")} className="btn">{t('landing.buttons.search', 'Buscar sobre mi')}</Link>
                    <button className="btn">{t('landing.buttons.lucky', 'Voy a tener suerte')}</button>
                </div>

                <p className="idiomas">
                    {t('landing.offered_in', 'Ofrecido en:')} <a href="#">{t('landing.links.projects', 'Proyectos')}</a> <a href="#">{t('landing.links.about', 'Sobre mi')}</a> <a href="#">{t('landing.links.contact', 'Contacto')}</a>
                </p>
            </main>

            {/* FOOTER */}
            <footer className="footer">
                <div className="footer-country">
                    <span>{t('landing.footer.country', 'Espana')}</span>
                </div>
                <div className="footer-links">
                    <div className="footer-left">
                        <a href="#">{t('landing.footer.ads', 'Publicidad')}</a>
                        <a href="#">{t('landing.footer.company', 'Empresa')}</a>
                        <a href="#">{t('landing.footer.how_it_works', 'Como funciona')}</a>
                    </div>
                    <div className="footer-right">
                        <a href="#">{t('landing.footer.privacy', 'Privacidad')}</a>
                        <a href="#">{t('landing.footer.terms', 'Terminos')}</a>
                        <a href="#">{t('landing.footer.settings', 'Configuracion')}</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}