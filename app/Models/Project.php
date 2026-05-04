<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title',
        'description1',
        'description2',
        'technologies',
        'images',
    ];

    protected $casts = [
        'title'        => 'array',
        'description1' => 'array',
        'description2' => 'array',
        'technologies' => 'array',
        'images'       => 'array',
    ];
}