document.addEventListener("DOMContentLoaded", function () {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Fetch photos from external database and dynamically add to swiper
    fetch('https://example.com/api/photos') // Replace with your API endpoint
        .then(response => response.json())
        .then(data => {
            data.photos.forEach(photo => {
                let slide = document.createElement('div');
                slide.className = 'swiper-slide';
                slide.innerHTML = `<img src="${photo.url}" alt="${photo.description}">`;
                document.querySelector('.swiper-wrapper').appendChild(slide);
            });
            swiper.update(); // Update Swiper after adding slides
        })
        .catch(error => console.error('Error fetching photos:', error));
});
