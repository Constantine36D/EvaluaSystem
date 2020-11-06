<?php

namespace App\Http\Controllers\Career;

use App\Http\Controllers\Controller;
use App\Models\Career_interest_test;
use App\Models\Career_test_type;
use Illuminate\Http\Request;

class CareerTestController extends Controller
{
    public function careerCalculation(Request $request){
        $R = (int)$request['R'];
        $A = (int)$request['A'];
        $I = (int)$request['I'];
        $S = (int)$request['S'];
        $E = (int)$request['E'];
        $C = (int)$request['C'];
        $data = Career_interest_test::careerCalculation($R,$A,$I,$S,$E,$C);
        return $data?
            json_success('分数保存成功!',null,200) :
            json_fail('分数保存失败!',null,100);
    }

    public function careerCalcuShow(Request $request){
        $R = (int)$request['R'];
        $A = (int)$request['A'];
        $I = (int)$request['I'];
        $S = (int)$request['S'];
        $E = (int)$request['E'];
        $C = (int)$request['C'];
        $data1 = [$R,$A,$I,$S,$E,$C];
        $data2 = ['R','A','I','S','E','C'];
        for ($i = 0 ;$i < count($data1) -1 ;$i++){
            for ($j = $i+1 ; $j < count($data1) ; $j++){
                if ($data1[$i] < $data1[$j]){
                    $num = $data2[$i];
                    $data2[$i] = $data2[$j];
                    $data2[$j] = $num;
                    $num1 = $data1[$i];
                    $data1[$i] = $data1[$j];
                    $data1[$j] = $num1;
                }
            }
        }
        $name = $data2[0].$data2[1].$data2[2];
        $data = Career_test_type::careerCalcuShow($name);
        return $data?
            json_success('信息展示成功!',$data,200) :
            json_fail('信息展示失败!',null,100);
    }
}
