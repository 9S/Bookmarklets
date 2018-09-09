// Javascript to open a Webpage with only the Youtube Video on it


function queryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
// Get the Video ID from the URL
var o = queryVariable("v")
// Opens a Youtube Embed Link
window.location = "https://www.youtube.com/embed/" + o
