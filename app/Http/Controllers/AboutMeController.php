<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class AboutMeController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('About-me/index');
    }
}