function thpopup(url)
{
window.open(url, '_thpopup', 'scrollbars=0,resizable=1,toolbar=0,directories=0,status=0,location=0,menubar=0,height=300,width=360');
return false;
}

function thwindow(url, name)
{
if (name != 'main')
	{
	window.open(url, name, 'scrollbars=1,resizable=1,toolbar=0,directories=0,status=0,location=0,menubar=0,height=300,width=360');
	return false;
	}

return true;
}

function thcancel(msg, url, line)
{
return true;
}

function thload()
{
window.onerror = thcancel;

if (window.name == '_thpopup')
	{
	var major = parseInt(navigator.appVersion);

	if (major >= 4)
		{
		var agent = navigator.userAgent.toLowerCase();

		if (agent.indexOf("msie") != -1)
			document.all.item("ienav").style.display = "none";

		else
			document.layers['nsnav'].visibility = 'hide';
		}
	}
}
