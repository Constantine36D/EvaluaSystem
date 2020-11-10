$(function(){
    $(".hld_a_btn").click(function(){
        
        // 最想干的三种工作'输入框组
            var Work_valArr = $(".input_one input").map(function(){
                return $(this).val()}).get();
                //打印获得的值的数组

        // 最想读的三种专业  输入框组
        var Major_valArr = $(".input_two input").map(function(){
            return $(this).val()}).get();
            //打印获得的值的数组
            var w_i =0
            var m_i =0
            for(var i in Work_valArr){
                if(Work_valArr[i] == ""){
                    w_i ++
                }

            }
            for(var i in Major_valArr){
                if(Major_valArr[i] == ""){
                    m_i ++
                }

            }
            if(w_i == 3 && m_i == 3){
                alert("全部都要输入昂！！！")
            }
            else if(w_i >=1){
                alert("请在'最想干的三种工作'填完昂！！！")
            }
            else   if(m_i >=1){
                alert("请在'最想读的三种专业'填完昂！！！")
            }

  else {
      window.location.href ="hld_test_a.html"
  }
    })
  

})