const button = document.querySelector("#header__theme-button");
const body = document.body;
let darkMode = false;

 export function themeChange() {
    darkMode = !darkMode;
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", JSON.stringify(darkMode));
}

button.addEventListener("click",(event) => {
    event.preventDefault()
    themeChange();
});

export function themeAnalasys() {
    darkMode = JSON.parse(localStorage.getItem("theme"));

    if (darkMode) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
}

