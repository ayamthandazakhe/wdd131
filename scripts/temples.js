const menuButton = document.querySelector("#menu-Button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("show");

    if (navigation.classList.contains("show")) {
        menuButton.textContent = "❌";

        menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuButton.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    `;
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
});

document.querySelector("#currentyear").textContent = "Last Modified: " + document.lastModified;