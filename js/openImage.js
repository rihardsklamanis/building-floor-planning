document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.link');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var imageName = this.textContent.trim();
            var containerId = this.getAttribute('data-container');
            var imageContainer = document.getElementById(containerId);
            var imageElement = imageContainer.querySelector('.displayed-image');

            imageElement.src = "images/" + imageName + '.jpg';
            imageContainer.style.display = 'block';
        });
    });
});