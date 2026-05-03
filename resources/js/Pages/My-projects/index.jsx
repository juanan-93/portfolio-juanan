import "../../../css/my-projects.css";
import { useState } from 'react';
import { Head, Link } from "@inertiajs/react";
import RetroProjectModal from '@/Components/modal_projects';

const NAV_ITEMS = [
	["🏠", "Inicio", "/"],
	["🔎", "Buscar", "/search"],
	["👤", "Sobre mi", "/about-me"],
	["🎮", "Juego", "/game"],
];

const BADGES = [
	"LARAVEL",
	"REACT",
	"INERTIA",
	"MYSQL",
	"API REST",
	"TAILWIND",
	"DOCKER",
	"CI/CD",
];

const PROJECTS = [
	{
		id: 1,
		title: "Portal Interno de Gestion",
		status: "online",
		statusLabel: "ONLINE",
		year: "2025",
		client: "Cliente: Empresa de servicios",
		description:
			"Migracion de procesos manuales a una aplicacion interna con panel de control y permisos por rol.",
		achievements: [
			"Reduccion de tiempos operativos en tareas administrativas.",
			"Centralizacion de incidencias y seguimiento en tiempo real.",
			"Mejora de trazabilidad en flujos de trabajo.",
		],
		tech: ["Laravel", "Inertia", "React", "MySQL"],
		cta: "Ver resumen",
	},
	{
		id: 2,
		title: "Dashboard de KPIs",
		status: "maintenance",
		statusLabel: "MANTENIMIENTO",
		year: "2024",
		client: "Cliente: Area comercial",
		description:
			"Construccion de panel con metricas de ventas, actividad de usuarios y comparativas por periodos.",
		achievements: [
			"Visualizacion unificada de objetivos y resultados.",
			"Alertas para desviaciones clave del negocio.",
			"Exportacion de informes para direccion.",
		],
		tech: ["React", "Charting", "API", "PostgreSQL"],
		cta: "Ver resumen",
	},
	{
		id: 3,
		title: "Automatizacion de Reportes",
		status: "update",
		statusLabel: "ACTUALIZACION",
		year: "2026",
		client: "Cliente: Operaciones",
		description:
			"Sistema para generar reportes periodicos y enviarlos automaticamente a distintos departamentos.",
		achievements: [
			"Eliminacion de tareas repetitivas de consolidacion.",
			"Entrega automatica de informes en horario definido.",
			"Estandarizacion del formato de salida.",
		],
		tech: ["Laravel", "Jobs", "Queues", "Mail"],
		cta: "Ver resumen",
	},
];

const STARS = [
	{ x: "5%", y: "8%", size: "2px", delay: "0.3s" },
	{ x: "22%", y: "14%", size: "3px", delay: "0.8s" },
	{ x: "40%", y: "6%", size: "2px", delay: "1.2s" },
	{ x: "63%", y: "12%", size: "2px", delay: "0.6s" },
	{ x: "78%", y: "9%", size: "3px", delay: "1.5s" },
	{ x: "91%", y: "18%", size: "2px", delay: "0.9s" },
	{ x: "14%", y: "32%", size: "2px", delay: "1.7s" },
	{ x: "35%", y: "38%", size: "3px", delay: "0.4s" },
	{ x: "57%", y: "30%", size: "2px", delay: "1.1s" },
	{ x: "84%", y: "35%", size: "2px", delay: "1.9s" },
	{ x: "8%", y: "58%", size: "2px", delay: "0.7s" },
	{ x: "29%", y: "66%", size: "3px", delay: "1.4s" },
	{ x: "52%", y: "62%", size: "2px", delay: "0.5s" },
	{ x: "71%", y: "74%", size: "3px", delay: "1.6s" },
	{ x: "93%", y: "68%", size: "2px", delay: "1s" },
	{ x: "18%", y: "86%", size: "2px", delay: "1.3s" },
	{ x: "44%", y: "92%", size: "3px", delay: "0.2s" },
	{ x: "67%", y: "88%", size: "2px", delay: "1.8s" },
	{ x: "86%", y: "94%", size: "2px", delay: "0.95s" },
];

