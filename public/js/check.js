
        var userToken = window.localStorage.getItem("yq_token");
        console.log(userToken)
       if(userToken!=0&&userToken!=null){
           alert("您已登录，为您自动跳转")
            window.location.href = "test-home-page.html"    
       }