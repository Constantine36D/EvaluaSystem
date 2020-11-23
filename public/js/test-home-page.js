
//判断所有字段是否为空

$(".button").on('click', function () {
    if ($("input[type='checkbox']").is(':checked')) {
        $('.content-alert').hide();
        $('.mask').hide();
    }

})
$('.in-bu button').on('click',function() {
    $('.information').hide();
    $('.mask').hide();
})
function ceping(){
    window.location.href = "cx_common.html"
}
function quxiao(){
    $('.content-alert').css('display','none')
    $('.mask').css('display','none')
}
function tijiao(){
    var obj = document.getElementsByName("tiyxs");
    var flags = false;
    for(var i=0; i<obj.length; i ++){
        if(obj[i].checked==true){
            flags = true;
            window.location.href = "cx_common.html"
        }
    }
    if (flags == false)
    {
        alert("对不起，请点击阅读")
        return false;
    }
}
function tcp() {
    zeroModal.alert('请先完成风格测评！');
}

function hld() {
    zeroModal.alert('请先完成风格测评!');
}

