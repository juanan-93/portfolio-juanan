<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;

use Illuminate\Http\Request;

class MyProjectsController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('My-projects/index', [
            'title' => 'Mis Proyectos',
            'description' => 'Colección de proyectos desarrollados con Laravel, React, Inertia.js y Node.js',
        ]);
    }
}
