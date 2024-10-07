// 베스트 셀러 애니메이션

document.addEventListener("scroll", function() {
    const textContainer = document.querySelector('.best-left-text');
    const rect = textContainer.getBoundingClientRect();

    // 뷰포트에 들어올 때
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        textContainer.classList.add('visible');

        // 애니메이션 순서 제어
        const pTag = textContainer.querySelector('p');
        const h2Tag = textContainer.querySelector('h2');
        const spanTag = textContainer.querySelector('span');

        // p 태그 애니메이션
        pTag.style.transitionDelay = "0s"; // 지연 없음
        h2Tag.style.transitionDelay = "0.6s"; // 0.6초 후 애니메이션 시작
        spanTag.style.transitionDelay = "1.2s"; // 1.2초 후 애니메이션 시작

        // 애니메이션 클래스 추가
        pTag.classList.add('visible');
        h2Tag.classList.add('visible');
        spanTag.classList.add('visible');

        // 스크롤 이벤트 리스너 제거 (한 번만 실행)
        document.removeEventListener("scroll", arguments.callee);
    }
});


// 자주묻는질문(서브페이지)

$(function() {
    $('dl dt').on('click', function() {
        const $this = $(this);
        const $dd = $this.next('dd');

        // 화살표 각도 변경
        const isExpanded = $this.hasClass('active');
        $this.css('--arrow-rotation', isExpanded ? '45deg' : '225deg');
        $this.toggleClass('active');

        if (isExpanded) {
            $dd.slideUp(800);
        } else {
            $dd.slideDown(500).siblings('dd').slideUp(800);
        }
    });

    $('dl dd').on('click', function() {
        const $dd = $(this);
        const $dt = $dd.prev('dt');

        // 화살표를 원래 각도로 되돌리기
        $dt.css('--arrow-rotation', '45deg');
        $dt.removeClass('active');
        $dd.slideUp(800);
    });

    $('.nav-Btn').on('click', function(){
        $(this).toggleClass('slideOn');
        $('nav').toggleClass('slideOn');
    });
});

// 탑버튼

window.addEventListener('scroll', function() {
    const fixBtn = document.getElementById('fixBtn');
    if (window.scrollY > 100) { // 스크롤이 100px 이상일 때
        fixBtn.style.display = 'block'; // 버튼 보이기
    } else {
        fixBtn.style.display = 'none'; // 버튼 숨기기
    }
});

// 로그인페이지

// Easy way to wait for all videos to load before start playing

var promises = [];
function makePromise(i, video) {
  promises[i] = new $.Deferred();
  // This event tells us video can be played all the way through, without stopping or buffering
  video.oncanplaythrough = function() {
    // Resolve the promise
    promises[i].resolve();
  }
}
// Pause all videos and create the promise array
$('video').each(function(index){
  this.pause();
  makePromise(index, this);
})

// Wait for all promises to resolve then start playing
$.when.apply(null, promises).done(function () {
  $('video').each(function(){
    this.play();
  });
});

// 검색창

document.querySelector(".second-icon").onclick = function() {
    document.querySelector(".search-container").style.display = "flex";
};

document.querySelector("#search-close").onclick = function() {
    document.querySelector(".search-container").style.display = "none";
};

// 클릭 외부에서 팝업 닫기
window.onclick = function(event) {
    const popup = document.querySelector(".search-container");
    if (event.target === popup) {
        popup.style.display = "none";
    }
};

