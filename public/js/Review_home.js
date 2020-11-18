$(function () {
    var status = 0
    $(".read_more,#lang_content").on("touchstart", function () {
        if (status == 0) {
            $(".cd_content_1 .content_detail   .content_detail_w").css("display", "block")
            $(".read_more").text("点击收起👆")
            status = 1
        } else {
            $(".cd_content_1 .content_detail   .content_detail_w").css("display", "-webkit-box")
            $(".read_more").text("点击查看更多👇.....")
            status = 0
        }

    })
})
