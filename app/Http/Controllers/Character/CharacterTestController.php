<?php

namespace App\Http\Controllers\Character;

use App\Http\Controllers\Controller;
use App\Models\Character_assessment;
use Illuminate\Http\Request;

class CharacterTestController extends Controller
{
    public function pdfCalculation(Request $request){
        $tiger = $request['tiger'];
        $peacock = $request['peacock'];
        $koala = $request['koala'];
        $owl = $request['owl'];
        $chameleon = $request['chameleon'];
        $data = Character_assessment::pdfCalculation($tiger,$peacock,$koala,$owl,$chameleon);
        return $data?
            json_success('分数保存成功!',null,200) :
            json_fail('分数保存失败!',null,100);
    }
}
