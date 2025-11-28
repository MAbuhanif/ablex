<?php

namespace App\Http\Controllers;

use App\Models\Module;
use Inertia\Inertia;

class ModuleController extends Controller
{
   public function index()
{
    $modules = Module::latest('published_at')->get();
    return Inertia::render('dashboard', ['modules' => $modules]);
}

   public function show($slug)
{
    $module = Module::where('slug', $slug)->firstOrFail();

    return Inertia::render('PostDetail', [
        'module' => $module,
    ]);
}

}
