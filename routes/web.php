<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::inertia('/about', 'About', ['user' => 'John']);

Route::post('user', [UserController::class, 'store'])->prefix('api');
Route::get('user', [UserController::class, 'index'])->prefix('api');
