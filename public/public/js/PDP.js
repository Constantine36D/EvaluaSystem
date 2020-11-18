window.onload = function () {
    var num_Aarr = []
    var num_Barr = []
    for (var i = 0; i < 15; i++) {
        num_Aarr.push(i + 1)
        num_Barr.push(i + 1)

    }
    console.log("一共的题号",num_Aarr);
    // PDP A组提交
    a1tijiao = function () {

        var inner_num = []
        if ($('#onetable  input:radio:checked').length != 15) {
            $('#onetable  input:radio:checked').each(function () {
                var i_num = $(this).parent().parent().prev().text().split(".")[0]
                inner_num.push(Number(i_num))
            })
            console.log("A组选中的题号",inner_num);
            let len = num_Aarr.length;
            for(let i = len-1;i >=0;i--){
            let value = num_Aarr[i]
            if(inner_num.indexOf(value) > -1){
            num_Aarr.splice(i,1)
            }
            }
            console.log("A组未选中的题号",num_Aarr);


            // 最后alert 未完成的题号
            let str =``
            str +=`还有没选的嗷~~~~~
            题号为:
            ${num_Aarr}
            `

            alert(str)
            return false
        }
        else {
            $(".one").css('display', 'none')
            $(".two").css('display', 'block')
        }

    }

    b1tijiao = function () {
        var inner_num = []
        if ($('#twotable  input:radio:checked').length != 15) {
            $('#twotable  input:radio:checked').each(function () {
                var i_num = $(this).parent().parent().prev().text().split(".")[0]
                inner_num.push(Number(i_num))
            })
            console.log("B组选中的题号",inner_num);
            let len = num_Barr.length;
            for(let i = len-1;i >=0;i--){
            let value = num_Barr[i]
            if(inner_num.indexOf(value) > -1){
            num_Barr.splice(i,1)
            }
            }
            console.log("B组未选中的题号",num_Barr);


            // 最后alert 未完成的题号
            let str =``
            str +=`还有没选的嗷~~~~~
            题号为:
            ${num_Barr}
            `

            alert(str)
            return false
        } else {
            alert("提交成功")
            // $(".two").css('display', 'none')


        }


        // 5、10、14、18、24、30题得分加起来是“老虎”分数；
        var lionTotal = 0
        $('#onetable  input:radio[name="at5"]:checked,#onetable  input:radio[name="at10"]:checked,#onetable  input:radio[name="at14"]:checked,' +
            '#twotable  input:radio[name="bt3"]:checked,#twotable  input:radio[name="bt9"]:checked,#twotable  input:radio[name="bt15"]:checked').each(function () {
            lionTotal += Number($(this).val())

        });
        console.log("“老虎”分数", lionTotal);
        // 3、6、13、20、22、29题得分加起来是“孔雀”分数；
        var kqTotal = 0
        $('#onetable  input:radio[name="at3"]:checked,#onetable  input:radio[name="at6"]:checked,#onetable  input:radio[name="at13"]:checked,' +
            '#twotable  input:radio[name="bt5"]:checked,#twotable  input:radio[name="bt7"]:checked,#twotable  input:radio[name="bt14"]:checked').each(function () {
            kqTotal += Number($(this).val())

        });
        console.log("“孔雀”分数", kqTotal);

        // 2、8、15、17、25、28题得分加起来是“考拉”分数；
        var klTotal = 0
        $('#onetable  input:radio[name="at2"]:checked,#onetable  input:radio[name="at8"]:checked,#onetable  input:radio[name="at15"]:checked,' +
            '#twotable  input:radio[name="bt2"]:checked,#twotable  input:radio[name="bt10"]:checked,#twotable  input:radio[name="bt13"]:checked').each(function () {
            klTotal += Number($(this).val())

        });
        console.log("“考拉”分数", klTotal);


        // 1、7、11、16、21、26题得分加起来是“猫头鹰”分数；
        var mtyTotal = 0
        $('#onetable  input:radio[name="at1"]:checked,#onetable  input:radio[name="at7"]:checked,#onetable  input:radio[name="at11"]:checked,' +
            '#twotable   input:radio[name="bt1"]:checked,#twotable   input:radio[name="bt6"]:checked,#twotable   input:radio[name="bt11"]:checked').each(function () {
            mtyTotal += Number($(this).val())

        });
        console.log("'猫头鹰'分数", mtyTotal);

        // 4、9、12、19、23、27题得分加起来是“变色龙”分数
        var bslTotal = 0
        $('#onetable  input:radio[name="at4"]:checked,#onetable  input:radio[name="at9"]:checked,#onetable  input:radio[name="at12"]:checked,' +
            '#twotable  input:radio[name="bt4"]:checked,#twotable  input:radio[name="bt8"]:checked,#twotable  input:radio[name="bt12"]:checked').each(function () {
            bslTotal += Number($(this).val())

        });
        console.log("'变色龙'分数", bslTotal);
        var count = 0
        count += lionTotal + kqTotal + klTotal + mtyTotal + bslTotal

         var sub = document.querySelector("#ti");

        sub = function (){

                    $.ajax({
                        //请求方式
                        type: "POST",
                        cache: false,
                        //请求的媒体类型
                        //contentType: "application/json;charset=UTF-8",
                        //请求地址
                        url: "/api/auth/pdfcalculation",
                        //数据，json字符串
                        data: { tiger: lionTotal,peacock: kqTotal,koala:klTotal ,owl: mtyTotal,chameleon:bslTotal},
                        dataType: 'json',
                        success:function (result){
                            console.log(result.code == 200);
                            if (result.code == 200) {
                                console.log('123')
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

        }()

        window.location.href = "PDP_result.html?" + "&" + lionTotal + "&" + kqTotal + "&" + klTotal + "&" + mtyTotal + "&" + bslTotal
        console.log(count)



    }
    b1syz = function () {
        $(".two").css('display', 'none')
        $(".one").css('display', 'block')
    }









}
