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
// const eating = document.getElementById("eat");
// const drink = document.getElementById("coffee");
// const enjoy = document.getElementById("icecream");

// window.changeimg = (text) => {
//   [eating, drink, enjoy].forEach(img => {
//     img.classList.remove("active");  // 모든 이미지에서 'active' 제거
//   });

//   if (text === 'eat') {
//     eating.classList.add("active");  // 선택된 이미지에 'active' 추가
//   } else if (text === 'drink') {
//     drink.classList.add("active");
//   } else if (text === 'enjoy') {
//     enjoy.classList.add("active");
//   }
// };
// URL 이동 함수
const moveUrl = (type) => {
  let url
  
  if(type === 'dd'){
    url = "http://127.0.0.1:5500/main.html"
  }else if(type === "facebook"){
      url = "https://www.facebook.com/?locale=ko_KR"
  }else if(type === 'instagram'){
      url = "https://www.instagram.com/"
  }else if(type === 'youtube'){
      url = "https://www.youtube.com/?hl=ko&gl=KR&app=desktop"
  }else if(type ==='way'){
    url = 'http://127.0.0.1:5500/detail.html'
  }else{alert("준비중입니다")
      return ;
  }
  window.location.href = url; // URL로 이동
}

// 이미지 세트를 관리하는 객체
const imageSets = {
  eat: {
    main: "./mainpage_img/main_img_jin/main3Eat.jpg",  // '먹고' 카테고리
    box2: [
      "./mainpage_img/main3_img/bread/bagle.jpg",
      "./mainpage_img/main3_img/bread/creambread.jpg",
      "./mainpage_img/main3_img/bread/hamburger.jpg"
    ],
    box3: [
      "./mainpage_img/main3_img/bread/muffin.jpg",
      "./mainpage_img/main3_img/bread/pizza.jpeg",
      "./mainpage_img/main3_img/bread/pizzabread.png"
    ],
    box4: [
      "./mainpage_img/main3_img/bread/potatobread.png",
      "./mainpage_img/main3_img/bread/saltbread.jpg",
      "./mainpage_img/main3_img/bread/sandwich.jpeg"
    ]
  },
  drink: {
    main: "./mainpage_img/main_img_jin/main3coffee2.jpeg",  // '마시고' 카테고리
    box2: [
      "./mainpage_img/main3_img/drink/tea.jpg",
      "./mainpage_img/main3_img/drink/smoodie.jpeg"
    ],
    box3: [
      "./mainpage_img/main3_img/drink/caferatte.jpg",
      "./mainpage_img/main3_img/drink/americano.jpg"
    ],
    box4: [
      "./mainpage_img/main3_img/drink/espresso.jpg",
      "./mainpage_img/main3_img/drink/icetea.jpg"
    ]
  },
  enjoy: {
    main: "./mainpage_img/main_img_jin/main3icecream2.jpg",  // '즐기고' 카테고리
    box2: [
      "./mainpage_img/main3_img/icecream/choco.jpeg",
      "./mainpage_img/main3_img/icecream/mother.png"
    ],
    box3: [
      "./mainpage_img/main3_img/icecream/rainbow.jpeg",
      "./mainpage_img/main3_img/icecream/soothingstar.jpeg"
    ],
    box4: [
      "./mainpage_img/main3_img/icecream/strawberry.jpeg",
      "./mainpage_img/main3_img/icecream/vanilia.png"
    ]
  }
};

// 선택된 이미지 세트를 기억할 변수
let currentSet = "eat"; // 초기값은 'eat'
let currentPage = 1;    // 초기 페이지는 1

// changeimg 함수 수정
window.changeimg = (type) => {
  currentSet = type; // 선택된 카테고리

  // mainLeft 이미지 변경
  const mainLeftImage = document.querySelectorAll('.main3left');
  for (let i = 0; i < mainLeftImage.length; i++) {
    mainLeftImage[i].classList.remove('active');
  }

  const newMainImage = document.querySelector('.main3left:nth-child(1)');
  newMainImage.classList.add('active');
  newMainImage.src = imageSets[type].main;

  // box2, box3, box4 이미지 변경
  updateBoxImages();

  // 페이지 번호 업데이트
  currentPage = 1;  // 글자 클릭 시 숫자를 1로 설정
  updatePageNumber();
};

// 페이지 번호 업데이트 함수
function updatePageNumber() {
  const pageNumberElement = document.querySelector('.detailText');
  if (pageNumberElement) {
    pageNumberElement.textContent = `${String(currentPage).padStart(2, '0')}/0${currentSet === "eat" ? 3 : 2}`;
  }
}

function updateBoxImages() {
  // box2, box3, box4에 이미지 세트 업데이트
  document.querySelector("#box2").innerHTML = generateImageMarkup(imageSets[currentSet].box2);
  document.querySelector("#box3").innerHTML = generateImageMarkup(imageSets[currentSet].box3);
  document.querySelector("#box4").innerHTML = generateImageMarkup(imageSets[currentSet].box4);

  // 첫 로딩 시 bread 클래스가 포함된 이미지 중 첫 번째 이미지를 띄움
  setTimeout(() => {
    document.querySelectorAll('.bread').forEach(img => {
      img.style.opacity = 1; // 이미지의 opacity를 1로 설정
    });
  }, 100);
}

// 이미지 마크업 생성 함수
function generateImageMarkup(images) {
  return images.map(image => {
    return `<img class="${image.includes('bread') ? 'bread' : image.includes('drink') ? 'drink' : 'icecream'}" 
                src="${image}" alt="image" 
                style="opacity: 0; transition: opacity 0.5s ease; width: 100%; height: 100%; object-fit: cover; border-radius: 25px;">`;
  }).join('');
}

// next와 previous 버튼 클릭시 호출되는 함수
window.changeImageSet = (direction) => {
  let currentImages = imageSets[currentSet];
  let box2 = document.querySelector("#box2");
  let box3 = document.querySelector("#box3");
  let box4 = document.querySelector("#box4");

  // 페이지 번호 업데이트
  if (direction === 'next') {
    if (currentPage < (currentSet === "eat" ? 3 : 2)) {
      currentPage++;
    } else {
      currentPage = 1;  // 다음이 없으면 첫 페이지로 돌아가도록 설정
    }
    currentImages.box2.push(currentImages.box2.shift());
    currentImages.box3.push(currentImages.box3.shift());
    currentImages.box4.push(currentImages.box4.shift());
  } else if (direction === 'previous') {
    if (currentPage > 1) {
      currentPage--;
    }
    currentImages.box2.unshift(currentImages.box2.pop());
    currentImages.box3.unshift(currentImages.box3.pop());
    currentImages.box4.unshift(currentImages.box4.pop());
  }

  // 이미지 세트 업데이트
  updateBoxImages();

  // 페이지 번호 업데이트
  updatePageNumber();
};

// 첫 로딩 시 mainLeft 이미지에 active 클래스 추가 및 box2, box3, box4 첫 번째 이미지 띄우기
document.addEventListener("DOMContentLoaded", () => {
  const mainLeftImage = document.querySelector('.main3left');
  if (mainLeftImage) {
    mainLeftImage.classList.add('active');
  }

  // box2, box3, box4의 첫 번째 이미지 띄우기
  updateBoxImages();
  updatePageNumber();  // 첫 로딩 시 페이지 번호 초기화
});
