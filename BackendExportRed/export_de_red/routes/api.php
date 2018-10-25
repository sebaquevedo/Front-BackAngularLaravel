<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Original de Laravel
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

// Iniciar sesión
Route::post('user/login', 'APILoginController@login');

// Grupo de rutas protegidas
Route::middleware(['jwt.auth'])->group(function () {

    // Registrar nuevo usuario
    Route::post('user/register', 'APILoginController@register');

    // Obtener datos del usuario autenticado
    Route::get('/user', function (Request $request) {
        return auth()->user();
    });

    // Cambiar contraseña del usuario actual
    Route::post('user/password/change', 'APILoginController@changePassword');

    // Actualizar perfil del usuario actual
    Route::post('user/update', 'APILoginController@updateUserProfile');
});