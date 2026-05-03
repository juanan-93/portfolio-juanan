import React, { useState } from 'react';
import '../../../css/projects.css';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import CreateProjectModal from '@/Components/CreateProjectModal';

DataTable.use(DT);

// Datos de prueba — luego vendrán del controlador Laravel
const MOCK_PROJECTS = [
    {
        id: 1,
        title: 'Portal Interno de Gestión',
        description: 'Migración de procesos manuales a una aplicación interna con panel de control y permisos por rol.',
    },
    {
        id: 2,
        title: 'Dashboard de KPIs',
        description: 'Panel con métricas de ventas, actividad de usuarios y comparativas por periodos.',
    },
    {
        id: 3,
        title: 'Automatización de Reportes',
        description: 'Sistema para generar reportes periódicos y enviarlos automáticamente a distintos departamentos.',
    },
];

export default function Projects() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    function handleEdit(project) {
        console.log('Editar', project);
    }

    function handleDelete(project) {
        console.log('Eliminar', project);
    }

    return (
        <section className="projects-section">


			{isCreateModalOpen && (
				<CreateProjectModal onClose={() => setIsCreateModalOpen(false)} />
			)}

            {/* ── Cabecera ─────────────────────────────────────────── */}
            <div className="projects-header">
                <h1 className="projects-title">Proyectos</h1>
                <p className="projects-description">
                    Gestiona los proyectos que se mostrarán en el portfolio.
                </p>
            </div>

            {/* ── Card con la tabla ─────────────────────────────────── */}
            <div className="projects-card">
                <div className="projects-card-header">
                    <div>
                        <h2 className="projects-card-title">Lista de proyectos</h2>
                        <p className="projects-card-description">
                            Todos los proyectos disponibles en el portfolio.
                        </p>
                    </div>
                    <button className="projects-add-btn" type="button" onClick={() => setIsCreateModalOpen(true)}>
						+ Añadir proyecto
					</button>
                </div>

                {/* ── Tabla DataTables ──────────────────────────────── */}
                <div className="projects-table-wrapper">
                    <DataTable
                        className="projects-table"
                        options={{
                            paging: true,
                            searching: true,
                            ordering: true,
                            pageLength: 10,
                            language: {
                                search: 'Buscar:',
                                lengthMenu: 'Mostrar _MENU_ registros',
                                info: 'Mostrando _START_ a _END_ de _TOTAL_ proyectos',
                                paginate: {
                                    first: 'Primera',
                                    last: 'Última',
                                    next: 'Siguiente',
                                    previous: 'Anterior',
                                },
                                emptyTable: 'No hay proyectos disponibles',
                                zeroRecords: 'No se encontraron resultados',
                            },
                        }}
                    >
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Descripción</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_PROJECTS.map((project) => (
                                <tr key={project.id}>
                                    <td className="projects-table-title">
                                        {project.title}
                                    </td>
                                    <td className="projects-table-description">
                                        {project.description}
                                    </td>
                                    <td>
                                        <div className="projects-actions">
                                            <button
                                                type="button"
                                                className="projects-btn-edit"
                                                onClick={() => handleEdit(project)}
                                            >
                                                Editar
                                            </button>
                                            <button
                                                type="button"
                                                className="projects-btn-delete"
                                                onClick={() => handleDelete(project)}
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </DataTable>
                </div>

            </div>
        </section>
    );
}