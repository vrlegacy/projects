let button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let searchTerm = document.querySelector(".searchWord").value.trim();
  if (searchTerm) {
    let querry = `https://github.com/${searchTerm}`;
    window.open(querry, "_blank");
  }
});
