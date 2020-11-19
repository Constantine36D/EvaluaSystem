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
                    <p><center>测评结果:</center> <br>
                6种职业兴趣总分按大小排序分为:${data2[0]},${data2[1]},${data2[2]},${data2[3]},${data2[4]},${data2[5]}<br>
                <center>前三项为${data2[0]}${data2[1]}${data2[2]},适合你的职业为:</center><br>
                牙科技术员、陶工、建筑设计员、模型工、细木工、制作链条人员。
            </p>
                    `
                }else {
                    Str = `
                 <p><center>测评结果:</center> <br>
                6种职业兴趣总分按大小排序分为:${data2[0]},${data2[1]},${data2[2]},${data2[3]},${data2[4]},${data2[5]}<br>
                <center>前三项为${data.data[0].type},适合你的职业为:</center><br>
                 ${data.data[0].info}
            </p>
            `
                }

           $('#jieguo').empty();
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
