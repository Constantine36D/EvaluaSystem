<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TemperEva extends Model
{
    protected $table = "tempereva";
    public $timestamps = false;
    protected $guarded = [];


    public static function hwc_temperAssessment($A,$B,$C,$D){
        try {
            $data = self::create([
                'A' => $A,
                'B' => $B,
                'C' => $C,
                'D' => $D,
            ]);
            return $data;
        } catch(\Exception $e){
            logError('分数统计错误',[$e->getMessage()]);
            return null;
        }
    }

    public static function hwc_temperAssessShow($phone){

        try {
            $data = self::where('phone',$phone)
                ->select('A','B','C','D')
                ->get();

            return $data;
        } catch(\Exception $e){
            logError('分数展示错误',[$e->getMessage()]);
            return null;
        }
    }

}
