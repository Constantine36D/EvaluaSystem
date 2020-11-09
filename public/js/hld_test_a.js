window.onload = function () {


  atijiao = function () {
    $(".one").hide()
    $(".two").show()



  }
  btijiao = function () {
    $(".two").css('display', 'none')
    $(".three").css('display', 'block')

  }
  bsyz = function () {
    $(".two").css('display', 'none')
    $(".one").css('display', 'block')
  }
  cxyz = function () {
    $(".three").css('display', 'none')
    $(".four").css('display', 'block')
  }
  csyz = function () {
    $(".three").css('display', 'none')
    $(".two").css('display', 'block')
  }
  dsyz = function () {
    $(".four").css('display', 'none')
    $(".three").css('display', 'block')
  }
  dxyz = function () {
    $(".four").css('display', 'none')
    $(".five").css('display', 'block')
  }
  esyz = function () {
    $(".five").css('display', 'none')
    $(".four").css('display', 'block')
  }
  exyz = function () {
    $(".five").css('display', 'none')
    $(".six").css('display', 'block')
  }
  fsyz = function () {
    $(".six").css('display', 'none')
    $(".five").css('display', 'block')
  }
  ftijiao = function () {

    // 算分开始
    // R型      
    var R_score = 0
    var common_score = 6;
    var R_check_length = $('.one input:radio:checked').length
    R_score = R_check_length * common_score
    console.log(" R型",R_score);
// A型
    var A_score = 0
    var A_check_length = $('.two input:radio:checked').length
    A_score = A_check_length * common_score
    console.log(" A型",A_score);
    // I型
    var I_score = 0
    var I_check_length = $('.three input:radio:checked').length
    I_score = I_check_length * common_score
    console.log(" I型",I_score);
    // S型
    var S_score = 0
    var S_check_length = $('.four input:radio:checked').length
    S_score =S_check_length * common_score
    console.log(" S型",S_score);
    // E型
    var E_score = 0
    var E_check_length = $('.five input:radio:checked').length
    E_score = E_check_length * common_score
    console.log(" E型",E_score);
 // C型
 var C_score = 0
 var C_check_length = $('.six input:radio:checked').length
 C_score = C_check_length * common_score
 console.log(" C型",C_score);
 window.location.href="hld_C.html?&"+"R="+R_score+"&A="+A_score+"&I="+I_score+"&S="+S_score+"&E="+E_score+"&C="+C_score
  }

}