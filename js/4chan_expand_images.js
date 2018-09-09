// This Javascript swaps all images on a 4chan thread to be the full sized version

// Get all Image Thumbnails
var t = document.getElementsByClassName("fileThumb")
// Expand all Images
for (var i = 0; i < t.length; i++) {
  ImageExpansion.expand(t[i].getElementsByTagName('img')[0])
}