export default function Index() {

	const [selectedProject, setSelectedProject] = useState(null);

    return (
		<>
			<Head title="~*~ Mis Trabajos de Programacion ~*~" />

			<RetroProjectModal
				project={selectedProject}
				onClose={() => setSelectedProject(null)}
			/>

			<div className="retro-page">
				<div className="retro-stars" aria-hidden="true">
					{STARS.map((star, index) => (
						<span
							key={index}
							className="retro-star"
							style={{
								"--star-x": star.x,
								"--star-y": star.y,
								"--star-size": star.size,
								"--star-delay": star.delay,
							}}
						/>
					))}
				</div>

				<div className="retro-marquee-bar">
					PORTFOLIO PROFESIONAL | PROYECTOS ENTREGADOS | LARAVEL + REACT + INERTIA | VISITANTE #0001337
				</div>

				<header className="retro-header">
					<div className="retro-header-icons" aria-hidden="true">
						<span>✨</span>
						<span>🌐</span>
						<span>✨</span>
					</div>
					<h1 className="retro-main-title">Mis Trabajos Como Programador</h1>
					<p className="retro-subtitle">Implementaciones reales para negocio, producto y operaciones</p>
					<div className="retro-header-divider" />
					<p className="retro-webmaster-line">Webmaster: JUANAN | Email: dev@portfolio.com | Edicion 2026</p>
				</header>

				<div className="retro-layout">
					<aside className="retro-sidebar">
						<section className="retro-sidebar-box retro-visit-box">
							<p className="retro-sidebar-title">Visitas Totales</p>
							<div className="retro-counter" aria-label="contador de visitas">
								{"0001337".split("").map((digit, index) => (
									<span key={index} className="retro-counter-digit">
										{digit}
									</span>
								))}
							</div>
						</section>

						<section className="retro-sidebar-box retro-nav-box">
							<div className="retro-box-titlebar">NAVEGACION</div>
							{NAV_ITEMS.map(([icon, label, href]) => (
								<Link key={label} href={href} className="retro-nav-link">
									{icon} {label}
								</Link>
							))}
						</section>

						<section className="retro-sidebar-box retro-badges-box">
							<p className="retro-badges-title">mis badges</p>
							<div className="retro-badges-grid">
								{BADGES.map((badge) => (
									<span key={badge} className="retro-badge">
										{badge}
									</span>
								))}
							</div>
						</section>

						<section className="retro-sidebar-box retro-construction-box">
							<div className="retro-construction-icon" aria-hidden="true">
								🚧
							</div>
							<p>
								Seccion en mejora continua
								<br />
								Nuevos trabajos pronto
							</p>
						</section>
					</aside>

					<main className="retro-content">
						<div className="retro-content-head">
							<h2>PROYECTOS ENTREGADOS</h2>
							<p>Historico de soluciones construidas para clientes y equipos</p>
						</div>

						<p className="retro-intro-copy">
							Esta seccion resume proyectos en los que he participado durante mi trayectoria.
							Incluye contexto de negocio, aportaciones tecnicas y resultados obtenidos.
							<br />
							<span>Todo con estilo old school, pero con impacto real.</span>
						</p>

						<div className="retro-project-list">
							{PROJECTS.map((project) => (
								<article key={project.id} className="retro-project-card" style={{ "--project-color": "#00ffff", cursor: 'pointer' }} onClick={() => setSelectedProject(project)}>
									<div className="retro-project-titlebar">
										<span className="retro-project-titlebar-text">{project.title}</span>
										<div className="retro-project-controls" aria-hidden="true">
											<span>_</span>
											<span>[]</span>
											<span>X</span>
										</div>
									</div>

									<div className="retro-project-content">
										<div className="retro-project-meta">
											<span className={`retro-project-status-dot is-${project.status}`} />
											<span className={`retro-project-status is-${project.status}`}>{project.statusLabel}</span>
											<span className="retro-project-year">{project.year}</span>
										</div>

										<p className="retro-project-client">{project.client}</p>
										<p className="retro-project-description">{project.description}</p>

										<ul className="retro-project-achievements">
											{project.achievements.map((item) => (
												<li key={item}>{item}</li>
											))}
										</ul>

										<div className="retro-project-tech">
											{project.tech.map((tech) => (
												<span key={tech} className="retro-tech-pill">
													{tech}
												</span>
											))}
										</div>

										<div className="retro-project-footer">
											<span className="retro-project-label">Estado del entregable: documentado</span>
											<a href="#" className="retro-project-link">
												{project.cta}
											</a>
										</div>
									</div>
								</article>
							))}
						</div>

						<div className="retro-rainbow-separator" />

						<section className="retro-cta-box">
							<p className="retro-cta-title">Quieres ver mas detalles tecnicos?</p>
							<p className="retro-cta-copy">Puedo compartir arquitectura, retos y decisiones de cada trabajo.</p>
							<button className="retro-btn" type="button">
								SOLICITAR INFO
							</button>
						</section>
					</main>
				</div>

				<footer className="retro-footer">
					<div className="retro-footer-divider" />
					<p>© 2026 JUANAN - Portafolio de Proyectos</p>
					<p>Construido con Laravel + Inertia + React</p>
					<p className="retro-footer-highlight">Gracias por visitar este archivo historico de trabajos</p>
				</footer>
			</div>
		</>
	);
}