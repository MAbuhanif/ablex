<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Module extends Model
{
    protected $fillable = [
        'title',
        'description',
        'thumbnail_url',
        'file_url',
        'slug',
        'user_id', 
        'author_name', 
        'published_at',
    ];

    public function author(){
    return $this->belongsTo(User::class, 'user_id');
    }

         public static function boot()
    {
        parent::boot();

        static::creating(function ($module) {
            $module->slug = Str::slug($module->title);
        });

        static::updating(function ($module) {
            $module->slug = Str::slug($module->title);
        });
    }
    protected $appends = ['thumbnail', 'file'];
     
    public function getThumbnailAttribute() {
        /** @var \Illuminate\Filesystem\FilesystemAdapter $disk */
        $disk = Storage::disk('r2');
        return $this->thumbnail_url ? $disk->url($this->thumbnail_url) : null;
    }
    
    public function getFileAttribute() {
        /** @var \Illuminate\Filesystem\FilesystemAdapter $disk */
        $disk = Storage::disk('r2');
        return $this->file_url ? $disk->url($this->file_url) : null;
    }





}