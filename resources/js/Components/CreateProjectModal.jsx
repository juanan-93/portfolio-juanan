import '../../css/create_modal_projects.css';

const LANGUAGES = [
    { id: 'en', label: 'Inglés' },
    { id: 'es', label: 'Castellano' },
    { id: 'ca', label: 'Catalán' },
];

const TECHNOLOGIES = [
    'Laravel', 'React', 'Inertia.js', 'Vue.js', 'Node.js',
    'MySQL', 'PostgreSQL', 'MongoDB', 'Docker', 'Git',
    'Tailwind CSS', 'TypeScript', 'JavaScript', 'PHP',
    'API REST', 'GraphQL', 'Redis', 'AWS', 'CI/CD',
];

export default function CreateProjectModal({ onClose }) {

    return (
        <div className="cmp-overlay" onClick={onClose}>
            <div className="cmp-modal" onClick={(e) => e.stopPropagation()}>

                {/* ── BARRA DE TÍTULO ─────────────────────────────── */}
                <div className="cmp-titlebar">
                    <span>Nuevo proyecto</span>
                    <button className="cmp-titlebar-close" type="button" onClick={onClose}>✕</button>
                </div>

                {/* ── CUERPO ──────────────────────────────────────── */}
                <div className="cmp-body">
                    <form className="cmp-form">

                        {/* ── SECCIÓN: TÍTULOS ────────────────────── */}
                        <div className="cmp-section">
                            <div className="cmp-section-header">
                                <h2 className="cmp-section-title">Títulos</h2>
                                <p className="cmp-section-desc">Título del proyecto en cada idioma.</p>
                            </div>
                            <div className="cmp-grid cmp-grid--three">
                                {LANGUAGES.map((lang) => (
                                    <div key={`title-${lang.id}`} className="cmp-field-group">
                                        <label className="cmp-label" htmlFor={`title_${lang.id}`}>
                                            Título — {lang.label}
                                        </label>
                                        <input
                                            id={`title_${lang.id}`}
                                            name={`title_${lang.id}`}
                                            type="text"
                                            className="cmp-input"
                                            placeholder={`Título en ${lang.label.toLowerCase()}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── SECCIÓN: TECNOLOGÍAS ────────────────── */}
                        <div className="cmp-section">
                            <div className="cmp-section-header">
                                <h2 className="cmp-section-title">Tecnologías</h2>
                                <p className="cmp-section-desc">Selecciona las tecnologías usadas en este proyecto.</p>
                            </div>
                            <select
                                name="technologies"
                                className="cmp-multiselect"
                                multiple
                                size={6}
                            >
                                {TECHNOLOGIES.map((tech) => (
                                    <option key={tech} value={tech}>{tech}</option>
                                ))}
                            </select>
                            <p className="cmp-multiselect-hint">
                                Mantén Ctrl (Windows) o Cmd (Mac) para seleccionar varias.
                            </p>
                        </div>

                        {/* ── SECCIÓN: DESCRIPCIÓN 1 ──────────────── */}
                        <div className="cmp-section">
                            <div className="cmp-section-header">
                                <h2 className="cmp-section-title">Descripción 1</h2>
                                <p className="cmp-section-desc">Descripción principal del proyecto en cada idioma.</p>
                            </div>
                            <div className="cmp-grid cmp-grid--three">
                                {LANGUAGES.map((lang) => (
                                    <div key={`desc1-${lang.id}`} className="cmp-field-group">
                                        <label className="cmp-label" htmlFor={`description1_${lang.id}`}>
                                            Descripción 1 — {lang.label}
                                        </label>
                                        <textarea
                                            id={`description1_${lang.id}`}
                                            name={`description1_${lang.id}`}
                                            className="cmp-textarea"
                                            placeholder={`Descripción en ${lang.label.toLowerCase()}`}
                                            rows={5}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── SECCIÓN: IMÁGENES ───────────────────── */}
                        <div className="cmp-section">
                            <div className="cmp-section-header">
                                <h2 className="cmp-section-title">Imágenes</h2>
                                <p className="cmp-section-desc">Sube hasta 5 imágenes del proyecto.</p>
                            </div>
                            <div className="cmp-images-grid">
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <div key={num} className="cmp-image-slot">
                                        <div className="cmp-image-preview">
                                            <span className="cmp-image-placeholder">+</span>
                                        </div>
                                        <label className="cmp-label" htmlFor={`image_${num}`}>
                                            Imagen {num}
                                        </label>
                                        <input
                                            id={`image_${num}`}
                                            name={`image_${num}`}
                                            type="file"
                                            accept="image/*"
                                            className="cmp-file-input"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── SECCIÓN: DESCRIPCIÓN 2 ──────────────── */}
                        <div className="cmp-section">
                            <div className="cmp-section-header">
                                <h2 className="cmp-section-title">Descripción 2</h2>
                                <p className="cmp-section-desc">Descripción secundaria o técnica en cada idioma.</p>
                            </div>
                            <div className="cmp-grid cmp-grid--three">
                                {LANGUAGES.map((lang) => (
                                    <div key={`desc2-${lang.id}`} className="cmp-field-group">
                                        <label className="cmp-label" htmlFor={`description2_${lang.id}`}>
                                            Descripción 2 — {lang.label}
                                        </label>
                                        <textarea
                                            id={`description2_${lang.id}`}
                                            name={`description2_${lang.id}`}
                                            className="cmp-textarea"
                                            placeholder={`Descripción en ${lang.label.toLowerCase()}`}
                                            rows={5}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── BOTONES ─────────────────────────────── */}
                        <div className="cmp-actions">
                            <button
                                type="button"
                                className="cmp-btn-cancel"
                                onClick={onClose}
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="cmp-btn-submit"
                            >
                                Guardar proyecto
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}