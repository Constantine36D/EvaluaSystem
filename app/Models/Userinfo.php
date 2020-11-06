<?php

namespace App\Models;

use http\Env\Request;
use Illuminate\Database\Eloquent\Model;

class Userinfo extends Model
{
    protected $table = "userinfo";
    public $timestamps = false;
    protected $guarded = [];
    protected $primaryKey ="id";


    public static function createUser($array = [])
    {
        try {
            return self::create($array) ?
                true :
                false;
        } catch (\Exception $e) {
            //\App\Utils\Logs::logError('添加用户失败!', [$e->getMessage()]);
            die($e->getMessage());
            return false;
        }
    }

    public static function otherAdd($date){
        try {
            $f = self::count($date['phone']);
            if($f > 3){
                return null;
            }
            else{
                $rs = self::create([
                    'name' =>$date['name'],
                    'phone'=>$date['phone'],
                    'age'=>$date['age'],
                    'sex'=>$date['sex'],
                    'background' =>$date['background'],
                    'backtime'=>$date['backtime'],
                    'backway'=>$date['backway'],
                    'nowwork'=>$date['nowwork']
                ]);
                return $rs;
            }

        }catch (\Exception $e){
            logError('补全信息错误',$e->getMessage());
            return null;
        }
    }

    public static function info($phone){
        try {
            $flag = 1;

            $rs = self::where('phone',$phone)
            ->get();

           return $rs;
        }catch (\Exception $e){
            logError('检查补全信息错误',$e->getMessage());
            return null;
        }
    }

    public static function sumAll($s){
        try {
            $rs = self::create([
                    'sum' => $s
                ]);
        }catch (\Exception $e){
            logError('插入总分错误',$e->getMessage());
            return null;
        }
    }

}
