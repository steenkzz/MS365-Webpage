// sidemenu left
function openMenuLeft() {
    document.getElementById("sidemenu-left-id").style.width="250px";
}

function closeMenuLeft() {
    document.getElementById("sidemenu-left-id").style.width="0";
}


// sidemenu right
function openMenuRight() {
    document.getElementById("sidemenu-right-id").style.width="250px";
}

function closeMenuRight() {
    document.getElementById("sidemenu-right-id").style.width="0";
}


// anchor open page
function openPage() {
    window.location.href = "#";
}


// dark mode
// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function themeLight() {
        setTheme('theme-light');
    }
function themeDark() {
        setTheme('theme-dark');
    }
function themeBlurple() {
        setTheme('theme-blurple');
    }
function themeOcean() {
        setTheme('theme-ocean');
    }
function themeSunrise() {
        setTheme('theme-sunrise');
    }

// immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById("dark").checked = true;
    }
}) ();

(function () {
    if (localStorage.getItem('theme') === 'theme-blurple') {
        setTheme('theme-blurple');
        document.getElementById("blurple").checked = true;
    }
}) ();

(function () {
    if (localStorage.getItem('theme') === 'theme-ocean') {
        setTheme('theme-ocean');
        document.getElementById("ocean").checked = true;
    }
}) ();

(function () {
    if (localStorage.getItem('theme') === 'theme-sunrise') {
        setTheme('theme-sunrise');
        document.getElementById("sunrise").checked = true;
    }
}) ();

(function () {
if (localStorage.getItem('theme') === 'theme-light') {
    setTheme('theme-light');
    document.getElementById("light").checked = true;
}
}) ();

(function () {
        setTheme('theme-light');
}) ();