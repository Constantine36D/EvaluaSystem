$("input:radio").click(function(){
    var domName = $(this).attr('name');//获取当前单选框控件name 属性值 
    var checkedState = $(this).attr('checked');//记录当前选中状态
    $("input:radio[name='" + domName + "']").attr('checked',false);//1.
    $(this).attr('checked',true);//2.
    if(checkedState == 'checked'){
        $(this).attr('checked',false); //3.
    }
});