import "../../../css/search.css";

export default function Index() {
    return (
        <div className="search-page">

            {/* NAVBAR */}
            <nav className="search-navbar">
                <div className="search-navbar-left">
                    <a href="/" className="search-logo">Juanan</a>
                    <div className="search-bar-wrapper">
                        <input
                            type="text"
                            className="search-bar-input"
                            defaultValue="juan antonio"
                        />
                        <div className="search-bar-icons">
                            <span className="material-icons search-icon-clear">close</span>
                            <div className="search-bar-divider"></div>                        
                            <span className="material-icons search-icon-search">search</span>
                        </div>
                    </div>
                </div>
                <div className="search-navbar-right">
                    <span className="material-icons">apps</span>
                    <div className="avatar">JA</div>
                </div>
            </nav>

            {/* FILTROS */}
            <div className="search-filters">
                <div className="search-filters-left">
                    <a href="#" className="filter-item">Modo IA</a>
                    <a href="#" className="filter-item active">Todo</a>
                    <a href="#" className="filter-item">Proyectos</a>
                    <a href="#" className="filter-item">Sobre mí</a>
                    <a href="#" className="filter-item">Contacto</a>
                    <a href="#" className="filter-item">GitHub</a>
                    <a href="#" className="filter-item">Más ▾</a>
                </div>
            </div>

            <div className="search-divider"></div>

            {/* CONTENIDO PRINCIPAL */}
            <div className="search-content">

                {/* COLUMNA IZQUIERDA */}
                <div className="search-left">

                    {/* CABECERA DE RESULTADO PRINCIPAL */}
                    <div className="result-header">
                        <h1 className="result-header-title">Juan Antonio García</h1>
                        <p className="result-header-subtitle">Desarrollador Full Stack · <span className="result-header-dots">⋮</span></p>
                        <div className="result-header-tabs">
                            <button className="result-tab active">Información general</button>                           
                        </div>
                    </div>

                    {/* GRID DE IMÁGENES / CARDS */}
                    <div className="result-media-grid">
                        <div className="result-media-main">
                            <img src="/img/foto-perfil.jpg" alt="Foto principal" />
                        </div>
                        <div className="result-media-secondary">
                            <img src="/img/proyecto-1.jpg" alt="Proyecto 1" />
                            <img src="/img/proyecto-2.jpg" alt="Proyecto 2" />
                        </div>
                        <div className="result-media-card">
                            <img src="/img/proyecto-3.jpg" alt="Proyecto 3" />
                            <div className="result-media-card-info">
                                <p className="result-media-card-source">GitHub · juanan-93</p>
                                <p className="result-media-card-title">Portfolio Personal</p>
                                <p className="result-media-card-desc">Repositorio con todos mis proyectos destacados.</p>
                                <span className="result-media-card-date">2024</span>
                            </div>
                        </div>
                        <div className="result-media-dates">
                            <div className="result-date-card">
                                <p className="result-date-label">Inicio profesional</p>
                                <p className="result-date-value">2020</p>
                                <p className="result-date-place">España</p>
                            </div>
                            <div className="result-date-card">
                                <p className="result-date-label">Disponibilidad</p>
                                <p className="result-date-value">Inmediata</p>
                                <p className="result-date-place">Remoto o presencial</p>
                            </div>
                        </div>
                    </div>

                    {/* RESULTADO WIKIPEDIA STYLE */}
                    <div className="result-item">
                        <div className="result-item-source">
                            <div className="result-item-favicon">JA</div>
                            <div>
                                <p className="result-item-site">Sobre mi</p>
                                <p className="result-item-url">juanan.dev › sobre-mi</p>
                            </div>
                            <span className="result-item-dots">⋮</span>
                        </div>
                        <a href={route("about-me")} className="result-item-title">Juan Antonio — Desarrollador Full Stack | Portfolio</a>
                        <p className="result-item-desc">
                            Desarrollador Full Stack con experiencia en <strong>Laravel, React e Inertia.js</strong>. Apasionado por crear aplicaciones web modernas, limpias y escalables. Disponible para proyectos freelance o posición estable.
                        </p>
                    </div>                
                    
                    {/* RESULTADO MIS PROYECTOS */}
                    <div className="result-item">
                        <div className="result-item-source">
                            <div className="result-item-favicon">P</div>
                            <div>
                                <p className="result-item-site">Portfolio</p>
                                <p className="result-item-url">juanan.dev › proyectos</p>
                            </div>
                            <span className="result-item-dots">⋮</span>
                        </div>
                        <a href="#" className="result-item-title">Mis Proyectos — Juan Antonio García</a>
                        <p className="result-item-desc">
                            Colección de proyectos desarrollados con <strong>Laravel, React, Inertia.js y Node.js</strong>. Desde aplicaciones web completas hasta APIs REST y herramientas internas.
                        </p>
                    </div>

                    {/* RESULTADO GITHUB STYLE */}
                    <div className="result-item">
                        <div className="result-item-source">
                            <div className="result-item-favicon">G</div>
                            <div>
                                <p className="result-item-site">GitHub</p>
                                <p className="result-item-url">github.com › juanan-93</p>
                            </div>
                            <span className="result-item-dots">⋮</span>
                        </div>
                        <a href="#" className="result-item-title">juanan-93 — GitHub</a>
                        <p className="result-item-desc">
                            Repositorio público con proyectos desarrollados con <strong>Laravel, React, Vue y Node.js</strong>. Más de 20 repositorios públicos disponibles.
                        </p>
                        <img src="/img/proyecto-1.jpg" alt="GitHub" className="result-item-thumb" />
                    </div>

                    {/* RESULTADO LINKEDIN */}
                    <div className="result-item">
                        <div className="result-item-source">
                            <div className="result-item-favicon">in</div>
                            <div>
                                <p className="result-item-site">LinkedIn</p>
                                <p className="result-item-url">linkedin.com › in › juanan</p>
                            </div>
                            <span className="result-item-dots">⋮</span>
                        </div>
                        <a href="#" className="result-item-title">Juan Antonio García — LinkedIn</a>
                        <p className="result-item-desc">
                            Perfil profesional de Juan Antonio García, Desarrollador Full Stack. Experiencia en <strong>Laravel, React e Inertia.js</strong>. Abierto a nuevas oportunidades laborales.
                        </p>
                    </div>

                    {/* RESULTADO JUEGA */}
                    <div className="result-item">
                        <div className="result-item-source">
                            <div className="result-item-favicon">J</div>
                            <div>
                                <p className="result-item-site">Juega</p>
                                <p className="result-item-url">juanan.dev › juega</p>
                            </div>
                            <span className="result-item-dots">⋮</span>
                        </div>
                        <a href="#" className="result-item-title">Juega — Juan Antonio García</a>
                        <p className="result-item-desc">
                            Sección interactiva del portfolio. Descubre proyectos y experimentos de una forma diferente.
                        </p>
                    </div>

                </div>

                {/* COLUMNA DERECHA — Panel de información */}
                <div className="search-right">
                    <div className="info-panel">
                        <h2 className="info-panel-title">Información</h2>
                        <p className="info-panel-desc">
                            Juan Antonio García, conocido como juanan-93, es un Desarrollador Full Stack especializado en el ecosistema PHP y JavaScript moderno. <a href="#">Portfolio</a>
                        </p>
                        <table className="info-table">
                            <tbody>
                                <tr>
                                    <td className="info-table-label">Ubicación</td>
                                    <td className="info-table-value"><a href="#">España</a></td>
                                </tr>
                                <tr>
                                    <td className="info-table-label">Especialidad</td>
                                    <td className="info-table-value"><a href="#">Full Stack</a> · Ver más</td>
                                </tr>
                                <tr>
                                    <td className="info-table-label">Stack principal</td>
                                    <td className="info-table-value"><a href="#">Laravel</a>, <a href="#">React</a> · Ver más</td>
                                </tr>
                                <tr>
                                    <td className="info-table-label">GitHub</td>
                                    <td className="info-table-value"><a href="#">juanan-93</a></td>
                                </tr>
                                <tr>
                                    <td className="info-table-label">Disponibilidad</td>
                                    <td className="info-table-value"><a href="#">Inmediata</a></td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="info-panel-suggestion">Sugerencias</p>
                    </div>

                </div>

            </div>

            {/* FOOTER */}
            <footer className="search-footer">
                <div className="footer-country">
                    <span>España</span>
                </div>
                <div className="footer-links">
                    <div className="footer-left">
                        <a href="#">Publicidad</a>
                        <a href="#">Empresa</a>
                        <a href="#">Cómo funciona</a>
                    </div>
                    <div className="footer-right">
                        <a href="#">Privacidad</a>
                        <a href="#">Términos</a>
                        <a href="#">Configuración</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}