<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PageController;

Route::get('/', [PageController::class, 'index']);