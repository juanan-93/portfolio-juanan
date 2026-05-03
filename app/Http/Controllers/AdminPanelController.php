<?php

namespace App\Http\Controllers;

use App\Models\Bio;        // Importamos el modelo Bio para poder usarlo
use Illuminate\Http\Request; // Importamos Request para recibir los datos del formulario
use Inertia\Inertia;
use Inertia\Response;

class AdminPanelController extends Controller
{
    // Este método ya lo tenías, no lo toques
    public function index(): Response
    {
        $bio = Bio::first();

        return Inertia::render('Dashboard', ['bio' => $bio]);
    }

    // AÑADE ESTE MÉTODO NUEVO
    public function storeBio(Request $request)
    {   
        // PASO 1: Validar los datos
        $validated = $request->validate([
            // Campos multiidioma → array con claves en, es, ca
            'title'               => 'required|array',
            'title.en'            => 'required|string|max:255',
            'title.es'            => 'required|string|max:255',
            'title.ca'            => 'required|string|max:255',

            'bio'                 => 'required|array',
            'bio.en'              => 'required|string',
            'bio.es'              => 'required|string',
            'bio.ca'              => 'required|string',

            'professional_career' => 'required|array',
            'professional_career.en' => 'required|string',
            'professional_career.es' => 'required|string',
            'professional_career.ca' => 'required|string',

            'technical_skills'    => 'required|array',
            'technical_skills.en' => 'required|string',
            'technical_skills.es' => 'required|string',
            'technical_skills.ca' => 'required|string',

            'projects'            => 'required|array',
            'projects.en'         => 'required|string',
            'projects.es'         => 'required|string',
            'projects.ca'         => 'required|string',

            'education'           => 'required|array',
            'education.en'        => 'required|string',
            'education.es'        => 'required|string',
            'education.ca'        => 'required|string',

            'external_links'      => 'nullable|array',
            'external_links.en'   => 'nullable|string',
            'external_links.es'   => 'nullable|string',
            'external_links.ca'   => 'nullable|string',

            'nationality'         => 'nullable|array',
            'nationality.en'      => 'nullable|string|max:255',
            'nationality.es'      => 'nullable|string|max:255',
            'nationality.ca'      => 'nullable|string|max:255',

            'occupation'          => 'nullable|array',
            'occupation.en'       => 'nullable|string|max:255',
            'occupation.es'       => 'nullable|string|max:255',
            'occupation.ca'       => 'nullable|string|max:255',

            'employer'            => 'nullable|array',
            'employer.en'         => 'nullable|string|max:255',
            'employer.es'         => 'nullable|string|max:255',
            'employer.ca'         => 'nullable|string|max:255',

            // Campos simples
            'img'                  => 'nullable|image|max:2048',
            'birthdate'            => 'nullable|date',
            'years_active_from'    => 'nullable|integer|min:1900|max:2100',
            'years_active_to'      => 'nullable|integer|min:1900|max:2100',
            'years_active_current' => 'nullable|boolean',
        ]);


        // PASO 2: Si viene una imagen, guardarla en storage/app/public/bio
        if ($request->hasFile('img')) {
            $validated['img'] = $request->file('img')->store('bio', 'public');
        }

        // PASO 3: Guardar en la base de datos
        Bio::create($validated);

        // PASO 4: Volver al dashboard con mensaje de éxito
        return redirect()->route('dashboard')->with('success', '¡Bio guardada!');
    }

    //Metodo para actualizar la bio
    public function updateBio(Request $request, Bio $bio)
    {
        $validated = $request->validate([
            'title'                  => 'required|array',
            'title.en'               => 'required|string|max:255',
            'title.es'               => 'required|string|max:255',
            'title.ca'               => 'required|string|max:255',

            'bio'                    => 'required|array',
            'bio.en'                 => 'required|string',
            'bio.es'                 => 'required|string',
            'bio.ca'                 => 'required|string',

            'professional_career'    => 'required|array',
            'professional_career.en' => 'required|string',
            'professional_career.es' => 'required|string',
            'professional_career.ca' => 'required|string',

            'technical_skills'       => 'required|array',
            'technical_skills.en'    => 'required|string',
            'technical_skills.es'    => 'required|string',
            'technical_skills.ca'    => 'required|string',

            'projects'               => 'required|array',
            'projects.en'            => 'required|string',
            'projects.es'            => 'required|string',
            'projects.ca'            => 'required|string',

            'education'              => 'required|array',
            'education.en'           => 'required|string',
            'education.es'           => 'required|string',
            'education.ca'           => 'required|string',

            'external_links'         => 'nullable|array',
            'external_links.en'      => 'nullable|string',
            'external_links.es'      => 'nullable|string',
            'external_links.ca'      => 'nullable|string',

            'nationality'            => 'nullable|array',
            'nationality.en'         => 'nullable|string|max:255',
            'nationality.es'         => 'nullable|string|max:255',
            'nationality.ca'         => 'nullable|string|max:255',

            'occupation'             => 'nullable|array',
            'occupation.en'          => 'nullable|string|max:255',
            'occupation.es'          => 'nullable|string|max:255',
            'occupation.ca'          => 'nullable|string|max:255',

            'employer'               => 'nullable|array',
            'employer.en'            => 'nullable|string|max:255',
            'employer.es'            => 'nullable|string|max:255',
            'employer.ca'            => 'nullable|string|max:255',

            'img'                    => 'nullable|image|max:2048',
            'birthdate'              => 'nullable|date',
            'years_active_from'      => 'nullable|integer',
            'years_active_to'        => 'nullable|integer',
            'years_active_current'   => 'nullable|boolean',
        ], [
            'title.en.required' => 'El título en inglés es obligatorio.',
            'title.es.required' => 'El título en castellano es obligatorio.',
            'title.ca.required' => 'El título en catalán es obligatorio.',
        ]);

        // Si viene una imagen nueva la guardamos
        if ($request->hasFile('img')) {
            $validated['img'] = $request->file('img')->store('bio', 'public');
        }

        // update() modifica el registro existente en vez de crear uno nuevo
        $bio->update($validated);

        return redirect()->route('dashboard')->with('success', '¡Bio actualizada!');
    }
}