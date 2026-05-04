<?php

namespace App\Http\Controllers;

use App\Models\Bio;
use App\Models\Project;
use Illuminate\Http\Request; 
use Inertia\Inertia;
use Inertia\Response;

class AdminPanelController extends Controller
{
    // Este método ya lo tenías, no lo toques
    public function index(): Response
    {
        $bio = Bio::first();
        $projects = Project::all();

        return Inertia::render('Dashboard', ['bio' => $bio, 'projects' => $projects]);
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
        } else {
            // Eliminamos img de los datos validados para que update()
            // no sobreescriba la imagen existente con null
            unset($validated['img']);
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
        } else {
            // Eliminamos img de los datos validados para que update()
            // no sobreescriba la imagen existente con null
            unset($validated['img']);
        }

        // update() modifica el registro existente en vez de crear uno nuevo
        $bio->update($validated);

        return redirect()->route('dashboard')->with('success', '¡Bio actualizada!');
    }

    // MÉTODO PARA GUARDAR PROYECTOS
    public function storeProject(Request $request)
    {
        // PASO 1: Validar los datos
        $validated = $request->validate([
            // Títulos multiidioma
            'title'          => 'required|array',
            'title.en'       => 'required|string|max:255',
            'title.es'       => 'required|string|max:255',
            'title.ca'       => 'required|string|max:255',

            // Descripción 1 multiidioma
            'description1'      => 'required|array',
            'description1.en'   => 'required|string',
            'description1.es'   => 'required|string',
            'description1.ca'   => 'required|string',

            // Descripción 2 multiidioma
            'description2'      => 'nullable|array',
            'description2.en'   => 'nullable|string',
            'description2.es'   => 'nullable|string',
            'description2.ca'   => 'nullable|string',

            // Tecnologías — array de strings
            'technologies'   => 'nullable|array',
            'technologies.*' => 'nullable|string',

            // Imágenes — hasta 5 archivos
            'images'         => 'nullable|array|max:5',
            'images.*'       => 'nullable|image|max:2048',
        ]);

        // PASO 2: Procesar las imágenes si vienen
        if ($request->hasFile('images')) {
            $imagePaths = [];
            foreach ($request->file('images') as $image) {
                if ($image) {
                    $imagePaths[] = $image->store('projects', 'public');
                }
            }
            $validated['images'] = $imagePaths;
        }

        // PASO 3: Guardar en la base de datos
        Project::create($validated);

        // PASO 4: Volver al dashboard con mensaje de éxito
        return redirect()->route('dashboard')->with('success', '¡Proyecto guardado!');
    }

    public function updateProject(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title'          => 'required|array',
            'title.en'       => 'required|string|max:255',
            'title.es'       => 'required|string|max:255',
            'title.ca'       => 'required|string|max:255',

            'description1'      => 'required|array',
            'description1.en'   => 'required|string',
            'description1.es'   => 'required|string',
            'description1.ca'   => 'required|string',

            'description2'      => 'nullable|array',
            'description2.en'   => 'nullable|string',
            'description2.es'   => 'nullable|string',
            'description2.ca'   => 'nullable|string',

            'technologies'   => 'nullable|array',
            'technologies.*' => 'nullable|string',

            'images'         => 'nullable|array|max:5',
            'images.*'       => 'nullable|image|max:2048',
        ]);

        // Si vienen imágenes nuevas las procesamos
        // Si no vienen las conservamos
        if ($request->hasFile('images')) {
            $imagePaths = [];
            foreach ($request->file('images') as $image) {
                if ($image) {
                    $imagePaths[] = $image->store('projects', 'public');
                }
            }
            $validated['images'] = $imagePaths;
        } else {
            unset($validated['images']);
        }

        $project->update($validated);

        return redirect()->route('dashboard')->with('success', '¡Proyecto actualizado!');
    }


}