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
                    <p> 测评结果显示<br>
                您属于 RIA 型人才<br>
                适合的职业为：<br>
                牙科技术员、陶工、建筑设计员、模型工、细木工、制作链条人员。
            </p>
                    `
                }else {
                    Str = `
            <p> 测评结果显示<br>
                您属于 ${data.data[0].type} 型人才<br>
                适合的职业为：<br>
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
