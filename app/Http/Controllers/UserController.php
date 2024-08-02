<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $data = [
            ['name' => 'athar', 'email' => 'example@gmail.com'],
            ['name' => 'khan', 'email' => 'example@gmail.com'],
            ['name' => 'example', 'email' => 'example@gmail.com'],
            ['name' => 'athar', 'email' => 'example@gmail.com'],
            ['name' => 'athar', 'email' => 'example@gmail.com'],
            ['name' => 'athar', 'email' => 'example@gmail.com'],
        ];
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        return response()->json($data);
    }
}
