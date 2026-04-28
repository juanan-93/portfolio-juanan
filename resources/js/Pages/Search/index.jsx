import "../../../css/search.css";
import { Link, usePage } from "@inertiajs/react";
import LanguageSwitcher from "@/Components/LanguageSwitcher";


export default function Index() {
    const { auth, translations = {}, locale } = usePage().props;
    const avatarHref = auth.user ? route("dashboard") : route("login");
    const t = (key, fallback) => translations[key] ?? fallback;

    return (
        <div className="search-page">

            {/* NAVBAR */}
            <nav className="search-navbar">
                <div className="search-navbar-left">
                    <Link href={route("landing")} className="search-logo">Juanan</Link>
                    <div className="search-bar-wrapper">
                        <input
                            key={locale}
                            type="text"
                            className="search-bar-input"
                            defaultValue={t("search.query.default", "juan antonio")}
                        />
                        <div className="search-bar-icons">
                            <span className="material-icons search-icon-clear">close</span>
                            <div className="search-bar-divider"></div>                        
                            <span className="material-icons search-icon-search">search</span>
                        </div>
                    </div>
                </div>
                <div className="search-navbar-right">
                    <LanguageSwitcher />
                    <span className="material-icons">apps</span>
                    <Link href={avatarHref} className="avatar">JA</Link>
                </div>
            </nav>

            {/* FILTROS */}
            <div className="search-filters">
                <div className="search-filters-left">
                    <a href="#" className="filter-item">{t("search.filters.ai_mode", "Modo IA")}</a>
                    <a href="#" className="filter-item active">{t("search.filters.all", "Todo")}</a>
                    <a href="#" className="filter-item">{t("search.filters.projects", "Proyectos")}</a>
                    <a href="#" className="filter-item">{t("search.filters.about", "Sobre mi")}</a>
                    <a href="#" className="filter-item">{t("search.filters.contact", "Contacto")}</a>
                    <a href="#" className="filter-item">GitHub</a>
                    <a href="#" className="filter-item">{t("search.filters.more", "Mas")} ▾</a>
                </div>
            </div>

            <div className="search-divider"></div>

            {/* CONTENIDO PRINCIPAL */}
            <div className="search-content">

                {/* COLUMNA IZQUIERDA */}
                <div className="search-left">

                    {/* CABECERA DE RESULTADO PRINCIPAL */}
                    <div className="result-header">
                        <h1 className="result-header-title">{t("search.hero.title", "Juanan Alvarez Peinado")}</h1>
                        <p className="result-header-subtitle">{t("search.hero.role", "Desarrollador Full Stack")} · <span className="result-header-dots">⋮</span></p>
                        <div className="result-header-tabs">
                            <button className="result-tab active">{t("search.hero.tab.general_info", "Informacion general")}</button>
                        </div>
                    </div>

                    {/* GRID DE IMÁGENES / CARDS */}
                    <div className="result-media-grid">
                        <div className="result-media-main">
                            <img src="/img/foto-perfil.jpg" alt={t("search.media.alt.profile_photo", "Foto principal")} />
                        </div>
                        <div className="result-media-secondary">
                            <img src="/img/proyecto-1.jpg" alt={t("search.media.alt.project_1", "Proyecto 1")} />
                            <img src="/img/proyecto-2.jpg" alt={t("search.media.alt.project_2", "Proyecto 2")} />
                        </div>
                        <div className="result-media-card">
                            <img src="/img/proyecto-3.jpg" alt={t("search.media.alt.project_3", "Proyecto 3")} />
                            <div className="result-media-card-info">
                                <p className="result-media-card-source">{t("search.media.card.source", "GitHub · juanan-93")}</p>
                                <p className="result-media-card-title">{t("search.media.card.title", "Portfolio Personal")}</p>
                                <p className="result-media-card-desc">{t("search.media.card.description", "Repositorio con todos mis proyectos destacados.")}</p>
                                <span className="result-media-card-date">{t("search.media.card.year", "2024")}</span>
                            </div>
                        </div>
                        <div className="result-media-dates">
                            <div className="result-date-card">
                                <p className="result-date-label">{t("search.media.dates.professional_start.label", "Inicio profesional")}</p>
                                <p className="result-date-value">{t("search.media.dates.professional_start.value", "2020")}</p>
                                <p className="result-date-place">{t("search.media.dates.professional_start.place", "Espana")}</p>
                            </div>
                            <div className="result-date-card">
                                <p className="result-date-label">{t("search.media.dates.availability.label", "Disponibilidad")}</p>
                                <p className="result-date-value">{t("search.media.dates.availability.value", "Inmediata")}</p>
                                <p className="result-date-place">{t("search.media.dates.availability.place", "Remoto o presencial")}</p>
                            </div>
                        </div>
                    </div>

                    {/* RESULTADO WIKIPEDIA STYLE */}
                    <div className="result-item">
                        <div className="result-item-source">
                            <div className="result-item-favicon">JA</div>
                            <div>
                                <p className="result-item-site">{t("search.results.about.site", "Sobre mi")}</p>
                                <p className="result-item-url">juanan.dev › sobre-mi</p>
                            </div>
                            <span className="result-item-dots">⋮</span>
                        </div>
                        <a href={route("about-me")} className="result-item-title">{t("search.results.about.title", "Juan Antonio — Desarrollador Full Stack | Portfolio")}</a>
                        <p className="result-item-desc">{t("search.results.about.description", "Desarrollador Full Stack con experiencia en Laravel, React e Inertia.js. Apasionado por crear aplicaciones web modernas, limpias y escalables. Disponible para proyectos freelance o posicion estable.")}</p>
                    </div>                
                    
                    {/* RESULTADO MIS PROYECTOS */}
                    <div className="result-item">
                        <div className="result-item-source">
                            <div className="result-item-favicon">P</div>
                            <div>
                                <p className="result-item-site">{t("search.results.projects.site", "Portfolio")}</p>
                                <p className="result-item-url">juanan.dev › proyectos</p>
                            </div>
                            <span className="result-item-dots">⋮</span>
                        </div>
                        <a href={route("projects")} className="result-item-title">{t("search.results.projects.title", "Mis Proyectos — Juan Antonio Garcia")}</a>
                        <p className="result-item-desc">{t("search.results.projects.description", "Coleccion de proyectos desarrollados con Laravel, React, Inertia.js y Node.js. Desde aplicaciones web completas hasta APIs REST y herramientas internas.")}</p>
                    </div>

                    {/* RESULTADO GITHUB STYLE */}
                    <div className="result-item">
                        <div className="result-item-source">
                            <div className="result-item-favicon">G</div>
                            <div>
                                <p className="result-item-site">{t("search.results.github.site", "GitHub")}</p>
                                <p className="result-item-url">github.com › juanan-93</p>
                            </div>
                            <span className="result-item-dots">⋮</span>
                        </div>
                        <a href="#" className="result-item-title">{t("search.results.github.title", "juanan-93 — GitHub")}</a>
                        <p className="result-item-desc">{t("search.results.github.description", "Repositorio publico con proyectos desarrollados con Laravel, React, Vue y Node.js. Mas de 20 repositorios publicos disponibles.")}</p>
                        <img src="/img/proyecto-1.jpg" alt={t("search.results.github.site", "GitHub")} className="result-item-thumb" />
                    </div>

                    {/* RESULTADO LINKEDIN */}
                    <div className="result-item">
                        <div className="result-item-source">
                            <div className="result-item-favicon">in</div>
                            <div>
                                <p className="result-item-site">{t("search.results.linkedin.site", "LinkedIn")}</p>
                                <p className="result-item-url">linkedin.com › in › juanan</p>
                            </div>
                            <span className="result-item-dots">⋮</span>
                        </div>
                        <a href="#" className="result-item-title">{t("search.results.linkedin.title", "Juan Antonio Garcia — LinkedIn")}</a>
                        <p className="result-item-desc">{t("search.results.linkedin.description", "Perfil profesional de Juan Antonio Garcia, Desarrollador Full Stack. Experiencia en Laravel, React e Inertia.js. Abierto a nuevas oportunidades laborales.")}</p>
                    </div>

                    {/* RESULTADO JUEGA */}
                    <div className="result-item">
                        <div className="result-item-source">
                            <div className="result-item-favicon">J</div>
                            <div>
                                <p className="result-item-site">{t("search.results.game.site", "Juega")}</p>
                                <p className="result-item-url">juanan.dev › juega</p>
                            </div>
                            <span className="result-item-dots">⋮</span>
                        </div>
                        <a href={route("game")} className="result-item-title">{t("search.results.game.title", "Estas aburrido?")}</a>
                        <p className="result-item-desc">{t("search.results.game.description", "Echate unas partidas y intenta superar mi record. Un juego sencillo pero adictivo desarrollado con React y JavaScript.")}</p>
                    </div>

                </div>

                {/* COLUMNA DERECHA — Panel de información */}
                <div className="search-right">
                    <div className="info-panel">
                        <h2 className="info-panel-title">{t("search.info.title", "Informacion")}</h2>
                        <p className="info-panel-desc">
                            {t("search.info.description", "Juan Antonio Garcia, conocido como juanan-93, es un Desarrollador Full Stack especializado en el ecosistema PHP y JavaScript moderno.")} <a href="#">{t("search.info.source_link", "Portfolio")}</a>
                        </p>
                        <table className="info-table">
                            <tbody>
                                <tr>
                                    <td className="info-table-label">{t("search.info.location.label", "Ubicacion")}</td>
                                    <td className="info-table-value"><a href="#">{t("search.info.location.value", "Espana")}</a></td>
                                </tr>
                                <tr>
                                    <td className="info-table-label">{t("search.info.specialty.label", "Especialidad")}</td>
                                    <td className="info-table-value"><a href="#">{t("search.info.specialty.value", "Full Stack")}</a> · {t("search.info.see_more", "Ver mas")}</td>
                                </tr>
                                <tr>
                                    <td className="info-table-label">{t("search.info.main_stack.label", "Stack principal")}</td>
                                    <td className="info-table-value"><a href="#">{t("search.info.main_stack.first", "Laravel")}</a>, <a href="#">{t("search.info.main_stack.second", "React")}</a> · {t("search.info.see_more", "Ver mas")}</td>
                                </tr>
                                <tr>
                                    <td className="info-table-label">{t("search.info.github.label", "GitHub")}</td>
                                    <td className="info-table-value"><a href="#">{t("search.info.github.value", "juanan-93")}</a></td>
                                </tr>
                                <tr>
                                    <td className="info-table-label">{t("search.info.availability.label", "Disponibilidad")}</td>
                                    <td className="info-table-value"><a href="#">{t("search.info.availability.value", "Inmediata")}</a></td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="info-panel-suggestion">{t("search.info.suggestions", "Sugerencias")}</p>
                    </div>

                </div>

            </div>

            {/* FOOTER */}
            <footer className="search-footer">
                <div className="footer-country">
                    <span>{t("search.footer.country", "Espana")}</span>
                </div>
                <div className="footer-links">
                    <div className="footer-left">
                        <a href="#">{t("search.footer.ads", "Publicidad")}</a>
                        <a href="#">{t("search.footer.company", "Empresa")}</a>
                        <a href="#">{t("search.footer.how_it_works", "Como funciona")}</a>
                    </div>
                    <div className="footer-right">
                        <a href="#">{t("search.footer.privacy", "Privacidad")}</a>
                        <a href="#">{t("search.footer.terms", "Terminos")}</a>
                        <a href="#">{t("search.footer.settings", "Configuracion")}</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}