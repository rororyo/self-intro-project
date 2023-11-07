const carouselItems = document.querySelectorAll('.carousel-item');

// Add a click event listener to each item to make it active
carouselItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove 'active' class from all items
        carouselItems.forEach(i => i.classList.remove('active'));

        // Add 'active' class to the clicked item
        item.classList.add('active');
    });
});