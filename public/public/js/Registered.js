

//第一层注册
// function register1(){
//     // var phone = document.getElementById('phone').value
//     var name = document.getElementById('name').value;
//     var phone = document.getElementById('phone').value;
//     var ldpassword = document.getElementById('ldpassword').value;
//     var surepassword= document.getElementById('surepassword').value;
//
//     if(!(/^1[3456789]\d{9}$/.test(phone))){
//         alert("手机号码有误，请重填");
//         return false;
//     }
//     if(!( /^[\u4e00-\u9fa5 ]{2,20}$/.test(name))){
//         alert("请输入正确姓名");
//         return false;
//     }
//
//     if(ldpassword.length<6){
//         alert("密码不足六位");
//         return false;
//     }
//     if(ldpassword!==surepassword){
//         alert("两次密码输入不正确")
//     }
//
//         $.ajax({
//             //请求方式
//             type: "POST",
//             cache: false,
//             //请求的媒体类型
//             //contentType: "application/json;charset=UTF-8",
//             //请求地址
//             url: "../api/auth/register",
//             //数据，json字符串
//             data: decodeURIComponent(jQuery("#register1").serialize()),
//             dataType: 'json',
//
//             success: function(data) {
//
//                 console.log(data)
//                 if (data.code == 100) {
//                     console.log(data)
//                     alert("填写失败");
//                 } else if (data.code == 200) {
//                     alert("注册成功,请先登录！")
//                     window.location.href = "loading.html"
//                     // console.log(result.data.token)
//                     // const token = result.data.token
//                     // window.localStorage.setItem('yq_token', token)
//                     // var userToken = window.localStorage.getItem("yq_token");
//
//                 } else if(data.code == 422){
//                     alert(data.data)
//                 }
//                 console.log(data); //就将返回的数据显示出来
//
//             },
//             error: function(XMLHttpRequest, textStatus, errorThrown) {
//
//
//                 console.log(XMLHttpRequest.status);
//                 // 状态
//                 console.log(XMLHttpRequest.readyState);
//                 // 错误信息
//                 console.log(textStatus);
//             }
//
//         })
// }



//补全个人信息
function register2(){
    // var url=location.search;
    // var phone;
    // var Request = new Object();
    // if(url.indexOf("?")!=-1)
    // {
    //     var str = url.substr(1);
    //     strs= str.split("&");
    //     for(var i=0;i<strs.length;i++)
    //     {
    //         Request[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
    //     }
    // }
    // phone= Request["phone"];

     var age = document.getElementById('age').value;
     var background = document.getElementById('background').value;
      var nowwork = document.getElementById('nowwork').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var backtime = document.getElementById('backtime').value;

    if(!(/^1[3456789]\d{9}$/.test(phone))){
        alert("手机号码有误，请重填");
        return false;
    }
    if(!( /^[\u4e00-\u9fa5 ]{2,20}$/.test(name))){
        alert("请输入正确姓名");
        return false;
    }

      if(age == null){
          alert("年龄不能为空")
          return false
      }
      if(background == null){
          alert("学历不能为空")
          return false
      }
      if(nowwork == null){
          alert("目前从事不能为空")
          return false
      }
    if(nowwork == null){
        alert("退伍时间不能为空")
        return false
    }


    $.ajax({
        type: "POST",
        cache: false,
        //请求的媒体类型
        //contentType: "application/json;charset=UTF-8",
        //请求地址
        url: "../api/auth/otherinfo",
        //数据，json字符串
        data: decodeURIComponent(jQuery("#form1").serialize()),
        dataType: 'json',
        success: function(data) {
            console.log(phone)
            console.log(data)
            if (data.code == 100) {
                console.log(data)
                alert("你已重复填写多次,无法再次填写");
            } else if (data.code == 200) {
                alert("填写信息成功");
                window.open("cx_common.html?phone="+phone)

            }
            console.log(data); //就将返回的数据显示出来

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert('操作失败');
            console.log(XMLHttpRequest.status);
            // 状态
            console.log(XMLHttpRequest.readyState);
            // 错误信息
            console.log(textStatus);
        }

    })


}
