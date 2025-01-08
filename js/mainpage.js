// 첫 로딩 시 옆에서 나타나는 함수
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.main1, .main2, .mainWrap, .footer');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 200); // 순차적 딜레이 추가
    });
});
//main3 box1 나타나는 함수
document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.box1');
  
    const observerOptions = {
      root: null, // 뷰포트를 루트로 설정
      rootMargin: '0px', // 여유 공간 없이 감지
      threshold: 0.4, // 20% 이상 보일 때 트리거
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // 보일 때 'visible' 추가
        } else {
          entry.target.classList.remove('visible'); // 사라질 때 'visible' 제거
        }
      });
    }, observerOptions);
  
    revealElements.forEach(element => {
      observer.observe(element); // 모든 요소 관찰
    });
  });
  document.querySelectorAll('.text-button').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      document.querySelectorAll('.image').forEach(image => {
        image.classList.remove('visible');
      });
      document.getElementById(targetId).classList.add('visible');
    });
  });
  
//클릭 시 준비중입니다! 띄우는 함수
const getReady = () => {
    alert("준비중입니다!")
}
//main3 클릭 시 이미지 바뀌는 함수
const eating = document.getElementById("eat");
const drink = document.getElementById("coffee");
const enjoy = document.getElementById("icecream");

window.changeimg = (text) => {
  [eating, drink, enjoy].forEach(img => {
    img.classList.remove("active");  // 모든 이미지에서 'active' 제거
  });

  if (text === 'eat') {
    eating.classList.add("active");  // 선택된 이미지에 'active' 추가
  } else if (text === 'drink') {
    drink.classList.add("active");
  } else if (text === 'enjoy') {
    enjoy.classList.add("active");
  }
};

