import Swiper from "swiper";

$(document).ready(function () {
    var homepageSlider = new Swiper('.swiper-container', {
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

    //fetch instagram widgets
    const instagramContainers = document.querySelectorAll('.instagram-container');
    for(let container of instagramContainers) {

        let type;
        if (container.classList.contains('instagram-grid')) {
            type = 'grid';
        } else if (container.classList.contains('instagram-carousel')) {
            type = 'carousel';
        }

        $.get(
            cstheme_ajaxurl,
            {
                action: 'instagram_posts',
                type:  type
            },
            (response) => {
                if (response.success === true) {
                    container.innerHTML = response['data']['html'];
                } else {
                    container.innerHTML = response['data']['message'];
                }
            },
        ).fail(() => {
            container.innerHTML = '<p>There was a problem fetching instagram posts.</p>';
        })
    }
});

