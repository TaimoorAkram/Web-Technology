$(function(){
    $("#btn").click(function(){
        var v1 = $("first").val();
        var v2 = $("second").val();
        for(v1; v1<=v2 ; v1++)
        {
            $("body").append("<p>"+v1+"</p>");
        }
    }
    );
}
)