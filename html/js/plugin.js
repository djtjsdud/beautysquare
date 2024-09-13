// /////////////////////////////////////메인배너
var mainbanner_swiper = new Swiper("#mainbanner-swiper", {
    scrollbar: {
    el: "#mainbanner-swiper .swiper-scrollbar",
    hide: false,
    spaceBetween: 30,
    centeredSlides: true,
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: "#mainbanner-swiper .mainbanner-swiper-pagination",
        type: "fraction",
        clickable: true,
        },
    navigation: {
        nextEl: "#mainbanner-swiper .mainbanner-swiper-button-next",
        prevEl: "#mainbanner-swiper .mainbanner-swiper-button-prev",
        },
    loop : true
});

// //////////////////////////////////////베스트셀러
var best_swiper = new Swiper("#best-seller-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop : true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: "#best-seller-swiper .best-swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#best-seller-swiper .best-swiper-button-next",
        prevEl: "#best-seller-swiper .best-swiper-button-prev",
    },
});

///////////////////////////////////////////신제품
var new_swiper = new Swiper("#new-product-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: "#new-product-swiper .new-swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#new-product-swiper .new-swiper-button-next",
        prevEl: "#new-product-swiper .new-swiper-button-prev",
    },
});