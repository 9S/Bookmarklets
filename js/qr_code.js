// Javascript to open the current URL as a QR Code. Can be used to easily transfer a URL to a phone

// Encode the current URL
current_url = encodeURIComponent(window.location.href)
// Send it off to qrserver.com
api_url = "https://api.qrserver.com/v1/create-qr-code/%3Fdata="
window.location = api_url + current_url
