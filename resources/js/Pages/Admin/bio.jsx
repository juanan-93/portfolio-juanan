import '../../../css/bio.css';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';


// ─── Idiomas disponibles ───────────────────────────────────────────────────────
const languages = [
    { id: 'en', label: 'Inglés' },
    { id: 'es', label: 'Castellano' },
    { id: 'ca', label: 'Catalán' },
];


// ─── Grupos de textarea multiidioma ───────────────────────────────────────────
// Cada objeto representa una card completa con sus textareas por idioma.
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


export default function Bio() {

    const { data, setData, post, processing, errors } = useForm({
        // Campos multiidioma
        title:               { en: '', es: '', ca: '' },
        bio:                 { en: '', es: '', ca: '' },
        professional_career: { en: '', es: '', ca: '' },
        technical_skills:    { en: '', es: '', ca: '' },
        projects:            { en: '', es: '', ca: '' },
        education:           { en: '', es: '', ca: '' },
        external_links:      { en: '', es: '', ca: '' },
        nationality:         { en: '', es: '', ca: '' },
        occupation:          { en: '', es: '', ca: '' },
        employer:            { en: '', es: '', ca: '' },

        // Campos simples
        img:                  null,
        birthdate:            '',
        years_active_from:    '',
        years_active_to:      '',
        years_active_current: false,
    });


    function handleSubmit(e) {
        e.preventDefault();
        post(route('bio.store'), {
            forceFormData: true,
        });
    }


    // Actualiza un campo multiidioma conservando los otros idiomas intactos.
    // Es como hacer: data.title.es = 'nuevo valor' pero de forma inmutable.
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


                {/* ── NATIONALITY + OCCUPATION (inputs simples multiidioma) ── */}
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

                    {/* Separador visual entre nationality y occupation */}
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


                {/* ── TEXTAREAS MULTIIDIOMA (bio, trayectoria, skills...) ── */}
                {/* Recorre textareaGroups y genera una card por cada sección */}
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
                                    <textarea
                                        id={`${group.id}_${language.id}`}
                                        name={`${group.id}_${language.id}`}
                                        className="bio-textarea"
                                        placeholder={`${group.title} en ${language.label.toLowerCase()}`}
                                        value={data[group.id][language.id]}
                                        onChange={(e) => handleMultilang(group.id, language.id, e.target.value)}
                                    />
                                    {errors[`${group.id}.${language.id}`] && (
                                        <p className="bio-error">{errors[`${group.id}.${language.id}`]}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}


                {/* ── EMPLOYER multiidioma ─────────────────────────────────── */}
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

                        {/* Imagen */}
                        <div>
                            <InputLabel htmlFor="img" value="Imagen" />
                            {/* type="file" requiere e.target.files[0], no e.target.value */}
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

                        {/* Fecha de nacimiento */}
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

                        {/* Activo desde */}
                        <div>
                            <InputLabel htmlFor="years_active_from" value="Activo desde (año)" />
                            {/* Es un año, no una fecha completa → type="number" */}
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

                        {/* Activo hasta */}
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

                        {/* Activo actualmente (checkbox) */}
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
                        {processing ? 'Guardando...' : 'Guardar'}
                    </button>
                </div>


            </form>
        </section>
    );
}