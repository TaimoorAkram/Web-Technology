//basic structure for jquery it's load after the html sso that the structure will not change and the changes of 
//jquery will apply after page fully load
// $(document).ready(function(){
//     $("p").click(function(){
//         $(this).hide();
//     });
// });



//to hide the paragraph by button with class first
//to slide up the paragraph by button with class second
$(document).ready(function () {
  $("button.btn1").click(function () {
    //   $("p.first").hide(1000);
    $("p.second").slideUp();
  });

  $("button.btn2").click(function () {
    $("p.second").slideDown();
  });
  //----------------------------------------------------------

  $("button.btndbl").dblclick(function () {
    $("p.third").slideUp();
    $("p.third").slideDown();
    $("button.btn1").css("background-color", "green");
    $("button.btn1").css("font-size", "10px");
    $("button.btn2").css("background-color", "red");
  });

  //----------------------------------------------------------
  $("button.addno").click(function(){
    var a = $("#in1").val();
    var b = $("#in2").val();
    var c = a+b;
    alert(c);
  });

  $("#on").click(function(){
    if ($(this).attr("src")== " ONbulb.jpg ") {
      $(this).attr("src" , " OFFbulb.jpg ");
    } else {
      $(this).attr("src" , " ONbulb.jpg ")
    }
  });

});