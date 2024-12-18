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

// 장바구니, 위시 얼럿창

document.querySelectorAll('.action-menu-button button, .brandevents-action-button button').forEach(button => {
    button.addEventListener('click', function() {
        // 버튼의 텍스트에 따라 다른 메시지를 표시
        const buttonText = this.textContent;
        if (buttonText === 'ADD') {
            alert('장바구니에 담겼습니다.');
        } else if (buttonText === 'WISH') {
            alert('위시리스트에 추가되었습니다.');
        }
    });
});

// 보더 애니메이션

document.addEventListener("DOMContentLoaded", function () {
    const span = document.querySelector('.animate');
  
    // Intersection Observer 설정
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          span.querySelector('::after').style.animation = 'expand 1s ease forwards'; // 애니메이션 추가
          observer.unobserve(entry.target); // 관찰 중지
        }
      });
    });
  
    // span 요소를 관찰
    observer.observe(span);
  });
  

//  맞춤평 페이지

function showOptions(color, button) {
    // 모든 옵션 숨김
    const options = document.querySelectorAll('.options');
    options.forEach(option => {
        option.style.display = 'none';
        option.classList.remove('show');
    });

    // 클릭한 버튼의 옵션 표시
    const selectedOptions = document.getElementById(`${color}-options`);
    if (selectedOptions) {
        const isVisible = selectedOptions.style.display === 'block';
        selectedOptions.style.display = isVisible ? 'none' : 'block';
        selectedOptions.classList.toggle('show', !isVisible);
    }

    // 클릭한 버튼의 배경색을 변경
    button.style.backgroundColor = '#3a3a3a';

    // 다른 버튼의 배경색 초기화
    const buttons = document.querySelectorAll('.color-parent > button');
    buttons.forEach(btn => {
        if (btn !== button) {
            btn.style.backgroundColor = ''; // 원래 색으로 초기화
        }
    });
}

// 버튼 그룹의 단일 선택 유지
document.querySelectorAll('.button-group').forEach(group => {
    group.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const buttons = group.querySelectorAll('button');
            buttons.forEach(btn => {
                btn.style.backgroundColor = ''; // 모든 버튼 초기화
            });
            event.target.style.backgroundColor = '#3a3a3a'; // 클릭한 버튼 색 변경
        }
    });
});

// 각 옵션 버튼에 클릭 이벤트 추가
document.querySelectorAll('.options .option').forEach(option => {
    option.addEventListener('click', function() {
        this.style.backgroundColor = '#3a3a3a';

        // 다른 옵션은 원래 색으로 초기화
        const options = this.parentElement.querySelectorAll('.option');
        options.forEach(opt => {
            if (opt !== this) {
                opt.style.backgroundColor = ''; // 원래 색으로 초기화
            }
        });
    });
});

// 맞춤형 설문조사

/*
===============================================================

Hi! Welcome to my little playground!

My name is Tobias Bogliolo. 'Open source' by default and always 'responsive',
I'm a publicist, visual designer and frontend developer based in Barcelona. 

Here you will find some of my personal experiments. Sometimes usefull,
sometimes simply for fun. You are free to use them for whatever you want 
but I would appreciate an attribution from my work. I hope you enjoy it.

===============================================================
*/
//Global:
var survey = []; //Bidimensional array: [ [1,3], [2,4] ]

//Switcher function:
$(".rb-tab").click(function(){
  //Spot switcher:
  $(this).parent().find(".rb-tab").removeClass("rb-tab-active");
  $(this).addClass("rb-tab-active");
});

//Save data:
$(".trigger").click(function(){
  //Empty array:
  survey = [];
  //Push data:
  for (i=1; i<=$(".rb").length; i++) {
    var rb = "rb" + i;
    var rbValue = parseInt($("#rb-"+i).find(".rb-tab-active").attr("data-value"));
    //Bidimensional array push:
    survey.push([i, rbValue]); //Bidimensional array: [ [1,3], [2,4] ]
  };
  //Debug:
  debug();
});

//Debug:
function debug(){
  var debug = "";
  for (i=0; i<survey.length; i++) {
    debug += "Nº " + survey[i][0] + " = " + survey[i][1] + "\n";
  };
  alert(debug);
};