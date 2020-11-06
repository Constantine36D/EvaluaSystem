<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Career_interest_test extends Model
{
    protected $table = "career_interest_test";
    public $timestamps = true;
    protected $guarded = [];
    protected $primaryKey ="id";




    public static function careerCalculation($R,$A,$I,$S,$E,$C){
        try {
            $data = self::insert([
                'R' => $R,
                'A' => $A,
                'I' => $I,
                'S' => $S,
                'E' => $E,
                'C' => $C,
                'created_at' => now(),
            ]);
            return $data;
        }catch (\Exception $e){
            logError('分数保存失败!',$e->getMessage());
            return null;
        }
    }
}
