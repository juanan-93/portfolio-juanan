<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();

            // Campos multiidioma — se guardan como JSON {en, es, ca}
            $table->json('title');
            $table->json('description1');
            $table->json('description2');

            // Tecnologías — array de strings guardado como JSON
            $table->json('technologies')->nullable();

            // Imágenes — array con las 5 rutas guardado como JSON
            $table->json('images')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};