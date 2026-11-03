const today = new Date();

document.querySelector("#currentyear").textContent = today.getFullYear();

const lastModified = new Date(document.lastModified);

document.querySelector("#lastModified").textContent = `Last Modified: ${lastModified.toLocaleString()}`;