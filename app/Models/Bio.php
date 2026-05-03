<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bio extends Model
{
    protected $table = 'bios';

    protected $fillable = [
        'title',
        'bio',
        'professional_career',
        'technical_skills',
        'projects',
        'education',
        'external_links',
        'nationality',
        'occupation',
        'employer',
        'img',
        'birthdate',
        'years_active_from',
        'years_active_to',
        'years_active_current',
    ];

    protected $casts = [
        // JSON → array de PHP automáticamente
        'title'               => 'array',
        'bio'                 => 'array',
        'professional_career' => 'array',
        'technical_skills'    => 'array',
        'projects'            => 'array',
        'education'           => 'array',
        'external_links'      => 'array',
        'nationality'         => 'array',
        'occupation'          => 'array',
        'employer'            => 'array',

        // Otros tipos
        'birthdate'            => 'date:Y-m-d',
        'years_active_from'    => 'integer',
        'years_active_to'      => 'integer',
        'years_active_current' => 'boolean',
    ];
}