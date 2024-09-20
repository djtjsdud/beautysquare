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
});

// 

