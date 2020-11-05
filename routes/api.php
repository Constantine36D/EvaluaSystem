<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('auth')->namespace('OAuth')->group(function () {
    Route::post('login', 'AuthController@login'); //登陆
    Route::post('logout', 'AuthController@logout'); //退出登陆
    Route::post('refresh', 'AuthController@refresh'); //刷新token
    Route::post('register', 'AuthController@registered'); //注册
    Route::post('otherinfo' ,'AuthController@otheradd');//补全信息
    Route::get('info', 'AuthController@info');//检查信息是否完善
    Route::get('status', 'AuthController@status');//获取开关状态码

    Route::post('temperassessment' ,'AuthController@temperAssessment');//统计分数
    Route::get('temperassessshow' ,'AuthController@temperAssessShow');//展示分数
});

Route::prefix('auth')->namespace('Character')->group(function () {
    Route::post('pdfcalculation' ,'CharacterTestController@pdfCalculation');//pdf分数保存
});

Route::prefix('auth')->namespace('Career')->group(function () {
    Route::post('careercalculation' ,'CareerTestController@careerCalculation');//caree分数保存
    Route::post('careercalcushow' ,'CareerTestController@careerCalcuShow');//caree分数展示
});
