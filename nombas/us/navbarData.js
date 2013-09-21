/* nop */

function changeImages() { }
function popUp() { }
function popDown() { }


function display_nombas_legacy_message()
{
    var el, html, pathup;
    el = document.getElementById("nombas-legacy");
    html = '<TABLE BORDER=0 CELLSPACING=0 CELLPADDING=0 width="610" style="margin-left:10px;">'
        + '<tr><td style="color:yellow;font-weight:bold;"><font style="font-size:150%;">'
        + 'WARNING: THIS IS NO LONGER AN ACTIVE SITE. MANY LINKS WILL NOT WORK!</font><br/>'
        + 'These pages are archived for the use of anyone supporting a legacy ScriptEase '
        + 'ISDK from Nombas. For more information visit <a href="';
    html += navbarPath;
    html += 'index.htm">Nombas Gone Oft</a> page.</td></tr></TABLE>';
    el.innerHTML = html;
}
