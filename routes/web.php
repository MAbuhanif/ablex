<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ModuleController;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    
    Route::get('dashboard', [ModuleController::class, 'index'])
        ->name('dashboard');
    Route::get('modules/{slug}', [ModuleController::class, 'show'])
        ->name('modules.show');
});

require __DIR__.'/settings.php';
