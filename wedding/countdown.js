var timeOfWedding = new Date("August 9, 2003 19:00 EDT");
var countdown_element = document.getElementById("countdown");

countdown();  // get the ball rolling


function countdown()
{
   var now = new Date();

   var remaining = Number((timeOfWedding - now) / (1000)).toFixed(0);
   
   var relative_message;
   if ( 0 < remaining )
   {
      relative_message = " will be married in ";
   }
   else
   {
      relative_message = " have been married for ";
      remaining *= -1;
   }
   
   var seconds = remaining % 60;
   remaining = (remaining - seconds) / 60;

   var minutes = remaining % 60;
   remaining = (remaining - minutes) / 60;
   
   var message = (( minutes & 1 ) ? '<a href="../index.html">Brent</a> &amp; Amy' : 'Amy &amp; <a href="../index.html">Brent</a>')
               + relative_message ;
   
   
   var hours = remaining % 24;
   remaining = (remaining - hours) / 24;

   var days = remaining;
   
   if ( days )
      message += days + " day" + (days==1?"":"s") + ", ";
   if ( days || hours )
      message += hours + " hour" + (hours==1?"":"s") + ", ";
   if ( days || hours || minutes )
      message += minutes + " minute" + (minutes==1?"":"s") + ((days||hours)?",":"") + " and ";
   message += seconds + " second" + (seconds==1?".":"s.");

   countdown_element.innerHTML = "<font size=\"-1\" face=\"Verdana, Arial, Helvetica, sans-serif\">"
                               + message
                               + "</font>" ;

   window.setTimeout("countdown()",1000);
}
