$(function () {
    var status = 0
    $(".read_more,#lang_content").on("touchstart", function () {
        // status 为0 可展开
        if (status == 0) {
            $(".cd_content_1 .content_detail   .content_detail_w").css("display", "block")
            // qq浏览器
            $(".cd_content_1 .content_detail   .content_detail_w").css("height","unset")
            $(".cd_content_1 .content_detail   .content_detail_w").css("overflow","visible")
            $(".read_more").text("点击收起👆")
            status = 1
        } else {
            // qq浏览器
            $(".cd_content_1 .content_detail   .content_detail_w").css("height","14.5rem")
            $(".cd_content_1 .content_detail   .content_detail_w").css("overflow","hidden")
            // chrome浏览器
            $(".cd_content_1 .content_detail   .content_detail_w").css("display", "-webkit-box")
            $(".read_more").text("点击查看更多👇.....")
            status = 0
        }

    })
})
