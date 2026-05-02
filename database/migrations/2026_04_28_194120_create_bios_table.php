<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('bios', function (Blueprint $table) {
            $table->id();

            // Campos multiidioma (JSON)
            $table->json('title');
            $table->json('bio');
            $table->json('professional_career');
            $table->json('technical_skills');
            $table->json('projects');
            $table->json('education');
            $table->json('external_links');
            $table->json('nationality');
            $table->json('occupation');
            $table->json('employer');

            // Campos simples
            $table->string('img')->nullable();
            $table->date('birthdate')->nullable();

            // Años activo
            $table->integer('years_active_from')->nullable();
            $table->integer('years_active_to')->nullable();
            $table->boolean('years_active_current')->default(false);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bios');
    }
};