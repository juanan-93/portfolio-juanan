<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Bio;

class AboutMeController extends Controller
{
    public function index(): Response
    {
        $bio = Bio::first();
        return Inertia::render('About-me/index', [
            'bio' => $bio,
        ]);
    }
}