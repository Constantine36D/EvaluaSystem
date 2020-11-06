<?php

namespace App\Http\Controllers\OAuth;

use App\Http\Controllers\Controller;
use App\Http\Requests\OAuth\RegisteredRequest;
use App\Http\Requests\OAuth\TemperAssessmentRequest;
use App\Login;
use App\Models\System_Status;
use App\Models\TemperEva;
use App\Models\Userinfo;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $loginRequest)
    {
        try {
            $credentials = self::credentials($loginRequest);
            if (!$token = auth()->attempt($credentials)) {
                return json_fail('账号或者用户名错误!',null, 100 );
            }else{
                    return json_success('登陆成功！',array(
                        'token' => $token,
                        'token_type' =>'bearer',
                        'expires_in' => auth()->factory()->getTTL() * 60
                    ),200);
            }
        } catch (\Exception $e) {
            return json_fail('登陆失败!',$e->getMessage(),500,500);
        }
    }
    public function logout()
    {
        try {
            auth()->logout();
        } catch (\Exception $e) {
        }
        return auth()->check() ?
            json_fail('注销登陆失败!',null, 100 ) :
            json_success('注销登陆成功!',null,  200);
    }
    public function refresh()
    {
        try {
            $newToken = auth()->refresh();
        } catch (\Exception $e) {
        }
        return $newToken != null ?
            self::respondWithToken($newToken, '刷新成功!') :
            json_fail(100, null,'刷新token失败!');
    }

    protected function credentials($request)
    {
        return ['phone' => $request['phone'], 'password' => $request['password']];
    }

    protected function respondWithToken($token, $msg)
    {
        return json_success($msg, array(
            'token' => $token,
            'token_type' =>'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ),200);
    }
    public function test(Request $request){
        $user  = auth('api')->user();

        echo $user->work_id;
    }

    public function registered(RegisteredRequest $registeredRequest)
    {
        $info = Userinfo::createUser(self::userHandle($registeredRequest));
        $l = Login::createUser(self::userHandle($registeredRequest));
        if($info && $l){
          return  json_success('注册成功!',null,200  );
        }else{
          return  json_success('注册失败!',null,100  ) ;
        }


//        return Userinfo::createUser(self::userHandle($registeredRequest))?
//            json_success('注册成功!',null,200  ) :
//            json_success('注册失败!',null,100  ) ;

    }
    protected function userHandle($request)
    {
        $registeredInfo = $request->except('password_confirmation');
        $registeredInfo['password'] = bcrypt($registeredInfo['password']);
        $registeredInfo['phone'] = $registeredInfo['phone'];
        return $registeredInfo;
    }

    public function otheradd(Request $request){
            $rs = Userinfo::otherAdd($request);
           return    $rs ?
               json_success('提交成功!',null,200  ) :
               json_success('提交失败!',null,100  ) ;
    }



    public function temperAssessment(Request $request){
        $A = $request['A'];
        $B = $request['B'];
        $C = $request['C'];
        $D = $request['D'];
        $sum = $A + $B + $C +$D;
        $RS = Userinfo::sumAll($sum);
        $data = TemperEva::hwc_temperAssessment($A,$B,$C,$D);
        return $data?
            json_success('分数统计成功!',null,200) :
            json_fail('分数统计失败!',null,100);
    }

    public function temperAssessShow(Request $request){
        $phone = $request['phone'];
        $data = Tempereva::hwc_temperAssessShow($phone);
        return $data?
            json_success('分数展示成功!',$data,200) :
            json_fail('分数展示失败!',null,100);
    }

    public function info(){
       $phone = auth('api')->user()->phone;

        $data = Userinfo::info($phone);

        return $data?
            json_success('对应行获取成功!',$data,200) :
            json_fail('对应行获取失败!',null,100);
    }

    public function status(){
        $data = System_Status::getstatus();
        return $data?
            json_success('状态获取成功!',$data,200) :
            json_fail('状态获取失败!',null,100);
    }

}
