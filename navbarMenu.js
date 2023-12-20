const navButton = document.getElementById("menu-button");
const tabletMenuContainer = document.getElementById("tablet-menu")
navButton.addEventListener('click', function() {
    tabletMenuContainer.classList.toggle('show-tablet-menu');

})