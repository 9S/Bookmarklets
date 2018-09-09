// Javascript to open the Youtube Mix to a specific video
//   Youtube Mixes are just "RD" + Video ID as the playlist

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
// Opens Youtube with the Video ID and the Youtube Mix
window.location = "https://www.youtube.com/watch%3Fv=" + o + "%26list=RD" + o
