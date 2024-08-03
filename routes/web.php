<?php

use App\Http\Controllers\CommentsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('Home');
});
Route::inertia('/about', 'About', ['user' => 'John']);

Route::prefix('api')->group(function () {
  Route::post('user', [UserController::class, 'store']);
  Route::get('user', [UserController::class, 'index']);
  Route::resource('comments', CommentsController::class);
});
