window.onload = function () {
    var homepageSlider = new Swiper ('.swiper-container', {
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    var relatedPosts = document.getElementById('#related_posts_list');
    if (relatedPosts !== null) {
        var relatedPostsSlider = new Swiper('#related_posts_list', {
            slidesPerView: 4,
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 480px
                480: {
                    slidesPerView: 1,
                },
                // when window width is <= 768px
                768: {
                    slidesPerView: 2,
                },
                // when window width is <= 1024px
                1024: {
                    slidesPerView: 3,
                }
            }
        })
    }
}