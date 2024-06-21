
const root = document.querySelector(":root");
const sun = document.querySelector(".toggle-theme .light");
const moon = document.querySelector(".toggle-theme .dark");

var darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

function activateDarkMode() {
    root.style.setProperty('color-scheme', 'dark');    
    sun.style.setProperty('display', 'none');
    moon.style.setProperty('display', 'unset');
    darkMode = true;
}

function activateLightMode() {
    root.style.setProperty('color-scheme', 'light');    
    sun.style.setProperty('display', 'unset');
    moon.style.setProperty('display', 'none');
    darkMode = false;
}

const btn = document.querySelector(".toggle-theme button");
btn.addEventListener("click", (e) => darkMode ? activateLightMode() : activateDarkMode());

