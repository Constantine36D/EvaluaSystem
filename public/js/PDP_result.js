$(function(){
    // 返回测评主页
    $(".back_btn").click(function () {
        window.location.href = "test-home-page.html"
    })

var url_Arr =window.location.href.split("&")
console.log(url_Arr);
show_pdp()
    // 展示pdp结果分数的页面
     function  show_pdp(){
        for (var i = 0; i < 5; i++) {
            let str =`<h2 >您该项的得分是${url_Arr[i+1]}分</h2>  `
            $(".count").eq(i).empty().append(str)
        }
    }
})
