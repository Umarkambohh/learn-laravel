<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
  function store(Request $request)
  {
    $data = $request->only(['heading', 'desc']);
    $file = $_FILES['img'];
    $fileName = time() . $file['full_path'];
    $filePath = public_path() . '/' . $fileName;
    $saveFile  = move_uploaded_file($file['tmp_name'], $filePath);

    if (!$saveFile) return response('Error');
    $data  = $fileName;
    $bannerData = Banner::create($data);
    return response()->json($bannerData);
  }
}
