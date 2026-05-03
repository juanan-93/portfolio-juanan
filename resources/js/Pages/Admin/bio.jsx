import '../../../css/bio.css';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Swal from 'sweetalert2';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';


// ─── Idiomas disponibles ───────────────────────────────────────────────────────
const languages = [
    { id: 'en', label: 'Inglés' },
    { id: 'es', label: 'Castellano' },
    { id: 'ca', label: 'Catalán' },
];

// ─── Configuración de la barra de herramientas de Quill ───────────────────────
const quillToolbar = [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
    ['clean'],
];

// ─── Grupos de campos largos con editor Quill ─────────────────────────────────
// Cada objeto representa una card completa con sus editores por idioma.
// Al añadir aquí un nuevo grupo, aparece automáticamente en el formulario.
const textareaGroups = [
    {
        id: 'bio',
        title: 'Biografía',
        description: 'Biografía personal en cada idioma.',
    },
    {
        id: 'professional_career',
        title: 'Trayectoria profesional',
        description: 'Resumen profesional en cada idioma.',
    },
    {
        id: 'technical_skills',
        title: 'Habilidades técnicas',
        description: 'Habilidades y tecnologías en cada idioma.',
    },
    {
        id: 'projects',
        title: 'Proyectos',
        description: 'Proyectos destacados en cada idioma.',
    },
    {
        id: 'education',
        title: 'Educación',
        description: 'Formación académica en cada idioma.',
    },
    {
        id: 'external_links',
        title: 'Enlaces externos',
        description: 'Links a redes, portfolio, etc. en cada idioma.',
    },
];


