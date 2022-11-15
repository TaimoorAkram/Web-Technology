// $(function(){
//     alert(1);
// });

// $( "#ad" ).click(function(){
//     // var i=0;
//     for (var i=0; i<10; i++)
//     {
//         $("body").append('<p>' + i + '</p>')
//     }
// });

$("#addn").click(function(){
    const t1=  parseFloat($("#one").val());
    const t2= parseFloat($("#two").val());
   // alert("#addn");
//    var ans= ;
let t3 = t1 + t2;
   alert( t3 );
});
    
// BULB on and off
$(function(){
    $("img").click(function(){
        if($(this).attr("src")== " ONbulb.jpg ")
        {
            $(this).attr("src", " OFFbulb.jpg ")
        }
        else
        {
            $(this).attr("src", " ONbulb.jpg ")
        }

    });

});

//  printing value according to starting and ending inputs

$(function(){    
    $("#pn").click(function(){
        var a1=$("#first").val();
        var a2=$("#second").val();
       //var i=0;
        for(var i=a1; i<=a2; i++)
        {
             $("body").append('<p>' + i + '</p>');
        }   
    });

});


$(function(){
    $("ul li").css("border","3px solid green" )
    $("li:first-child").css("color","blue" )
    $("li:last-child").css("font-size","30px" )
    $("li:last-child").css("color","yellow")
});


//-----------------Mouse events------------------------//
$(function(){
    $("#pg").click(function(){
        $("#pg").css("background-color", "Orange")
    });

    $("#pg").dblclick(function(){
        $("#pg").css("background-color", "gray")
    });

    // For right click
    $("#pg").contextmenu(function(){
        $("#pg").css("background-color", "blue")
    });

    $("#pg").mouseenter(function(){
        $("#pg").css("background-color", "tan")
    });

    $('#pg').mouseleave(function(){
        $('#pg').css('background-color', 'purple')
    });

});
    // -----------------Keyboard events------------------------//

    $(function(){
        $('body').keypress(function(){
            $(this).css('background-color', 'rgb(35, 212, 11)')
        });

        $('body').keyup(function(){
            $(this).css('background-color', 'pink')
        });

        $('body').keydown(function(){
            $(this).css('background-color', 'light blue')
        });
    });

    // -----------------Form events------------------------//

    $(function(){
        $("#sname,#sclass,#scountry").focus(function(){
            $(this).css("background-color", "rgb(115, 111, 139)")
        });

        $("#sname,#sclass,#scountry").blur(function(){
            $(this).css("background-color", "white")
        });

        $("#scountry").change(function(){
            var a=$(this).val();
            $("#ss").click(function(){
            $("#bor").html(a)
            });
            
        });

        $("#sname,#sclass").select(function(){
            $(this).css("background-color", "yellow")
        });

        $("#sform").submit(function(){
            alert("Form has been submitted")
        });
    });



    //=================Method chaining==================// 
$(function(){
   // $("h1").css("color", "green").slideUp(2000)
  //  $("h1").css("color", "red").slideDown(2000)

});

//=========call back (type of nestred or dependent)============//

$(function(){
    $("#ad").click(function(){
       // $("h1").css("color", "yellow")
         $("h1").css("color", "yellow")
       $("h1").slideUp(2000, function(){      
        $("h1").css("color", "Green")
         $("h1").slideDown(2000)
       });     
     
    });
});

//animation

$("#bbtn").click(function(){
    $("img").hide();  
});


// -----------------Get Methods------------------------//
$(function(){
    var a= $("#box").html(); // shows the html of id box with tags included in it.
    console.log(a);

    var a= $("#box p").html(); // shows the html paragraph in the id box  with tags included in it.
    console.log(a);

    var a= $("#box").text(); // shows the only text of id box  without tags included in it.
    console.log(a);
});

$(function(){
    var a1=$("#boxx").attr('class');// from id i target the classes use for this.(two classes use in it)
    console.log(a1);
});

$(function(){
    $("#s2form").submit(function(){
        var sname=$("#s2name").val();
        var sclass=$("#s2class").val();
        var scountry=$("#s2country").val();
        alert("Hellow" + " Mr :" + sname + " From : "+ sclass + " Belong to :" + scountry);
    });
});

// ----------------- Set Methods ------------------------//.

$(function(){
    $("#clickbtn").click(function(){
        $("#box3 h1").text("Hellow developer");
    });
});