var url=location.search;
var A;
var R;
var S;
var I;
var E;
var C;
var Request = new Object();
if(url.indexOf("?")!=-1)
{
    var str = url.substr(1);
    strs= str.split("&");
    for(var i=0;i<strs.length;i++)
    {
        Request[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
    }
}
A= Request["A"];
R= Request["R"];
I= Request["I"];
S= Request["S"];
C= Request["C"];
E= Request["E"];

var data1 = [R,A,I,S,E,C];
var data2 = ['R','A','I','S','E','C'];

for (var k = 0 ; k < data1.length-1 ;k++){
    for (var j = k+1 ; j < data1.length ; j++){
        if (parseInt(data1[k]) < parseInt(data1[j])){
            var num = data2[k];
            data2[k] = data2[j];
            data2[j] = num;
            var num1 = data1[k];
            data1[k] = data1[j];
            data1[j] = num1;
        }
    }
}
var work =unescape(window.location.href).split("~")[1].split("工")[0].split(":")[1]
var major=unescape(window.location.href).split("~")[1].split("工")[1].split(":")[1]
console.log( work)
    console.log(major);

$(document).ready(function (){


    $.ajax({
        type: "POST",
        cache: false,
        //请求的媒体类型
        //contentType: "application/json;charset=UTF-8",
        //请求地址
        url: "/api/auth/careercalcushow",
        //数据，json字符串
        data: { R: R,A:A,I:I,C:C,E:E,S:S},
        dataType: 'json',
        success:function (data){
            console.log(data)
            if (data.code == 200){
                let Str = ''
                if (data.data.length == 0){
                    Str = `
                    测评结果:
                6种职业兴趣总分按大小排序分为:${data2[0]},${data2[1]},${data2[2]},${data2[3]},${data2[4]},${data2[5]}
                前三项为${data2[0]}${data2[1]}${data2[2]},适合你的职业为:
                牙科技术员、陶工、建筑设计员、模型工、细木工、制作链条人员。
            </p>
                    `
                }else {
                    Str = `
                 测评结果:
                6种职业兴趣总分按大小排序分为:${data2[0]},${data2[1]},${data2[2]},${data2[3]},${data2[4]},${data2[5]}
                <br/>
                前三项为${data.data[0].type},适合你的职业为:
                 ${data.data[0].info}
                </p>
            `
                }

                $("#jieguo").append("您心目中的最想干的三种工作是："+work)
                $("#jieguo").append(`<br/>`)
                $("#jieguo").append("您心目中的最想读的三种专业是："+major)
                $("#jieguo").append(`<br/>`)
           // $('#jieguo').empty();
                $('#jieguo').append(Str);
            }
            if(data.code == 100){
                alert('显示失败')
            }


        },

        error:function (){
            alert('操作失败')
        }
    })




})
