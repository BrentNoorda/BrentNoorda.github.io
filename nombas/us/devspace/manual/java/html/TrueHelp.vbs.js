function window_onload()
{
    $('[id^="c"]').hide();
    $('[id^="mi"]').attr("src","closed.png");
}

function thclick()
{
	var id = window.event.srcElement.id;
	if ( id.startsWith("m") ) {


    	var eltname = "#c" + id.substring(2);
	    var imgname = "#mi" + id.substring(2);

        if ( !$(eltname).is(':visible') )
        {
            $(eltname).show();
            $(imgname).attr("src","open.png");
        } else {
            $(eltname).hide();
            $(imgname).attr("src","closed.png");
        }



    }
}

// load jquery library for ajax, json, and simple stuff
$(document).ready(function() {
    window_onload();
    document.body.onclick = thclick;
});
