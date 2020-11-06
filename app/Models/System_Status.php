<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class System_Status extends Model
{
    protected $table = "system_status";
    public $timestamps = false;
    protected $guarded = [];
    protected $primaryKey="system";

    public static function getstatus(){
        try {
            $rs = self::all();
            return $rs;
        }catch (\Exception $e){
            logError('获取系统开关嘛错误',$e->getMessage());
            return null;
        }


    }
}
