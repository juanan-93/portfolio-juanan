import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react';
import { Head } from '@inertiajs/react';

const tabs = [
    {
        id: 'overview',
        label: 'Resumen',
    },
    {
        id: 'projects',
        label: 'Proyectos',
    },
    {
        id: 'scores',
        label: 'Puntuaciones',
    },
    {
        id: 'settings',
        label: 'Ajustes',
    },
];

export default function Dashboard() {

    const [activeTab, setActiveTab] = useState('overview');
    
    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>}>
            <Head title="Dashboard" />
            <div className="p-6">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex gap-6" aria-label="Tabs">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;

                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
                                    className={
                                        isActive
                                            ? 'border-indigo-500 text-indigo-600 whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium'
                                    }
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                <div className="pt-6 text-gray-900">
                    {activeTab === 'overview' && (
                        <div>
                            Contenido del tab Resumen
                        </div>
                    )}

                    {activeTab === 'projects' && (
                        <div>
                            Contenido del tab Proyectos
                        </div>
                    )}

                    {activeTab === 'scores' && (
                        <div>
                            Contenido del tab Puntuaciones
                        </div>
                    )}

                    {activeTab === 'settings' && (
                        <div>
                            Contenido del tab Ajustes
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
