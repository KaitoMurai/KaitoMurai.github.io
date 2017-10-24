var userAgent = window.navigator.userAgent.toLowerCase();

if(userAgent.indexOf('msie') != -1 ||
        userAgent.indexOf('trident') != -1) {
    alert("非推奨環境です．表示が乱れる場合があります．");
} else if(userAgent.indexOf('edge') != -1) {
    alert("非推奨環境です．表示が乱れる場合があります．");
} else if(userAgent.indexOf('chrome') != -1) {
    // console.log('Google Chromeをお使いですね');
} else if(userAgent.indexOf('safari') != -1) {
    // console.log('Safariをお使いですね');
} else if(userAgent.indexOf('firefox') != -1) {
    // console.log('FireFoxをお使いですね');
} else if(userAgent.indexOf('opera') != -1) {
    // console.log('Operaをお使いですね');
} else {
    alert("非推奨環境です．表示が乱れる場合があります．");
}