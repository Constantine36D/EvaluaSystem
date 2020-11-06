<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Character_assessment extends Model
{
    protected $table = "character_assessment";
    public $timestamps = true;
    protected $guarded = [];
    protected $primaryKey ="id";



    public static function pdfCalculation($tiger,$peacock,$koala,$owl,$chameleon){
        try {
            $data = self::insert([
                'tiger' => $tiger,
                'peacock' => $peacock,
                'koala' => $koala,
                'owl' => $owl,
                'chameleon' => $chameleon,
                'created_at' => now(),
            ]);
            return $data;
        }catch (\Exception $e){
            logError('分数保存失败!',$e->getMessage());
            return null;
        }
    }
}
