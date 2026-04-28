<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class LanguageController extends Controller
{
    public function switch(Request $request)
    {
        $locale = $request->input('locale');

        if (!in_array($locale, config('app.available_locales'))) {
            abort(400, 'Idioma no disponible');
        }

        Session::put('locale', $locale);

        return back();
    }
}