<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\LandingController; 
use App\Http\Controllers\SearchController;
use App\Http\Controllers\AboutMeController;
use App\Http\Controllers\GameController;
USE App\Http\Controllers\MyProjectsController;



// ====================================================================
// LANDING
// ====================================================================
Route::get('/', [LandingController::class, 'index'])->name('landing');


// ====================================================================
//SEARCH
// ====================================================================
Route::get('/search', [SearchController::class, 'index'])->name('search');


// ====================================================================
// ABOUT ME
// ====================================================================
Route::get('/about-me', [AboutMeController::class, 'index'])->name('about-me');

// ====================================================================
// GAME
// ====================================================================
Route::get('/game', [GameController::class, 'index'])->name('game');
//Game - Store score
Route::post('/game/scores', [GameController::class, 'store'])->name('game.scores.store');

// ====================================================================
// PROJECTS
// ====================================================================
Route::get('/projects', [MyProjectsController::class, 'index'])->name('projects');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


// Rutas protegidas por autenticación
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
