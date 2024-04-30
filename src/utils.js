function capitalizeWords(string) {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function splitAndCapitalizeWords(string) {
    return string.split(/[\s_]+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function prettifyObjectKeys(string) {
    return string.split(/[\s_]+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ').replace('And', '&');
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}




module.exports = {
    capitalizeWords,
    splitAndCapitalizeWords,
    prettifyObjectKeys,
    setCookie,
    getCookie
}