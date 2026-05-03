import "../../../css/about-me.css";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "@/hooks/useTranslation";


export default function Index() {
  const { bio, locale } = usePage().props;
  const { t } = useTranslation();

  // Helper: obtiene el texto en el idioma activo de un campo multiidioma
  const loc = (field) => field?.[locale] ?? field?.es ?? "";

  // Años activo
  const yearsActive = bio
    ? `${bio.years_active_from ?? ""}${bio.years_active_current ? "-presente" : bio.years_active_to ? `-${bio.years_active_to}` : ""}`
    : "";

  // Foto de perfil
  const imgSrc = bio?.img ? `/storage/${bio.img}` : "/img/tu-foto.jpg";

  return (
    <>

      {/* ===== HEADER — Logo + navegación principal ===== */}
        <header className="wiki-header">
            <div className="wiki-header-container">
                <a href="/" className="wiki-logo">
                    <img src="/img/logos/juananpedia.png" alt="Logo" />
                </a>
                <div className="wiki-header-right">
                    <nav className="wiki-nav">
                    <a href="/">Inicio</a>
                    <a href="/search">Buscar</a>
                    <a href="/about-me" className="active">Sobre mí</a>
                    </nav>
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
                <tr>
                <td colSpan={2} className="infobox-image">
                    <img src={imgSrc} alt={loc(bio?.title)} />
                </td>
                </tr>
                <tr>
                <th>{t("about.personal_info", "Información personal")}</th>
                <td></td>
                </tr>
                {bio?.birthdate && (
                  <tr>
                    <th>{t("about.birthdate", "Nacimiento")}</th>
                    <td>{bio.birthdate}</td>
                  </tr>
                )}
                {bio?.nationality && (
                  <tr>
                    <th>{t("about.nationality", "Nacionalidad")}</th>
                    <td>{loc(bio.nationality)}</td>
                  </tr>
                )}
                <tr>
                <th>{t("about.professional_info", "Información profesional")}</th>
                <td></td>
                </tr>
                {bio?.occupation && (
                  <tr>
                    <th>{t("about.occupation", "Ocupación")}</th>
                    <td>{loc(bio.occupation)}</td>
                  </tr>
                )}
                {yearsActive && (
                  <tr>
                    <th>{t("about.years_active", "Años activo")}</th>
                    <td>{yearsActive}</td>
                  </tr>
                )}
                {bio?.employer && (
                  <tr>
                    <th>{t("about.employer", "Empleador")}</th>
                    <td>{loc(bio.employer)}</td>
                  </tr>
                )}
            </tbody>
            </table>

            {/* ===== CONTENIDO PRINCIPAL — Texto del artículo ===== */}
            <div className="wiki-content">

            {/* TABLA DE CONTENIDOS — Índice de secciones */}
            <div className="wiki-toc">
                <div className="toc-title">{t("about.toc", "Índice")}</div>
                <ul>
                <li>
                    <a href="#biografia">1 {t("about.biography", "Biografía")}</a>
                </li>
                <li>
                    <a href="#trayectoria">2 {t("about.career", "Trayectoria profesional")}</a>
                </li>
                <li>
                    <a href="#habilidades">3 {t("about.skills", "Habilidades técnicas")}</a>
                </li>
                <li>
                    <a href="#proyectos">4 {t("about.projects", "Proyectos destacados")}</a>
                </li>
                <li>
                    <a href="#educacion">5 {t("about.education", "Educación")}</a>
                </li>
                <li>
                    <a href="#enlaces">6 {t("about.links", "Enlaces externos")}</a>
                </li>
                </ul>
            </div>

            {/* ===== SECCIONES DEL ARTÍCULO ===== */}

            {/* SECCIÓN: Biografía */}
            <h2 id="biografia" className="wiki-section-title">
                <span>{t("about.biography", "Biografía")}</span>
            </h2>
            <div
                className="wiki-rich-content"
                dangerouslySetInnerHTML={{ __html: loc(bio?.bio) }}
            />

            {/* SECCIÓN: Trayectoria profesional */}
            <h2 id="trayectoria" className="wiki-section-title">
                <span>{t("about.career", "Trayectoria profesional")}</span>
            </h2>
            <div
                className="wiki-rich-content"
                dangerouslySetInnerHTML={{ __html: loc(bio?.professional_career) }}
            />

            {/* SECCIÓN: Habilidades técnicas */}
            <h2 id="habilidades" className="wiki-section-title">
                <span>{t("about.skills", "Habilidades técnicas")}</span>
            </h2>
            <div
                className="wiki-rich-content"
                dangerouslySetInnerHTML={{ __html: loc(bio?.technical_skills) }}
            />

            {/* SECCIÓN: Proyectos destacados */}
            <h2 id="proyectos" className="wiki-section-title">
                <span>{t("about.projects", "Proyectos destacados")}</span>
            </h2>
            <div
                className="wiki-rich-content"
                dangerouslySetInnerHTML={{ __html: loc(bio?.projects) }}
            />

            {/* SECCIÓN: Educación */}
            <h2 id="educacion" className="wiki-section-title">
                <span>{t("about.education", "Educación")}</span>
            </h2>
            <div
                className="wiki-rich-content"
                dangerouslySetInnerHTML={{ __html: loc(bio?.education) }}
            />

            {/* SECCIÓN: Enlaces externos */}
            <h2 id="enlaces" className="wiki-section-title">
                <span>{t("about.links", "Enlaces externos")}</span>
            </h2>
            <div
                className="wiki-rich-content"
                dangerouslySetInnerHTML={{ __html: loc(bio?.external_links) }}
            />

            </div>
        </div>
        
    </>
  );
}