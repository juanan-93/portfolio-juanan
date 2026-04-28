import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Tabs from '@/Components/tabs';
import Bio from '@/Pages/Admin/bio';
import Projects from '@/Pages/Admin/projects';

const tabs = [
    {
        id: 'bio',
        label: 'Sobre mi',
        content: <Bio />,
    },
    {
        id: 'projects',
        label: 'Proyectos',
        content: <Projects />,
    },
];

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('bio');

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <Tabs
                    tabs={tabs}
                    activeTab={activeTab}
                    onChange={setActiveTab}
                />
            </div>
        </AuthenticatedLayout>
    );
}
