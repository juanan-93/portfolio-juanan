import "../../css/modal_projects.css";

export default function ModalProjects({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="retro-modal-overlay" onClick={onClose}>
            <div className="retro-modal" onClick={(e) => e.stopPropagation()}>

                {/* BARRA DE TÍTULO — estilo ventana Windows 98 */}
                <div className="retro-modal-titlebar">
                    <span>📁 {project.title}</span>
                    <div className="retro-modal-controls">
                        <span>_</span>
                        <span>[]</span>
                        <span onClick={onClose}>X</span>
                    </div>
                </div>

                {/* CUERPO DEL MODAL */}
                <div className="retro-modal-body">

                    {/* META — estado y año */}
                    <div className="retro-modal-meta">
                        <span className={`retro-project-status-dot is-${project.status}`} />
                        <span className={`retro-project-status is-${project.status}`}>{project.statusLabel}</span>
                        <span className="retro-project-year">{project.year}</span>
                        <span className="retro-modal-client">{project.client}</span>
                    </div>

                    <div className="retro-rainbow-separator" />

                    {/* BLOQUE 1 — Descripción inicial del proyecto */}
                    <div className="retro-modal-section">
                        <p className="retro-modal-section-title">// DESCRIPCION DEL PROYECTO</p>
                        <p className="retro-modal-section-text">{project.description}</p>
                    </div>

                    {/* BLOQUE 2 — Logros / resultados */}
                    <div className="retro-modal-section">
                        <p className="retro-modal-section-title">// RESULTADOS OBTENIDOS</p>
                        <ul className="retro-modal-achievements">
                            {project.achievements.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="retro-rainbow-separator" />

                    {/* BLOQUE 3 — Galería de imágenes */}
                    <div className="retro-modal-section">
                        <p className="retro-modal-section-title">// GALERIA DEL PROYECTO</p>
                        <div className="retro-modal-gallery">
                            {/* Imagen principal grande */}
                            <div className="retro-modal-gallery-main">
                                <img src="/img/projects/placeholder.jpg" alt="Vista principal del proyecto" />
                                <p className="retro-modal-gallery-caption">Vista principal</p>
                            </div>
                            {/* Imágenes secundarias */}
                            <div className="retro-modal-gallery-grid">
                                <div className="retro-modal-gallery-item">
                                    <img src="/img/projects/placeholder.jpg" alt="Captura 1" />
                                    <p className="retro-modal-gallery-caption">Captura 1</p>
                                </div>
                                <div className="retro-modal-gallery-item">
                                    <img src="/img/projects/placeholder.jpg" alt="Captura 2" />
                                    <p className="retro-modal-gallery-caption">Captura 2</p>
                                </div>
                                <div className="retro-modal-gallery-item">
                                    <img src="/img/projects/placeholder.jpg" alt="Captura 3" />
                                    <p className="retro-modal-gallery-caption">Captura 3</p>
                                </div>
                                <div className="retro-modal-gallery-item">
                                    <img src="/img/projects/placeholder.jpg" alt="Captura 4" />
                                    <p className="retro-modal-gallery-caption">Captura 4</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="retro-rainbow-separator" />

                    {/* BLOQUE 4 — Descripción técnica final */}
                    <div className="retro-modal-section">
                        <p className="retro-modal-section-title">// DETALLES TECNICOS</p>
                        <p className="retro-modal-section-text">
                            Descripcion tecnica detallada del proyecto. Aqui ira informacion sobre
                            la arquitectura, decisiones de diseno y retos superados durante
                            el desarrollo.
                        </p>
                    </div>

                    {/* STACK TECNOLÓGICO */}
                    <div className="retro-modal-section">
                        <p className="retro-modal-section-title">// STACK TECNOLOGICO</p>
                        <div className="retro-modal-tech">
                            {project.tech.map((tech) => (
                                <span key={tech} className="retro-tech-pill">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="retro-rainbow-separator" />

                    {/* BOTONES */}
                    <div className="retro-modal-actions">
                        <button className="retro-btn" type="button">
                            SOLICITAR INFO
                        </button>
                        <button className="retro-modal-close-btn" type="button" onClick={onClose}>
                            CERRAR
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}