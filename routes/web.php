<?php

use App\Http\Controllers\CommentsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('App/Home');
});
Route::inertia('/about', 'App/About', ['user' => 'John']);
Route::inertia('/product-details', 'App/ProductDetails');

// Dashboard Layouts
Route::get('/dashboard/home', function () {
  return Inertia::render('Dashboard/Home');
});

Route::prefix('api')->group(function () {
  Route::post('user', [UserController::class, 'store']);
  Route::get('user', [UserController::class, 'index']);
  Route::resource('comments', CommentsController::class);
});
