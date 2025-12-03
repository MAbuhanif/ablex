<?php

namespace App\Http\Controllers;

use App\Models\Module;
use Inertia\Inertia;

class ModuleController extends Controller
{
    public function index()
    {
        $modules = Module::with('author:id,name')
            ->latest('published_at')
            ->get([
                'published_at',
                'author_name',
                'id',
                'title',
                'slug',
                'description',
                'thumbnail_url',
                'user_id',
                 'file_url'
            ]);

        return Inertia::render('Dashboard', [
            'modules' => $modules
        ]);
    }

    public function show($slug)
    {
        $module = Module::where('slug', $slug)->firstOrFail();

        return Inertia::render('PostDetail', [
            'module' => $module,
        ]);
    }
}
