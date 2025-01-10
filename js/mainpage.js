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
      "./mainpage_img/main3_img/bread/sandwich.jpeg",
      "./mainpage_img/main3_img/bread/creambread.jpg",
      "./mainpage_img/main3_img/bread/hamburger.jpg"
    ],
    box3: [
      "./mainpage_img/main3_img/bread/muffin2.jpg",
      "./mainpage_img/main3_img/bread/bagle2.jpg",
      "./mainpage_img/main3_img/bread/pizzabread.png"
    ],
    box4: [
      "./mainpage_img/main3_img/bread/potatobread.png",
      "./mainpage_img/main3_img/bread/saltbread.jpg",
      "./mainpage_img/main3_img/bread/pizza.jpeg"
    ]
  },
  drink: {
    main: "./mainpage_img/main_img_jin/main3coffee2.jpeg",  // '마시고' 카테고리
    box2: [
      "./mainpage_img/main3_img/drink/tea2.png",
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

let currentSet = "eat";  // 초기값
let currentPage = 1;     // 페이지 번호

// main3left 이미지 전환 효과 부드럽게
window.changeimg = (type) => {
  currentSet = type;

  const mainLeftImage = document.querySelector('.main3left');
  
  // 기존 이미지 사라짐 효과 (opacity 0)
  mainLeftImage.style.transition = 'opacity 1.0s ease';  // 0.8s로 전환 시간 추가
  mainLeftImage.style.opacity = 0;  // 기존 이미지 opacity 0으로 설정하여 서서히 사라짐

  // 새로운 이미지 소스를 바로 변경, 기존 이미지가 사라지는 동안 이미지 교체
  mainLeftImage.src = imageSets[type].main;  // 이미지 교체
  
  // 새 이미지가 로드된 후 서서히 나타나게 설정
  mainLeftImage.onload = () => {
    // 이미지가 로드된 후, 0.1초 뒤에 opacity 1로 설정하여 부드럽게 나타나도록 함
    setTimeout(() => {
      mainLeftImage.style.opacity = 1;  // 새로운 이미지가 서서히 나타나도록 설정
    }, 100); // 100ms 딜레이로 새로운 이미지가 서서히 나타나도록 설정
  };

  updateBoxImages();
  currentPage = 1;
  updatePageNumber();
};



// box2, box3, box4 이미지 업데이트 및 fadeIn 처리
function updateBoxImages() {
  // 각 박스 이미지들을 업데이트하고 서서히 나타나게 처리
  document.querySelector("#box2").innerHTML = generateImageMarkup(imageSets[currentSet].box2);
  document.querySelector("#box3").innerHTML = generateImageMarkup(imageSets[currentSet].box3);
  document.querySelector("#box4").innerHTML = generateImageMarkup(imageSets[currentSet].box4);

  fadeInImages(); // fadeIn 처리
}

// 이미지들이 서서히 나타나게 하는 함수
function fadeInImages() {
  setTimeout(() => {
    // 모든 이미지 요소들이 서서히 나타나게 설정
    document.querySelectorAll('.bread, .drink, .icecream').forEach(img => {
      img.style.opacity = 1;
    });
  }, 100); // box 이미지들과 동일한 100ms 딜레이
}

// 이미지 마크업 생성 함수
function generateImageMarkup(images) {
  return images.map(image => {
    return `<img class="${image.includes('bread') ? 'bread' : image.includes('drink') ? 'drink' : 'icecream'}" 
                src="${image}" alt="image" 
                style="opacity: 0; transition: opacity 0.5s ease; width: 100%; height: 100%; object-fit: cover; border-radius: 25px;">`;
  }).join('');
}

// 페이지 전환 버튼 처리
window.changeImageSet = (direction) => {
  let currentImages = imageSets[currentSet];
  
  if (direction === 'next') {
    if (currentPage < (currentSet === "eat" ? 3 : 2)) {
      currentPage++;
    } else {
      currentPage = 1;
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

  updateBoxImages();
  updatePageNumber();
};

// 페이지 번호 업데이트
function updatePageNumber() {
  const pageNumberElement = document.querySelector('.detailText');
  if (pageNumberElement) {
    pageNumberElement.textContent = `${String(currentPage).padStart(2, '0')}/0${currentSet === "eat" ? 3 : 2}`;
  }
}

// 페이지 로딩 후 초기 설정
document.addEventListener("DOMContentLoaded", () => {
  const mainLeftImage = document.querySelector('.main3left');
  if (mainLeftImage) {
    mainLeftImage.style.transition = 'opacity 0.8s ease';  // 전환 시간 0.8초로 설정
    mainLeftImage.style.opacity = 1;  // 페이지 로딩 시 첫 번째 이미지는 보이게 설정
  }

  updateBoxImages();
  updatePageNumber();
});

