import '../../css/create_modal_projects.css';
import { useForm } from '@inertiajs/react';
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

const quillToolbar = [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
    ['clean'],
];

// Recibe el proyecto a editar como prop
export default function UpdateProjectModal({ project, onClose }) {

    if (!project) return null;

    // Inicializa useForm con los datos existentes del proyecto
    const { data, setData, put, processing, errors } = useForm({
        title:        project.title        ?? { en: '', es: '', ca: '' },
        description1: project.description1 ?? { en: '', es: '', ca: '' },
        description2: project.description2 ?? { en: '', es: '', ca: '' },
        technologies: project.technologies ?? [],
        images:       [],
    });

    function handleMultilang(field, lang, value) {
        setData(field, {
            ...data[field],
            [lang]: value,
        });
    }

    function handleTechnologies(selected) {
        setData('technologies', selected ? selected.map((t) => t.value) : []);
    }

    function handleImages(index, file) {
        const newImages = [...data.images];
        newImages[index] = file;
        setData('images', newImages);
    }

    function handleSubmit(e) {
        e.preventDefault();
        put(route('project.update', project.id), {
            forceFormData: true,
            onSuccess: () => {
                Swal.fire({
                    icon: 'success',
                    title: '¡Actualizado!',
                    text: 'El proyecto se ha actualizado correctamente.',
                    timer: 2000,
                    showConfirmButton: false,
                });
                onClose();
            },
        });
    }

    return (
        <div className="cmp-overlay" onClick={onClose}>
            <div className="cmp-modal" onClick={(e) => e.stopPropagation()}>

                {/* ── BARRA DE TÍTULO ─────────────────────────────── */}
                <div className="cmp-titlebar">
                    <span>Editar proyecto</span>
                    <button className="cmp-titlebar-close" type="button" onClick={onClose}>✕</button>
                </div>

                {/* ── CUERPO ──────────────────────────────────────── */}
                <div className="cmp-body">
                    <form className="cmp-form" onSubmit={handleSubmit}>

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
                                            value={data.title[lang.id]}
                                            onChange={(e) => handleMultilang('title', lang.id, e.target.value)}
                                        />
                                        {errors[`title.${lang.id}`] && (
                                            <p className="cmp-error">{errors[`title.${lang.id}`]}</p>
                                        )}
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
                                value={TECHNOLOGIES.filter((t) => data.technologies.includes(t.value))}
                                onChange={handleTechnologies}
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
                                Haz clic para seleccionar varias tecnologías.
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
                                            value={data.description1[lang.id]}
                                            onChange={(value) => handleMultilang('description1', lang.id, value)}
                                            placeholder={`Descripción en ${lang.label.toLowerCase()}`}
                                            modules={{ toolbar: quillToolbar }}
                                        />
                                        {errors[`description1.${lang.id}`] && (
                                            <p className="cmp-error">{errors[`description1.${lang.id}`]}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── SECCIÓN: IMÁGENES ───────────────────── */}
                        <div className="cmp-section">
                            <div className="cmp-section-header">
                                <h2 className="cmp-section-title">Imágenes</h2>
                                <p className="cmp-section-desc">
                                    Sube nuevas imágenes para reemplazar las existentes.
                                    Si no seleccionas ninguna se conservan las actuales.
                                </p>
                            </div>

                            {/* Imágenes actuales */}
                            {project.images && project.images.length > 0 && (
                                <div className="cmp-images-grid" style={{ marginBottom: '16px' }}>
                                    {project.images.map((img, index) => (
                                        <div key={index} className="cmp-image-slot">
                                            <div className="cmp-image-preview" style={{ padding: 0, overflow: 'hidden' }}>
                                                <img
                                                    src={`/storage/${img}`}
                                                    alt={`Imagen ${index + 1}`}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            </div>
                                            <p className="cmp-multiselect-hint">Imagen actual {index + 1}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Nuevas imágenes */}
                            <div className="cmp-images-grid">
                                {[0, 1, 2, 3, 4].map((index) => (
                                    <div key={index} className="cmp-image-slot">
                                        <div className="cmp-image-preview">
                                            <span className="cmp-image-placeholder">+</span>
                                        </div>
                                        <label className="cmp-label" htmlFor={`image_${index}`}>
                                            Nueva imagen {index + 1}
                                        </label>
                                        <input
                                            id={`image_${index}`}
                                            name={`images[${index}]`}
                                            type="file"
                                            accept="image/*"
                                            className="cmp-file-input"
                                            onChange={(e) => handleImages(index, e.target.files[0])}
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
                                            value={data.description2[lang.id]}
                                            onChange={(value) => handleMultilang('description2', lang.id, value)}
                                            placeholder={`Descripción en ${lang.label.toLowerCase()}`}
                                            modules={{ toolbar: quillToolbar }}
                                        />
                                        {errors[`description2.${lang.id}`] && (
                                            <p className="cmp-error">{errors[`description2.${lang.id}`]}</p>
                                        )}
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
                                disabled={processing}
                            >
                                {processing ? 'Actualizando...' : 'Actualizar proyecto'}
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}