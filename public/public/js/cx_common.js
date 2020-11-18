
window.onload=function(){
      // $(".four").css('display', 'none')
      atijiao = function () {
        if ($('#onetable  input:radio:checked').length != 15) {
            alert("还有没选的")
            return false
        } else {
            $(".one").css('display', 'none')
            $(".two").css('display', 'block')
        }




    }
    btijiao = function () {
        if ($('#twotable  input:radio:checked').length != 15) {
            alert("还有没选的")
            return false
        } else {

            $(".two").css('display', 'none')
            $(".three").css('display', 'block')
        }

    }
    bsyz = function () {
        $(".two").css('display', 'none')
        $(".one").css('display', 'block')
    }
    cxyz = function () {
        if ($('#threetable  input:radio:checked').length != 15) {
            alert("还有没选的")
            return false
        } else {

            $(".three").css('display', 'none')
            $(".four").css('display', 'block')
        }

    }
    csyz = function () {
        $(".three").css('display', 'none')
        $(".two").css('display', 'block')
    }
    dsyz = function () {
        $(".four").css('display', 'none')
        $(".three").css('display', 'block')
    }

    tijiao = function () {
        if ($('#fourtable  input:radio:checked').length != 15) {
            alert("还有没选的")
            return false
        } else {
            var atotal = 0;
            $('#onetable input:radio:checked').each(function () {

                atotal += Number($(this).val())
            });
            console.log(atotal)
            var btotal = 0;
            $('#twotable input:radio:checked').each(function () {


                btotal += Number($(this).val())
            });
            console.log(btotal)
            var ctotal = 0;
            $('#threetable input:radio:checked').each(function () {

                ctotal += Number($(this).val())
            });
            console.log(ctotal)
            var dtotal = 0;
            $('#fourtable input:radio:checked').each(function () {

                dtotal += Number($(this).val())
            });
            console.log(dtotal)
        }

        var url=location.search;
        var formid;
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
        formid= Request["phone"];
            $.ajax({
                //请求方式
                type: "POST",
                cache: false,
                //请求的媒体类型
                //contentType: "application/json;charset=UTF-8",
                //请求地址
                url: "../api/auth/temperassessment",
                //数据，json字符串
                data: { A: atotal, B: btotal,C: ctotal,D: dtotal,phone:formid},
                dataType: 'json',
                success:function (result){
                    console.log(result.code == 200);
                    if (result.code == 200) {
                        alert("提交成功！")
                        window.location.href = "Temperament_assessment_results.html?A="+atotal+"&&B="+btotal+"&&C="+ctotal+"&&D="+dtotal
                    } else {
                        alert("提交失败！")
                    }


                },
                error: function(e) {
                    console.log(e.status);
                    console.log(e.responseText);
                    alert("提交失败!")
                }
            });
            return false;

        }

}
