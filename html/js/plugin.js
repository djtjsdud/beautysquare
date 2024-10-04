// 메인배너
var mainbanner_swiper = new Swiper("#mainbanner-swiper", {
    scrollbar: {
    el: "#mainbanner-swiper .swiper-scrollbar",
    hide: false,
    spaceBetween: 30,
    centeredSlides: true,
    },
    // autoplay: {
    //     delay: 6000,
    //     disableOnInteraction: false,
    // },
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

// 베스트셀러
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

//신제품
var swiper_new = new Swiper("#new-product-swiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
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
    breakpoints: {
        100: {
            slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 10,
        },
        375: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 20,
        },
        580: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 30,
        },
        990: {
            slidesPerGroup: 5,
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});

// ////////////////////////////////////////맞춤형 추천
var swiper_custom = new Swiper("#custom-swiper", {
    slidesPerView: 1,
    slidesPerGroup : 1,
    spaceBetween: 20,
    // loop: true,
    freeMode: true,
    pagination: {
        el: "#custom-swiper .custom-swiper-pagination",
        clickable: true,
    },
    scrollbar: {
        el: ".custom-swiper-scrollbar",
        hide: false,
    },
    breakpoints: {
        580: {
            slidesPerView: 2, // 576 이상에서 2개
        },
        992: {
            slidesPerView: 3, // 992 이상에서 3개
        },

    },
});



//베스트(서브 페이지)
var swiper_best = new Swiper("#sub-best-swiper .swiper.mySwiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".sub-best-swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".sub-best-swiper-button-next",
        prevEl: ".sub-best-swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 10
        },
        375: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 20
        },
        580: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 30
        },
        990: {
            slidesPerGroup: 4,
            slidesPerView: 4,
            spaceBetween: 30
        },
    }
});

// ///////////////////////////////////브랜드 소개

document.addEventListener("DOMContentLoaded", function() {
    // 이미지 요소 선택
    const img = document.querySelector("#identity img");
    
    // Intersection Observer 콜백 함수 정의
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 요소가 뷰포트에 들어왔을 때 'shrink' 클래스 추가
                img.classList.add("shrink");
            } else {
                // 요소가 뷰포트에서 나갔을 때 'shrink' 클래스 제거 (선택적)
                img.classList.remove("shrink");
            }
        });
    };
    
    // Intersection Observer 인스턴스 생성
    const observer = new IntersectionObserver(observerCallback, {
        root: null, // 뷰포트를 root로 설정
        threshold: 0.1 // 요소의 10%가 뷰포트에 들어오면 콜백 실행
    });
    
    // 관찰할 요소 추가
    observer.observe(img);
});