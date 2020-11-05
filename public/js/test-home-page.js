
//判断所有字段是否为空
$(document).ready(function (){
    // $.get('../api/auth/info?token='+window.localStorage.getItem("yq_token"),function (data){
    //     console.log(data.data[0])
    //     if(data.code == 200){
    //         if (data.data[0].age&&data.data[0].sex&&data.data[0].background&&data.data[0].backtime&&data.data[0].backway&&data.data[0].nowwork){
    //
    //         }else {
    //                     var url=location.search;
    //                     var phone;
    //                     var Request = new Object();
    //                     if(url.indexOf("?")!=-1)
    //                     {
    //                         var str = url.substr(1);
    //                         strs= str.split("&");
    //                         for(var i=0;i<strs.length;i++)
    //                         {
    //                             Request[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
    //                         }
    //                     }
    //                     phone= Request["phone"];
    //                     alert("请完善个人信息表")
    //                     window.location.href = "index.html?phone="+phone
    //
    //
    //         }
    //
    //
    //     }
    // })
    //
    // $.get('../api/auth/temperassessshow?token='+window.localStorage.getItem("yq_token"), function (data) {
    //     if (data.code === 200) {
    //         console.log(data)
    //         var Str =``
    //         if (data.data[0]==null){
    //             Str += `<div class="cont-img"><img src="../icon/icon/Subject assessment.png" alt=""></div>
    //             <h2>气质测评</h2>
    //             <p>未测试</p>
    //             `
    //             $('#cepingfenshu').append(Str);
    //         }else {
    //             var sum = data.data[0].B+data.data[0].A+data.data[0].C+data.data[0].D;
    //             Str += `<div class="cont-img"><img src="../icon/icon/Subject assessment.png" alt=""></div>
    //             <h2>气质测评</h2>
    //             <p>测试分数：${sum}分</p>
    //             `
    //             $('#cepingfenshu').append(Str);
    //         }
    //
    //
    //
    //     }
    //
    //
    //     if (data.code == 100) {
    //         alert("展示数据错误")
    //     }
    //
    // })

})


$(".button").on('click', function () {
    if ($("input[type='checkbox']").is(':checked')) {
        $('.content-alert').hide();
        $('.mask').hide();
    }

})
$('.in-bu button').on('click',function() {
    $('.information').hide();
    $('.mask').hide();
})
function ceping(){
                // $('.content-alert').css('display','block')
                // $('.mask').css('display','block')

    // $.get('../api/auth/temperassessshow?token='+window.localStorage.getItem("yq_token"), function (data) {
    //     if (data.code === 200) {
    //         if (data.data[0]==null){
    //             $('.content-alert').css('display','block')
    //             $('.mask').css('display','block')
    //
    //         }
    //         else {
    //             alert("你已填写过该表单，请勿多次填写！")
    //         }
    //     }
    //
    //
    //     if (data.code == 100) {
    //         alert("错误")
    //     }
    //
    // })
    window.location.href = "cx_common.html"

}
function quxiao(){
    $('.content-alert').css('display','none')
    $('.mask').css('display','none')

}
function tijiao(){
    //
    // if ( $('.check input:radio:checked').checked==flase){
    //     window.location.href = "cx_common.html"
    // }
    var obj = document.getElementsByName("tiyxs");

    var flags = false;

    for(var i=0; i<obj.length; i ++){

        if(obj[i].checked==true){

            flags = true;
            window.location.href = "cx_common.html"

        }

    }

    if (flags == false)

    {

        alert("对不起，请点击阅读")

        return false;

    }

}

function tcp() {
    window.location.href = "PDP.html"
}



