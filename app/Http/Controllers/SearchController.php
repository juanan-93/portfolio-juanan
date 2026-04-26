<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;


class SearchController extends Controller
{
     public function index(): Response{
        return Inertia::render('Search/index', [
            'title' => 'Resultados de búsqueda',
            'description' => 'Aquí puedes ver los resultados de tu búsqueda.',
        ]);
     }
}
