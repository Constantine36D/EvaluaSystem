$(function () {







    // 先统计上个部分：“第二部分”的各个部分分数
    var second_count = window.location.href.split("&")

    // 进行点击次数切换 然后根据点击次数来切换tab
    var next_click_count = 1
    //    点击上一项按钮
    $(".pre_btn").click(function () {

        // 判断是否为第一项
        if ($("table").eq(0).css("display") == "block") {
            alert("当前为第一项了嗷┗|｀O′|┛~~~~  ")
        } else if (next_click_count > 1) {
            next_click_count--

            $(".input_in h2").html("题 目 " + (next_click_count) + "/6")
            $("table").eq(next_click_count - 1).show()
            $("table").eq(next_click_count).hide()
        }

    })


    // 每个下边栏分数计算
    var common_score = 6

    // 更换对应的分数
    $("table:nth-child" + "(" + String(next_click_count) + ")" + "  tbody tr:last-child>td:last-child").text("0分");
    $("table:nth-child" + "(" + String(next_click_count) + ")" + " input:radio").click(function () {
        $("table:nth-child" + "(" + String(next_click_count) + ")" + "  tbody tr:last-child>td:last-child").text($("table:nth-child" + "(" + String(next_click_count) + ")" + " input:radio:checked").length * common_score + "分");
        console.log(String(next_click_count));
    })
    // 点击下一项按钮
    $(".next_btn").click(function () {
        if ($("table:nth-child" + "(" + String(next_click_count) + ")" + "  input:radio:checked").length <= 0) {
            alert("至少选择一个┗|｀O′|┛ 嗷~~！！！")
            return false
        }
        next_click_count++
        if (next_click_count <= 6) {
            var common_score = 6
            $("table").eq(next_click_count - 2).hide()
            $("table").eq(next_click_count - 1).show()
            $(".input_in h2").html("题 目 " + next_click_count + "/6")
            $("table:nth-child" + "(" + String(next_click_count) + ")" + "  tbody tr:last-child>td:last-child").text("0分");
            $("table:nth-child" + "(" + String(next_click_count) + ")" + " input:radio").click(function () {
                $("table:nth-child" + "(" + String(next_click_count) + ")" + "  tbody tr:last-child>td:last-child").text($("table:nth-child" + "(" + String(next_click_count) + ")" + " input:radio:checked").length * common_score + "分");
                console.log(String(next_click_count));
            })

        } else {

            // 算分开始
            // R型      
            var R_score = Number(second_count[1].split("=")[1])
            var common_score = 6;
            var R_check_length = $('table:nth-child(1) input:radio:checked').length
            R_score += R_check_length * common_score
            console.log(" R型", R_score);
            // A型
            var A_score = Number(second_count[2].split("=")[1])
            var A_check_length = $('table:nth-child(2) input:radio:checked').length
            A_score += A_check_length * common_score
            console.log(" A型", A_score);
            // I型
            var I_score = Number(second_count[3].split("=")[1])
            var I_check_length = $('table:nth-child(3) input:radio:checked').length
            I_score += I_check_length * common_score
            console.log(" I型", I_score);
            // S型
            var S_score = Number(second_count[4].split("=")[1])
            var S_check_length = $('table:nth-child(4) input:radio:checked').length
            S_score += S_check_length * common_score
            console.log(" S型", S_score);
            // E型
            var E_score = Number(second_count[5].split("=")[1])
            var E_check_length = $('table:nth-child(5) input:radio:checked').length
            E_score += E_check_length * common_score
            console.log(" E型", E_score);
            // C型
            var C_score = Number(second_count[6].split("=")[1])
            var C_check_length = $('table:nth-child(6) input:radio:checked').length
            C_score += C_check_length * common_score
            console.log(" C型", C_score);
            window.location.href = "hld_test_e.html?&" + "R=" + R_score + "&A=" + A_score + "&I=" + I_score + "&S=" + S_score + "&E=" + E_score + "&C=" + C_score
        }

    })


})
