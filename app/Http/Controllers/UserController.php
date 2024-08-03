<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $data =  User::all();
        return $data;
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $user = User::create($data);
        return response()->json($user);
    }
}
