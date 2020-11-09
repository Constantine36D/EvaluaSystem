$(function () {
    // 先统计上个部分：“第四部分”的各个部分分数
    var  four_count =window.location.href.split("&")
    console.log(four_count);
    // 进行点击次数切换 然后根据点击次数来切换tab
    var next_click_count = 1
    //    点击上一项按钮
    $(".pre_btn").click(function () {

        // 判断是否为第一项
        if ($("table").eq(0).css("display") == "table") {
            alert("已经是第一项了 嗷~~~~  ")
        }
        else if(next_click_count >1 ){
            next_click_count --
            $(".input_in h2").html("题 目 " + ( next_click_count)+ "/2")
            $("table").eq(next_click_count -1).show()
            $("table").eq( next_click_count).hide()
        }

    })

    // 点击下一项按钮
    $(".next_btn").click(function () {
        next_click_count++
        if (next_click_count <= 2 ) {

            $("table").eq(next_click_count - 2).hide()
            $("table").eq(next_click_count - 1).show()
            $(".input_in h2").html("题 目 " + next_click_count + "/2")

        } else {
            next_click_count =2
// R型
    var R_score = Number(four_count[1].split("=")[1])
     $('input:radio[name="a7"]:checked,input:radio[name="b7"]:checked').each(function () {
        R_score += Number($(this).val())
    });

    console.log(" R型",R_score);
// A型
    var A_score = Number(four_count[2].split("=")[1])
    $('input:radio[name="a5"]:checked,input:radio[name="b5"]:checked').each(function () {
        A_score += Number($(this).val())
    });
    console.log(" A型",A_score);
    // I型
    var I_score = Number(four_count[3].split("=")[1])
    $('input:radio[name="a6"]:checked,input:radio[name="b6"]:checked').each(function () {
        I_score += Number($(this).val())
    });
    console.log(" I型",I_score);
    // S型
    var S_score = Number(four_count[4].split("=")[1])
    $('input:radio[name="a4"]:checked,input:radio[name="b4"]:checked').each(function () {
        S_score += Number($(this).val())
    });
    console.log(" S型",S_score);
    // E型
    var E_score = Number(four_count[5].split("=")[1])
    $('input:radio[name="a3"]:checked,input:radio[name="b3"]:checked').each(function () {
        E_score += Number($(this).val())
    });
    console.log(" E型",E_score);
 // C型
 var C_score = Number(four_count[6].split("=")[1])
 $('input:radio[name="a2"]:checked,input:radio[name="b2"]:checked').each(function () {
    C_score += Number($(this).val())
});
console.log(" C型",C_score);

            $.ajax({
                type: "POST",
                cache: false,
                //请求的媒体类型
                //contentType: "application/json;charset=UTF-8",
                //请求地址
                url: "/api/auth/careercalculation",
                //数据，json字符串
                data: { R: R_score,A:A_score,I:I_score ,C: C_score,E:E_score,S:S_score},
                dataType: 'json',
                success:function (data){
                    console.log(data)
                    if(data.code == 200){
                        window.location.href = "hld_Holland_career_test_results.html?&"+"R="+R_score+"&A="+A_score+"&I="+I_score+"&S="+S_score+"&E="+E_score+"&C="+C_score
                    }
                    if(data.code == 100){
                        alert('提交失败')
                    }
                },
                error:function (data){
                  alert('失败操作')
                }


            })


        }

    })




})
