var url=location.search;
var A;
var B;
var C;
var D;
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
B= Request["B"];
C= Request["C"];
D= Request["D"];
$(document).ready(function() {


        var Str =``
            Str += `<p>A  胆汁质的总分是【${A}】</p><p>B  多血质的总分是【${B}】</p>
                    <p>C  粘液质的总分是【${C}】</p>
                    <p>D  胆汁质的总分是【${D}】</p>
                `
            $('#show').append(Str);
  

    })

