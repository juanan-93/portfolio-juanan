<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class LandingController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Landing/Index', [
            'title' => 'Bienvenido a mi Portfolio',
            'description' => 'Desarrollador Full Stack',
        ]);
    }
}