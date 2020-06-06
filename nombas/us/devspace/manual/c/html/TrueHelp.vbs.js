function window_onload()
{
    $('[id^="c"]').hide();
    $('[id^="mi"]').attr("src","closed.png");
}

function thclick()
{
    console.log("click");

	var id = window.event.srcElement.id;
	if ( id.startsWith("m") ) {


        console.log("id = " + id);
    	var eltname = "#c" + id.substring(2);
        console.log("elt = " + eltname);

	    var imgname = "#mi" + id.substring(2);
        console.log("img = " + imgname);

        console.log("elt.display = " + $(eltname).css('display)') );

        if ( !$(eltname).is(':visible') )
        {
            console.log("invisible");
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
