<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\controllers\AccountsController;
use App\Http\controllers\CategoryController;
use App\Http\controllers\TransactionController;
use App\Http\controllers\AuthController;

Route::post('/login',[AuthController::class,'login']);

Route::resource('accounts', AccountsController::class);
Route::resource('category', CategoryController::class);
Route::resource('transaction', TransactionController::class);
Route::post('changestatus',[AccountsController::class,'changeStatus']);


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
