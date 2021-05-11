/* Version 0.0.5 */

function injectCSS() {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    //link.id = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://tensounder54.github.io/reddit/slide/slide-manifests-alpha/css/login-screen-0.2.0.css';
    link.media = 'all';
    head.appendChild(link);
}

function main() {
    document.getElementById("user_login").placeholder = "Username";
    document.getElementById("passwd_login").placeholder = "Password";
    injectCSS();
}