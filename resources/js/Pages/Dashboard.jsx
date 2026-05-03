import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Tabs from '@/Components/tabs';
import Bio from '@/Pages/Admin/bio';
import Projects from '@/Pages/Admin/projects';
import { usePage } from '@inertiajs/react';


export default function Dashboard() {

    //variable de panel de controladro
    const { bio } = usePage().props;
    const [activeTab, setActiveTab] = useState('bio');

    const tabs = [
    {
        id: 'bio',
        label: 'Sobre mi',
        content: <Bio bio={bio} />,
    },
    {
        id: 'projects',
        label: 'Proyectos',
        content: <Projects />,
    },
];

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
            </div>
        </AuthenticatedLayout>
    );
}
