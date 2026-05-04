import '../../css/create_modal_projects.css';
import { useState, useForm } from 'react';
import ReactQuill from 'react-quill-new';
import Swal from 'sweetalert2';
import 'react-quill-new/dist/quill.snow.css';
import Select from 'react-select';

const LANGUAGES = [
    { id: 'en', label: 'Inglés' },
    { id: 'es', label: 'Castellano' },
    { id: 'ca', label: 'Catalán' },
];

const TECHNOLOGIES = [
    { value: 'Laravel', label: 'Laravel' },
    { value: 'React', label: 'React' },
    { value: 'Inertia.js', label: 'Inertia.js' },
    { value: 'Vue.js', label: 'Vue.js' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'MySQL', label: 'MySQL' },
    { value: 'PostgreSQL', label: 'PostgreSQL' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'Docker', label: 'Docker' },
    { value: 'Git', label: 'Git' },
    { value: 'Tailwind CSS', label: 'Tailwind CSS' },
    { value: 'TypeScript', label: 'TypeScript' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'PHP', label: 'PHP' },
    { value: 'API REST', label: 'API REST' },
    { value: 'GraphQL', label: 'GraphQL' },
    { value: 'Redis', label: 'Redis' },
    { value: 'AWS', label: 'AWS' },
    { value: 'CI/CD', label: 'CI/CD' },
];

export default function CreateProjectModal({ onClose }) {



    const [description1, setDescription1] = useState({ en: '', es: '', ca: '' });
    const [description2, setDescription2] = useState({ en: '', es: '', ca: '' });
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);

    // Barra de herramientas igual que en admin/bio.jsx
    const quillToolbar = [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link'],
        ['clean'],
    ];

    function handleDesc1Change(lang, value) {
        setDescription1((prev) => ({ ...prev, [lang]: value }));
    }

    function handleDesc2Change(lang, value) {
        setDescription2((prev) => ({ ...prev, [lang]: value }));
    }

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
                            <Select
                                isMulti
                                name="technologies"
                                options={TECHNOLOGIES}
                                value={selectedTechnologies}
                                onChange={(selected) => setSelectedTechnologies(selected)}
                                placeholder="Selecciona tecnologías..."
                                noOptionsMessage={() => 'No se encontraron tecnologías'}
                                classNamePrefix="cmp-select"
                                styles={{
                                    input: (base) => ({
                                        ...base,
                                        outline: 'none',
                                        boxShadow: 'none',
                                    }),
                                    control: (base, state) => ({
                                        ...base,
                                        outline: 'none',
                                        boxShadow: 'none',
                                        borderColor: state.isFocused ? '#6366f1' : '#d1d5db',
                                    }),
                                }}
                            />
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
                                        <ReactQuill
                                            theme="snow"
                                            value={description1[lang.id]}
                                            onChange={(value) => handleDesc1Change(lang.id, value)}
                                            placeholder={`Descripción en ${lang.label.toLowerCase()}`}
                                            modules={{ toolbar: quillToolbar }}
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
                                        <ReactQuill
                                            theme="snow"
                                            value={description2[lang.id]}
                                            onChange={(value) => handleDesc2Change(lang.id, value)}
                                            placeholder={`Descripción en ${lang.label.toLowerCase()}`}
                                            modules={{ toolbar: quillToolbar }}
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