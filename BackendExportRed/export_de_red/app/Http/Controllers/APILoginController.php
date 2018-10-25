<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class APILoginController extends Controller
{
    /**
     * Reglas de validación al registrar nuevo usuario
     * @var array
     */
    private $onRegisterValidationRules = [
        'email' => 'required|string|email|max:255|unique:users',
        'name' => 'required|alpha|max:255',
        'password' => 'required|min:8|max:255',
        'last_name' => 'alpha',
        'is_admin' => 'boolean',
        'rut' => 'alpha_num',
        'phone_number' => 'numeric',
        'mobile_number' => 'numeric',
    ];

    /**
     * Realiza el login del usuario y retorna el token.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password'=> 'required'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $credentials = $request->only('email', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        return response()->json(compact('token'));
    }

    /**
     * Registrar nuevo usuario.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), $this->onRegisterValidationRules);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        if (auth()->user()->is_admin) {
            User::create([
                'name' => $request->get('name'),
                'email' => $request->get('email'),
                'password' => bcrypt($request->get('password')),
                'last_name' => $request->get('last_name'),
                'phone_number' => $request->get('phone_number'),
                'mobile_number' => $request->get('mobile_number'),
                'rut' => $request->get('rut'),
                'is_admin' => $request->get('is_admin'),
            ]);
            $user = User::first();
            $token = JWTAuth::fromUser($user);

            return Response::json(compact('token'));
        } else {
            return Response::json(['error'=>'Debe ser usuario administrador para poder registrar usuarios'], 401);
        }
    }

    /**
     * Realiza el cambio de contraseña para el usuario actual
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function changePassword(Request $request)
    {
        // Obtengo el usuario logueado
        $user = auth()->user();

        if ($user) {
            // Validamos input
            $validator = Validator::make($request->all(), [
                'password' => ['required', function ($attribute, $value, $fail) use ($user) {
                    if (!\Hash::check($value, $user->password)) {
                        return $fail(__('The current password is incorrect.'));
                    }
                    return true;
                }],
                'new_password' => 'required|string|max:255|confirmed',
            ]);
            if ($validator->fails()) {
                return response()->json($validator->errors());
            }

            // Asignamos el nuevo password
            $user->password = bcrypt($request->get('new_password'));
            $user->save();

            return response()->json(['success'=>'Su contraseña se ha cambiado correctamente']);

        } else {
            return response()->json(['error'=>'Sesión inválida. Debe iniciar sesión para cambiar su contraseña.'], 401);
        }
    }

    /**
     * Actualizar datos del perfil del usuario
     *
     * @param Request $request
     */
    public function updateUserProfile(Request $request)
    {
        // Obtengo el usuario logueado
        $user = auth()->user();

        if ($user) {
            // Validamos input
            $validationRules = $this->onRegisterValidationRules;
            unset($validationRules['password'], $validationRules['is_admin']);

            $validator = Validator::make($request->all(), $validationRules);
            if ($validator->fails()) {
                return response()->json($validator->errors());
            }

            // Actualizamos el registro
            $user->fill($request->only(array_keys($validationRules)));
            $user->save();

            return response()->json(['success'=>'Su perfil se ha actualizado correctamente']);

        } else {
            return response()->json(['error'=>'Sesión inválida. Debe iniciar sesión para actualizar su perfil.'], 401);
        }
    }
}
