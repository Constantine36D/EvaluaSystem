// window.onload=function (){
//
//     $.get('../api/auth/status',function (data){
//         console.log(data)
//         var syste = "0";
//         if(data.data[0].system == syste){
//             alert("该系统已关闭，请联系管理人员")
//             window.close()
//         }
//
//     })
//
//
//     // 登录
//     login=function (){
//
//         var phone = document.getElementById('phone').value
//         var password = document.getElementById('password').value
//
//
//         $.ajax({
//             //请求方式
//             type: "POST",
//             cache: false,
//             //请求的媒体类型
//             //contentType: "application/json;charset=UTF-8",
//             //请求地址
//             url: "../api/auth/login",
//             //数据，json字符串
//             data: { phone: phone, password: password },
//             dataType: 'json',
//             success:function (result){
//                 console.log(result.code == 200);
//                 if (result.code == 200) {
//                     console.log(result.data.token)
//                     const token = result.data.token
//                     window.localStorage.setItem('yq_token', token)
//                     var userToken = window.localStorage.getItem("yq_token");
//                     alert("登陆成功")
//                     window.location.href = "test-home-page.html?phone="+phone
//                 } else {
//                     alert("用户名或者密码错误！")
//                 }
//
//
//             },
//             error: function(e) {
//                 console.log(e.status);
//                 console.log(e.responseText);
//                 alert("操作失败")
//             }
//         });
//         return false;
//
//     }
//
// //跳转注册
//     turnto = function(){
//         window.location.href = "Registered.html"
//     }
//
// //返回登录
//     login2 = function (){
//         window.location.href = "loading.html"
//     }
// }
//
