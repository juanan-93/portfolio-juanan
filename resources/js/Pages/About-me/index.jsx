import "../../../css/about-me.css";
import { usePage } from "@inertiajs/react";
import LanguageSwitcher from "@/Components/LanguageSwitcher";


export default function Index() {
  const { bio, locale } = usePage().props;

  // Devuelve el texto en el idioma activo de un campo multiidioma {en, es, ca}
  const loc = (field) => field?.[locale] ?? field?.es ?? field?.en ?? "";

  // Años activo
  const yearsActive = bio
    ? `${bio.years_active_from ?? ""}${
        bio.years_active_current
          ? "-presente"
          : bio.years_active_to
          ? `-${bio.years_active_to}`
          : ""
      }`
    : "";

  // Imagen de perfil
  const imgSrc = bio?.img ? `/storage/${bio.img}` : null;

  return (
    <>

      {/* ===== HEADER — Logo + navegación principal ===== */}
        <header className="wiki-header">
            <div className="wiki-header-container">
                <a href="/" className="wiki-logo">
                    <img src="/img/logos/juananpedia.png" alt="Logo" />
                </a>
                <div className="wiki-header-right">
                    <LanguageSwitcher />
                </div>
            </div>
        </header>

      {/* ===== CONTENEDOR PRINCIPAL ===== */}      
        <div className="wiki-container">
            {/* TÍTULO DE LA PÁGINA */}
            <h1 className="wiki-title">{loc(bio?.title)}</h1>

            {/* INFOBOX — Ficha lateral derecha con datos personales y profesionales */}
            <table className="wiki-infobox">
            <tbody>
                <tr>
                <th colSpan={2} className="infobox-title">
                    {loc(bio?.title)}
                </th>
                </tr>
                {imgSrc && (
                  <tr>
                    <td colSpan={2} className="infobox-image">
                        <img src={imgSrc} alt={loc(bio?.title)} />
                    </td>
                  </tr>
                )}
                {bio?.birthdate && (
                  <tr>
                    <th>Nacimiento</th>
                    <td>{bio.birthdate}</td>
                  </tr>
                )}
                {bio?.nationality && (
                  <tr>
                    <th>Nacionalidad</th>
                    <td>{loc(bio.nationality)}</td>
                  </tr>
                )}
                {bio?.occupation && (
                  <tr>
                    <th>Ocupación</th>
                    <td>{loc(bio.occupation)}</td>
                  </tr>
                )}
                {yearsActive && (
                  <tr>
                    <th>Años activo</th>
                    <td>{yearsActive}</td>
                  </tr>
                )}
                {bio?.employer && (
                  <tr>
                    <th>Empleador</th>
                    <td>{loc(bio.employer)}</td>
                  </tr>
                )}
            </tbody>
            </table>

            {/* ===== CONTENIDO PRINCIPAL — Texto del artículo ===== */}
            <div className="wiki-content">

            {/* TABLA DE CONTENIDOS — Índice de secciones */}
            <div className="wiki-toc">
                <div className="toc-title">Índice</div>
                <ul>
                <li><a href="#biografia">1 Biografía</a></li>
                <li><a href="#trayectoria">2 Trayectoria profesional</a></li>
                <li><a href="#habilidades">3 Habilidades técnicas</a></li>
                <li><a href="#proyectos">4 Proyectos destacados</a></li>
                <li><a href="#educacion">5 Educación</a></li>
                <li><a href="#enlaces">6 Enlaces externos</a></li>
                </ul>
            </div>

            {/* SECCIÓN: Biografía */}
            <h2 id="biografia" className="wiki-section-title">
                <span>Biografía</span>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: loc(bio?.bio) }} />

            {/* SECCIÓN: Trayectoria profesional */}
            <h2 id="trayectoria" className="wiki-section-title">
                <span>Trayectoria profesional</span>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: loc(bio?.professional_career) }} />

            {/* SECCIÓN: Habilidades técnicas */}
            <h2 id="habilidades" className="wiki-section-title">
                <span>Habilidades técnicas</span>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: loc(bio?.technical_skills) }} />

            {/* SECCIÓN: Proyectos destacados */}
            <h2 id="proyectos" className="wiki-section-title">
                <span>Proyectos destacados</span>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: loc(bio?.projects) }} />

            {/* SECCIÓN: Educación */}
            <h2 id="educacion" className="wiki-section-title">
                <span>Educación</span>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: loc(bio?.education) }} />

            {/* SECCIÓN: Enlaces externos */}
            <h2 id="enlaces" className="wiki-section-title">
                <span>Enlaces externos</span>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: loc(bio?.external_links) }} />

            </div>
        </div>
        
    </>
  );
}