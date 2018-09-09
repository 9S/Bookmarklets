// Javascript to open Archive.org with the current url


// Uses Regex to replace the first part of the URL with the web archive.
window.location = "https://web.archive.org/web/" + window.location.href.replace(/https?%3F:\/\//i, "")
