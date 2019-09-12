/**
 * Taken from: https://stackoverflow.com/a/133997
 * sends a request to the specified url from a form. this will change the window location.
 * @param {string} path the path to send the post request to
 * @param {object} params the paramiters to add to the url
 * @param {string} [method=post] the method to use on the form
 */

function post(path, params, method='post') {

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
  
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const hiddenField = document.createElement('input');
            hiddenField.type = 'hidden';
            hiddenField.name = key;
            hiddenField.value = params[key];

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}

function compileApplication() {
    var timeSpentRadio = document.getElementsByName('timeSpentanswer');
    var timeSpentResponse;
    for (var i = 0, length = timeSpentRadio.length; i < length; i++) {
        if (timeSpentRadio[i].checked) {
            // do whatever you want with the checked radio
            timeSpentResponse = timeSpentRadio[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        } else {
            timeSpentResponse = "";
        }
    } //code credit: https://stackoverflow.com/a/9618826
    var toolboxRadio = document.getElementsByName('toolboxAnswer');
    var toolboxResponse;
    for (var i = 0, length = toolboxRadio.length; i < length; i++) {
        if (toolboxRadio[i].checked) {
            // do whatever you want with the checked radio
            toolboxResponse = toolboxRadio[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        } else {
            toolboxResponse = "";
        }
    } 
    var modURL = "https://www.reddit.com/message/compose?to=%2Fr%2FOverwatchCustomGames&subject=%2Fr%2FOCG%20Mod%20App%20-%20Sep%202019%20-%20" + Math.round(new Date().getTime()/1000) +
        "&message=" +
        "%2Fr%2FOCG%20Mod%20App%20-%20Sep%202019%0A%0A" + 
        "%5E%5ETimestamp%3A%20%5E%5E" + Math.round(new Date().getTime()/1000) +
        "%0A%0A---" + 
        "%0A%0A%23%23%23%20%5C*%20%20*Reddit%20Username*%3A%20" + encodeURIComponent(document.getElementById('redditUsername').value) +
        "%0A%0A%23%23%23%23%20%5C*%20%20*Discord%20Username*%3A%20" + encodeURIComponent(document.getElementById('discordUsername').value) +
        "%0A%0A%5C*%20*Age*%3A%20" + encodeURIComponent(document.getElementById('age').value) +
        "%0A%0A*Timezone*%3A%20" + encodeURIComponent(document.getElementById('timezone').value) +
        "%0A%0A%5C*%20*Average%20hours%20Spend%20on%20Reddit%2FDiscord%3F*%20" + encodeURIComponent(document.getElementById('hours').options[document.getElementById('hours').selectedIndex].value) +
        "%0A%0A*Spends%20Most%20time%3F*%20(more)" + encodeURIComponent(timeSpentResponse) +
        "%0A%0A*Favorite%20Language*%3A%20" + encodeURIComponent(document.getElementById('programmingLanguage').value) +
        "%0A%0A*%2Fr%2Ftoolbox%20Experience%3F*%20(toolbox)" + encodeURIComponent(toolboxResponse) +
        "%0A%0A---" +
        "%0A%0A%5C*%20*What%20do%20you%20think%20would%20make%20you%20a%20good%20moderator%3F*" +
        "%0A%0A%3E%20" + encodeURIComponent(document.getElementById('goodMod').value).replace(/(%0A)/g, "%0A%3E%20") +
        "%0A%0A*What%20%E2%80%9Cphilosophy%E2%80%9D%20should%20mods%20adhere%20to%3F*" +
        "%0A%0A%3E%20" + encodeURIComponent(document.getElementById('modPhilosophy').value).replace(/(%0A)/g, "%0A%3E%20") +
        "%0A%0A%5C*%20*What%20would%20you%20do%20with%20a%20questionable%20post%20or%20comment%20where%20we%20don%27t%20have%20a%20specific%20rule%20to%20handle%20it%3F*" +
        "%0A%0A%3E%20" + encodeURIComponent(document.getElementById('noRule').value).replace(/(%0A)/g, "%0A%3E%20") +
        "%0A%0A*Where%20else%20do%20you%20moderate%20and%20how%20has%20that%20experience%20been%3F*" +
        "%0A%0A%3E%20" + encodeURIComponent(document.getElementById('experiance').value).replace(/(%0A)/g, "%0A%3E%20") +
        "%0A%0A*As%20a%20moderator%2C%20what%20tasks%20do%20you%20regularly%20do%3F*" +
        "%0A%0A%3E%20" + encodeURIComponent(document.getElementById('tasks').value).replace(/(%0A)/g, "%0A%3E%20") +
        "%0A%0A%5C*%20*How%20can%20we%20be%20sure%20that%20you%20will%20act%20in%20this%20manner%20when%20dealing%20with%20sensitive%20situations%3F*" +
        "%0A%0A%3E%20" + encodeURIComponent(document.getElementById('trust').value).replace(/(%0A)/g, "%0A%3E%20") +
        "%0A%0A---" +
        "%0A%0A%5C*%20*What%20is%20your%20favourite%20and%20least%20favourite%20things%20about%20%2Fr%2FOverwatchCustomGames%3F*" +
        "%0A%0A%5E-%20%5EFavourite%3A" +
        "%0A%0A%3E%20" + encodeURIComponent(document.getElementById('favourite').value).replace(/(%0A)/g, "%0A%3E%20") +
        "%0A%0A%5E-%20%5ELeast%20%5EFavourite%3A" +
        "%0A%0A%3E%20" + encodeURIComponent(document.getElementById('leastFavourite').value).replace(/(%0A)/g, "%0A%3E%20") +
        "%0A%0A%5C*%20*What%20do%20you%20think%20could%20be%20implemented%20on%20%2Fr%2FOverwatchCustomGames%20to%20make%20it%20better%3F*" +
        "%0A%0A%3E%20" + encodeURIComponent(document.getElementById('ideas').value).replace(/(%0A)/g, "%0A%3E%20") +
        "%0A%0A*Biggest%20problem%20with%20reddit%20in%20general%3F*" +
        "%0A%0A%3E%20" + encodeURIComponent(document.getElementById('problems').value).replace(/(%0A)/g, "%0A%3E%20") +
        "%0A%0A*Is%20there%20anything%20else%20about%20you%20that%20we%20would%20be%20upset%20about%20if%20we%20later%20discovered%20it%3F*" +
        "%0A%0A%3E%20" + encodeURIComponent(document.getElementById('security').value).replace(/(%0A)/g, "%0A%3E%20") +
        "%0A%0A---" +
        "%0A%0A*Finally%2C%20is%20there%20a%20Workshop%20Project%20or%20Custom%20Game%20that%20your%20particularly%20proud%20of%3F*" +
        "%0A%0A%20%20%20%20%20" + encodeURIComponent(document.getElementById('project').value);
    modURL = modURL.replace(/'/g,"%27").replace(/"/g,"%22")
    return modURL;
}

function sendResponse() {
    window.open(compileApplication(), "_blank", "", false);
}