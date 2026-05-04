import React, { useState } from 'react';
import '../../../css/projects.css';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import CreateProjectModal from '@/Components/CreateProjectModal';
import UpdateProjectModal from '@/Components/UpdateProjectModal';

DataTable.use(DT);

// Elimina las etiquetas HTML y devuelve solo el texto plano
function stripHtml(html) {
    if (!html) return '—';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '—';
}

export default function Projects({ projects = [] }) {

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [projectToEdit, setProjectToEdit] = useState(null);

    function handleDelete(project) {
        console.log('Eliminar', project);
    }

    return (
        <section className="projects-section">

            {/* Modal crear */}
            {isCreateModalOpen && (
                <CreateProjectModal onClose={() => setIsCreateModalOpen(false)} />
            )}

            {/* Modal editar */}
            {projectToEdit && (
                <UpdateProjectModal
                    project={projectToEdit}
                    onClose={() => setProjectToEdit(null)}
                />
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
                    <button
                        className="projects-add-btn"
                        type="button"
                        onClick={() => setIsCreateModalOpen(true)}
                    >
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
                            {projects.map((project) => (
                                <tr key={project.id}>
                                    <td className="projects-table-title">
                                        {project.title?.es ?? project.title?.en ?? '—'}
                                    </td>
                                    <td className="projects-table-description">
                                        {stripHtml(project.description1?.es ?? project.description1?.en)}
                                    </td>
                                    <td>
                                        <div className="projects-actions">
                                            <button
                                                type="button"
                                                className="projects-btn-edit"
                                                onClick={() => setProjectToEdit(project)}
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