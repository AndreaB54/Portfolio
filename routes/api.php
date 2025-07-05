<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PageController; 
use App\Http\Controllers\Api\ContactController;

Route::get('/home-data', [PageController::class, 'getHomeData']);
Route::post('/contact', [ContactController::class, 'store']);