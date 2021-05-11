/* Version 0.0.5 */

function injectCSS() {
    console.log("Injecting CSS.");
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    //link.id = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://tensounder54.github.io/reddit/slide/slide-manifests-alpha/css/poll-frame-stylesheet.css'; // We can probs use local code if we want, I've just got it stored here temporerilly.
    link.media = 'all';
    document.getElementsByTagName("head")[0].appendChild(link);
}

function addStyle(styleString) {
    console.log("Adding style.");
    const style = document.createElement('style');
    style.textContent = styleString;
    document.getElementsByTagName("head")[0].appendChild(style);
}

function main() {
    console.log("Main functions Started.");
    var logged = true; // This needs to be connected up to login status
    if (logged == false) {
        addStyle(`
            #gov-container button.voteButton:disabled {
				display: none;
				color: var(--accent-colour-dark);
			}
        `);
    }
    injectCSS();
}