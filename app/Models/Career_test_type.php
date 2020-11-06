<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Career_test_type extends Model
{
    protected $table = "career_test_type";
    public $timestamps = false;
    protected $guarded = [];
    protected $primaryKey ="id";

    public static function careerCalcuShow($name){
        try {
            $data = self::where('type',$name)
                ->get();
            return $data;
        }catch (\Exception $e){
            logError('信息展示失败!',$e->getMessage());
            return null;
        }
    }
}
