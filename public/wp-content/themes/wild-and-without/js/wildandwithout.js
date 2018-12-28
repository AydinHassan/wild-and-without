import Swiper from "swiper";

const stickyHeader = e => {
    const headerHeight = parseInt(window.getComputedStyle(document.querySelector('header')).height, 10);
    const windowWidth  = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (window.pageYOffset > (headerHeight + 100) && windowWidth > 767 && !document.body.classList.contains('error404')) {
        document.body.classList.add('header-fixed');
        document.querySelector('.cstheme-logo').classList.add('hide');
    } else {
        document.body.classList.remove('header-fixed');
        document.querySelector('.cstheme-logo').classList.remove('hide');
    }
}

window.addEventListener("resize", stickyHeader);
window.addEventListener('scroll', stickyHeader);

document.addEventListener("DOMContentLoaded", e => {
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

    function fixTags (tags) {
        for(let tag of tags) {
            tag.appendChild(document.createElement('i'))
        }
    }

    fixTags(document.querySelectorAll('.tagcloud a'));
    fixTags(document.querySelectorAll('.single_post_meta_tags a'));

    //newsletter modal
    const popupButton = document.querySelectorAll('.subscribe_popup_btn');
    if (popupButton.length > 0) {
        popupButton[0].addEventListener("click", e => {
            if (document.body.classList.contains('subscribe_popup_show')) {
                document.body.classList.remove('subscribe_popup_show');
            } else {
                document.body.classList.add('subscribe_popup_show');
            }
        });

        const cb = e => {
            if (document.body.classList.contains('subscribe_popup_show')) {
                document.body.classList.remove('subscribe_popup_show');
            }
        };

        const popupClose = document.querySelectorAll('.subscribe_popup_close')[0];
        popupClose.addEventListener("click", cb);

        const popupBack = document.querySelectorAll('.subscribe_popup_back')[0];
        popupBack.addEventListener("click", cb);
    }

    //scrolltop
    function scrollToTop(scrollDuration) {
        const scrollHeight = window.scrollY;
        const scrollStep = Math.PI / (scrollDuration / 15);
        const cosParameter = scrollHeight / 2;
        let scrollCount = 0;
        let scrollMargin;
        let scrollInterval = setInterval( function() {
            if (window.scrollY != 0 ) {
                scrollCount++;
                scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
                window.scrollTo(0, (scrollHeight - scrollMargin));
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    }

    document.querySelectorAll('.btn-scroll-top')[0].addEventListener("click", e => {
        scrollToTop(2000);
    })

    //search
    const searchButtons = document.querySelectorAll('.header_search .fa');

    for (let searchButton of searchButtons) {
        searchButton.addEventListener("click", e => {
            document.body.classList.toggle('form_focus');
            document.querySelectorAll('.header_search input.search-field')[0].focus();
        });
    }

    document.addEventListener("click", e => {
        if (e.target.closest('.header_search .fa')) {
            return;
        }

        if (e.target.closest('input.search-field')) {
            return;
        }

        if (document.body.classList.contains('form_focus')) {
            document.body.classList.remove('form_focus');
        }
    });

    //	Sharebox
    const sharebox = document.querySelector('.single_sharebox_wrap .sharebox');
    if (sharebox !== null) {
        const shareboxButton = document.querySelector('.single_sharebox_wrap .sharebox_btn');
        shareboxButton.addEventListener("click", e => {
            sharebox.classList.toggle('sharebox_active');
        });

        document.addEventListener("click", e => {
            if (e.target.closest('.single_sharebox_wrap .sharebox_btn')) {
                return;
            }

            if (sharebox.classList.contains('sharebox_active')) {
                sharebox.classList.remove('sharebox_active')
            }
        });
    }

    // Mobile Menu Function
    const mobileHeader = document.getElementById('header_mobile_wrap');
    if (mobileHeader !== null) {
        const mobileMenuButtons = document.querySelectorAll('.mobile_menu_btn');
        for(let mobileButton of mobileMenuButtons) {
            mobileButton.addEventListener("click", e => {
                const menu = document.querySelector('#header_mobile_wrap .menu-primary-menu-container-wrap');
                slideToggle(menu);
            });
        }

        document.querySelector('#header_mobile_wrap ul.sub-menu').style.display = 'none';

        const menuItems = document.querySelectorAll('#header_mobile_wrap .menu-item-has-children > a');
        for(let menuItem of menuItems) {
            menuItem.addEventListener('click', e => {
                e.preventDefault();
                menuItem.classList.toggle('submenu_open');

                if (menuItem.nextElementSibling) {
                    slideToggle(menuItem.nextElementSibling);
                }
            });
        }
    }

    //	Mega menu (with tabs)
    function activateTab(tabs, tabId) {
        for (let tab of tabs) {
            if (tab.classList.contains(tabId)) {
                tab.classList.remove('tab-hidden');
            } else {
                tab.classList.add('tab-hidden');
            }
        }
    };

    const megaParents = document.querySelectorAll('.menu-item-mega-parent');
    for(let megaParent of megaParents) {
        const tabs = megaParent.querySelectorAll('.category-children-wrap');
        let minHeight = 0;
        for (let tab of tabs) {
            const height = getAbsoluteHeight(tab);

            if (height > minHeight) {
                minHeight = height;
            }
        }

        //set all tabs to the same height of the tallest
        for (let tab of tabs) {
            tab.style.height = minHeight + 'px';
        }

        //hide all tabs
        for (let tab of tabs) {
            tab.classList.add('tab-hidden');
        }

        //if we have active category - open that tab, otherwise, open first tab.
        const menuItems = megaParent.querySelectorAll('.cstheme_mega_menu li');
        let activeCatId = null;
        for (let menuItem of menuItems) {
            if (menuItem.classList.contains('current-menu-item')) {
                activeCatId = menuItem.id;
            }
        }

        if (activeCatId !== null) {
            activateTab(tabs, activeCatId);
        } else {
            const firstTab = megaParent.querySelector('.category-children > div:first-child');
            firstTab.classList.remove('tab-hidden');
            menuItems[0].classList.add('nav-active');
        }

        for (let menuItem of menuItems) {
            menuItem.addEventListener('mouseover', e => {
                //remove nav-active from all menu items
                (function (menuItems) {
                    for (let menuItem of menuItems) {
                        menuItem.classList.remove('nav-active');
                    }
                })(menuItems);

                //set current hover as active
                menuItem.classList.add('nav-active');

                activateTab(tabs, menuItem.id);
            });
        }
    }

    //fetch instagram widgets
    const instagramContainers = document.querySelectorAll('.instagram-container');
    for(let container of instagramContainers) {

        let type;
        if (container.classList.contains('instagram-grid')) {
            type = 'grid';
        } else if (container.classList.contains('instagram-carousel')) {
            type = 'carousel';
        }

        const req = new XMLHttpRequest();
        req.open("GET", cstheme_ajaxurl + '?action=instagram_posts' + '&type=' + type , true);
        req.onload = function() {
            if (req.status >= 200 && req.status < 400) {
                const response = JSON.parse(req.responseText);

                if (response.success === true) {
                    container.innerHTML = response['data']['html'];
                } else {
                    container.innerHTML = response['data']['message'];
                }
            } else {
                container.innerHTML = '<p>There was a problem fetching instagram posts.</p>';
            }
        };

        req.send();
    }

    const serialize = function(obj) {
        const str = [];
        for (let p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    }

    const submitNewsletter = form => {
        const responses = form.querySelectorAll(".mc4wp-response");
        for (let response of responses) {
            response.parentNode.removeChild(response);
        }

        const inputs = form.elements;
        const data   = {};

        for (let i = 0; i < inputs.length; i++) {
            data[inputs[i].name] = inputs[i].value;
        }

        data['action'] = 'wild_without_subscribe';

        const submitButton = form.querySelector('input[type=submit]');
        submitButton.value = 'Submitting...';
        submitButton.setAttribute("disabled", "disabled");

        const req = new XMLHttpRequest();
        req.open("POST", cstheme_ajaxurl, true);
        req.setRequestHeader('Accept', 'application/json; charset=utf-8');
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.onload = function (response) {
            if (req.status >= 200 && req.status < 400) {
                const response = JSON.parse(req.responseText);

                if (response.success) {
                    const responseHtml = '<div class="mc4wp-response"><p class="subscribe-success">Thank you for subscribing. We have sent you a confirmation email.</p></div>';
                    form.innerHTML = responseHtml;
                    return;
                }

                form.classList.remove('mc4wp-form-error');
                form.classList.add('mc4wp-form-success');

                const errorHtml = Object.keys(response.data.errors).map(function(key, index) {
                    return '<div class="mc4wp-alert mc4wp-' + key + '"><p class="subscribe-error">' + response.data.errors[key] + '</p></div>';
                }).join('');
                const div = document.createElement('div');
                div.innerHTML = '<div class="mc4wp-response">' + errorHtml + '</div>';
                form.appendChild(div);
                submitButton.value = 'Sign up';
                submitButton.removeAttribute("disabled");

                const responseHtml = '<div class="mc4wp-response"><p class="subscribe-success">Thank you for subscribing. We have sent you a confirmation email.</p></div>';
                form.innerHTML = responseHtml;
            } else {
                console.log(response);
                submitButton.value = 'Sign up';
                submitButton.removeAttribute("disabled");
            }
        };

        req.send(serialize(data));
    }

    //newsletter subscribe
    document.querySelector('#mc4wp-form-1').addEventListener('submit', e => {
        e.preventDefault();
        submitNewsletter(document.querySelector('#mc4wp-form-1'));
    });

    //2 because second form on page after default side bar newsletter
    if (document.querySelector('#mc4wp-form-2')) {
        document.querySelector('#mc4wp-form-2').addEventListener('submit', e => {
            e.preventDefault();
            submitNewsletter(document.querySelector('#mc4wp-form-2'));
        })
    }
});

function slideToggle(element) {
    if (!element.classList.contains('active')) {
        element.classList.add('active');
        element.style.height = 'auto';

        const height = element.clientHeight + "px";

        element.style.height = '0px';

        setTimeout(function () {
            element.style.height = height;
        }, 0);
    } else {
        element.style.height = '0px';

        element.addEventListener('transitionend', function () {
            element.classList.remove('active');
        }, {
            once: true
        });
    }
}

function getAbsoluteHeight(el) {
    // Get the DOM Node if you pass in a string
    el = (typeof el === 'string') ? document.querySelector(el) : el;

    var styles = window.getComputedStyle(el);
    var margin = parseFloat(styles['marginTop']) +
        parseFloat(styles['marginBottom']);

    return Math.ceil(el.offsetHeight + margin);
}