export default function Bio({ bio }) {

    const isEditing = bio !== null && bio !== undefined;

    const { data, setData, post, put, processing, errors } = useForm({
        // Si hay bio usamos sus valores, si no usamos cadenas vacías
        title:               bio?.title               ?? { en: '', es: '', ca: '' },
        bio:                 bio?.bio                 ?? { en: '', es: '', ca: '' },
        professional_career: bio?.professional_career  ?? { en: '', es: '', ca: '' },
        technical_skills:    bio?.technical_skills     ?? { en: '', es: '', ca: '' },
        projects:            bio?.projects             ?? { en: '', es: '', ca: '' },
        education:           bio?.education            ?? { en: '', es: '', ca: '' },
        external_links:      bio?.external_links       ?? { en: '', es: '', ca: '' },
        nationality:         bio?.nationality          ?? { en: '', es: '', ca: '' },
        occupation:          bio?.occupation           ?? { en: '', es: '', ca: '' },
        employer:            bio?.employer             ?? { en: '', es: '', ca: '' },
        img:                  null,
        birthdate:            bio?.birthdate            ?? '',
        years_active_from:    bio?.years_active_from    ?? '',
        years_active_to:      bio?.years_active_to      ?? '',
        years_active_current: bio?.years_active_current ?? false,
    });


    function handleSubmit(e) {
        e.preventDefault();

        if (isEditing) {
            put(route('bio.update', bio.id), {
                forceFormData: true,
                onSuccess: () => {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Actualizado!',
                        text: 'La bio se ha actualizado correctamente.',
                        timer: 2000,
                        showConfirmButton: false,
                    });
                },
            });
        } else {
            post(route('bio.store'), {
                forceFormData: true,
                onSuccess: () => {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Guardado!',
                        text: 'La bio se ha guardado correctamente.',
                        timer: 2000,
                        showConfirmButton: false,
                    });
                },
            });
        }
    }


    // Actualiza un campo multiidioma conservando los otros idiomas intactos.
    function handleMultilang(field, lang, value) {
        setData(field, {
            ...data[field],
            [lang]: value,
        });
    }


    return (
        <section className="bio-section">

            {/* ── Cabecera ────────────────────────────────────────────────── */}
            <div className="bio-header">
                <h1 className="bio-title">Sobre mí</h1>
                <p className="bio-description">
                    Gestiona el contenido biográfico que se mostrará en la web.
                </p>
            </div>


            <form className="bio-form" onSubmit={handleSubmit}>

                {/* ── TÍTULOS ─────────────────────────────────────────────── */}
                <div className="bio-card">
                    <div className="bio-card-header">
                        <h2 className="bio-card-title">Títulos</h2>
                        <p className="bio-card-description">
                            Define el título principal para cada idioma.
                        </p>
                    </div>

                    <div className="bio-grid bio-grid--three">
                        {languages.map((language) => (
                            <div key={`title-${language.id}`}>
                                <InputLabel
                                    htmlFor={`title_${language.id}`}
                                    value={`Título - ${language.label}`}
                                />
                                <TextInput
                                    id={`title_${language.id}`}
                                    name={`title_${language.id}`}
                                    className="bio-field"
                                    placeholder={`Título en ${language.label.toLowerCase()}`}
                                    value={data.title[language.id]}
                                    onChange={(e) => handleMultilang('title', language.id, e.target.value)}
                                />
                                {errors[`title.${language.id}`] && (
                                    <p className="bio-error">{errors[`title.${language.id}`]}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>


                {/* ── NATIONALITY + OCCUPATION ────────────────────────────── */}
                <div className="bio-card">
                    <div className="bio-card-header">
                        <h2 className="bio-card-title">Identidad profesional</h2>
                        <p className="bio-card-description">
                            Nacionalidad y ocupación en cada idioma.
                        </p>
                    </div>

                    <div className="bio-grid bio-grid--three">
                        {languages.map((language) => (
                            <div key={`nationality-${language.id}`}>
                                <InputLabel
                                    htmlFor={`nationality_${language.id}`}
                                    value={`Nacionalidad - ${language.label}`}
                                />
                                <TextInput
                                    id={`nationality_${language.id}`}
                                    name={`nationality_${language.id}`}
                                    className="bio-field"
                                    placeholder={`Nacionalidad en ${language.label.toLowerCase()}`}
                                    value={data.nationality[language.id]}
                                    onChange={(e) => handleMultilang('nationality', language.id, e.target.value)}
                                />
                                {errors[`nationality.${language.id}`] && (
                                    <p className="bio-error">{errors[`nationality.${language.id}`]}</p>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="bio-grid bio-grid--three mt-6">
                        {languages.map((language) => (
                            <div key={`occupation-${language.id}`}>
                                <InputLabel
                                    htmlFor={`occupation_${language.id}`}
                                    value={`Ocupación - ${language.label}`}
                                />
                                <TextInput
                                    id={`occupation_${language.id}`}
                                    name={`occupation_${language.id}`}
                                    className="bio-field"
                                    placeholder={`Ocupación en ${language.label.toLowerCase()}`}
                                    value={data.occupation[language.id]}
                                    onChange={(e) => handleMultilang('occupation', language.id, e.target.value)}
                                />
                                {errors[`occupation.${language.id}`] && (
                                    <p className="bio-error">{errors[`occupation.${language.id}`]}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>


                {/* ── CAMPOS LARGOS CON EDITOR QUILL ──────────────────────── */}
                {/* Recorre textareaGroups y genera una card con editor Quill por cada sección */}
                {textareaGroups.map((group) => (
                    <div key={group.id} className="bio-card">
                        <div className="bio-card-header">
                            <h2 className="bio-card-title">{group.title}</h2>
                            <p className="bio-card-description">{group.description}</p>
                        </div>

                        <div className="bio-grid bio-grid--three-large">
                            {languages.map((language) => (
                                <div key={`${group.id}-${language.id}`}>
                                    <InputLabel
                                        htmlFor={`${group.id}_${language.id}`}
                                        value={`${group.title} - ${language.label}`}
                                    />
                                    {/* ReactQuill sustituye al TextInput en campos largos */}
                                    {/* onChange recibe el valor directamente, no un evento */}
                                    <ReactQuill
                                        theme="snow"
                                        value={data[group.id][language.id]}
                                        onChange={(value) => handleMultilang(group.id, language.id, value)}
                                        placeholder={`${group.title} en ${language.label.toLowerCase()}`}
                                        modules={{ toolbar: quillToolbar }}
                                    />
                                    {errors[`${group.id}.${language.id}`] && (
                                        <p className="bio-error">{errors[`${group.id}.${language.id}`]}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}


                {/* ── EMPLOYER ────────────────────────────────────────────── */}
                <div className="bio-card">
                    <div className="bio-card-header">
                        <h2 className="bio-card-title">Empleador</h2>
                        <p className="bio-card-description">
                            Empresa o cliente actual en cada idioma.
                        </p>
                    </div>

                    <div className="bio-grid bio-grid--three">
                        {languages.map((language) => (
                            <div key={`employer-${language.id}`}>
                                <InputLabel
                                    htmlFor={`employer_${language.id}`}
                                    value={`Empleador - ${language.label}`}
                                />
                                <TextInput
                                    id={`employer_${language.id}`}
                                    name={`employer_${language.id}`}
                                    className="bio-field"
                                    placeholder={`Empleador en ${language.label.toLowerCase()}`}
                                    value={data.employer[language.id]}
                                    onChange={(e) => handleMultilang('employer', language.id, e.target.value)}
                                />
                                {errors[`employer.${language.id}`] && (
                                    <p className="bio-error">{errors[`employer.${language.id}`]}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>


                {/* ── DATOS ADICIONALES ───────────────────────────────────── */}
                <div className="bio-card">
                    <div className="bio-card-header">
                        <h2 className="bio-card-title">Datos adicionales</h2>
                        <p className="bio-card-description">
                            Información complementaria de la ficha biográfica.
                        </p>
                    </div>

                    <div className="bio-grid bio-grid--details">

                        <div>
                            <InputLabel htmlFor="img" value="Imagen" />

                            {/* Si ya existe una imagen la mostramos como vista previa */}
                            {isEditing && bio?.img && (
                                <div className="bio-image-preview">
                                    <img
                                        src={`/storage/${bio.img}`}
                                        alt="Imagen actual"
                                        className="bio-image-thumb"
                                    />
                                    <p className="bio-image-caption">Imagen actual. Selecciona una nueva para reemplazarla.</p>
                                </div>
                            )}

                            <input
                                id="img"
                                name="img"
                                type="file"
                                accept="image/*"
                                className="bio-file-input"
                                onChange={(e) => setData('img', e.target.files[0])}
                            />
                            {errors.img && <p className="bio-error">{errors.img}</p>}
                        </div>

                        <div>
                            <InputLabel htmlFor="birthdate" value="Fecha de nacimiento" />
                            <TextInput
                                id="birthdate"
                                name="birthdate"
                                type="date"
                                className="bio-field"
                                value={data.birthdate}
                                onChange={(e) => setData('birthdate', e.target.value)}
                            />
                            {errors.birthdate && <p className="bio-error">{errors.birthdate}</p>}
                        </div>

                        <div>
                            <InputLabel htmlFor="years_active_from" value="Activo desde (año)" />
                            <TextInput
                                id="years_active_from"
                                name="years_active_from"
                                type="number"
                                min="1900"
                                max="2100"
                                className="bio-field"
                                placeholder="Ej: 2010"
                                value={data.years_active_from}
                                onChange={(e) => setData('years_active_from', e.target.value)}
                            />
                            {errors.years_active_from && <p className="bio-error">{errors.years_active_from}</p>}
                        </div>

                        <div>
                            <InputLabel htmlFor="years_active_to" value="Activo hasta (año)" />
                            <TextInput
                                id="years_active_to"
                                name="years_active_to"
                                type="number"
                                min="1900"
                                max="2100"
                                className="bio-field"
                                placeholder="Ej: 2024"
                                value={data.years_active_to}
                                onChange={(e) => setData('years_active_to', e.target.value)}
                            />
                            {errors.years_active_to && <p className="bio-error">{errors.years_active_to}</p>}
                        </div>

                        <div className="bio-checkbox-wrapper">
                            {/* El checkbox usa checked en vez de value */}
                            <input
                                id="years_active_current"
                                name="years_active_current"
                                type="checkbox"
                                className="bio-checkbox"
                                checked={data.years_active_current}
                                onChange={(e) => setData('years_active_current', e.target.checked)}
                            />
                            <InputLabel
                                htmlFor="years_active_current"
                                value="Activo actualmente"
                            />
                        </div>

                    </div>
                </div>


                {/* ── BOTÓN DE ENVÍO ───────────────────────────────────────── */}
                <div className="bio-actions">
                    <button
                        type="submit"
                        className="bio-submit-btn"
                        disabled={processing}
                    >
                        {processing
                            ? isEditing ? 'Actualizando...' : 'Guardando...'
                            : isEditing ? 'Actualizar' : 'Guardar'
                        }
                    </button>
                </div>

            </form>
        </section>
    );
}