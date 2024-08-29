<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    function store(Request $request)
    {
        $data = $request->all();
        $bannerData = Banner::create($data);
        return response()->json($bannerData);
    }
}
