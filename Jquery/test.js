//basic structure for jquery it's load after the html sso that the structure will not change and the changes of 
//jquery will apply after page fully load
// $(document).ready(function(){
//     $("p").click(function(){
//         $(this).hide();
//     });
// });



//to hide the paragraph by button with class first
//to slide up the paragraph by button with class second
$(document).ready(function(){
    $("button.btn1").click(function(){
    //   $("p.first").hide(1000);
      $("p.second").slideUp();
    });

    $("button.btn2").click(function(){
        $("p.second").slideDown();
    });


  });