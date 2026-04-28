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
            $table->string('title');
            $table->text('description');
            $table->text('bio');
            $table->text('professional_career');
            $table->text('beginnings');
            $table->text('present');
            $table->text('technical_skills');
            $table->text('education');
            $table->string('img')->nullable();
            $table->date('birthdate')->nullable();
            $table->integer('years_active_from')->nullable();
            $table->integer('years_active_to')->nullable();
            $table->boolean('years_active_current')->default(false);
            $table->string('employer')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bios');
    }
};