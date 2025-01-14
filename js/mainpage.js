// 첫 로딩 시 옆에서 나타나는 함수
window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".main1, .main2, .mainWrap, .footer"
  );
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add("visible");
    }, index * 200); // 순차적 딜레이 추가
  });
});

//main3 box1 나타나는 함수
document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(".box1");

  const observerOptions = {
    root: null, // 뷰포트를 루트로 설정
    rootMargin: "0px", // 여유 공간 없이 감지
    threshold: 0.4, // 20% 이상 보일 때 트리거
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // 보일 때 'visible' 추가
      } else {
        entry.target.classList.remove("visible"); // 사라질 때 'visible' 제거
      }
    });
  }, observerOptions);

  revealElements.forEach((element) => {
    observer.observe(element); // 모든 요소 관찰
  });
});
document.querySelectorAll(".text-button").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    document.querySelectorAll(".image").forEach((image) => {
      image.classList.remove("visible");
    });
    document.getElementById(targetId).classList.add("visible");
  });
});
// URL 이동 함수
const moveUrl = (type) => {
  let url;

  if (type === "dd") {
    url = "http://127.0.0.1:5500/main.html";
  } else if (type === "facebook") {
    url = "https://www.facebook.com/?locale=ko_KR";
  } else if (type === "instagram") {
    url = "https://www.instagram.com/";
  } else if (type === "youtube") {
    url = "https://www.youtube.com/?hl=ko&gl=KR&app=desktop";
  } else if (type === "way") {
    url = "http://127.0.0.1:5500/detail_way_1.html";
  } else if (type === "about") {
    url = "http://127.0.0.1:5500/detail_3.html";
  } 
  window.location.href = url; // URL로 이동
};
// 이미지 세트를 관리하는 객체
const imageSets = {
  eat: {
    main: "./mainpage_img/main_img_jin/eat2.jpg", // '먹고' 카테고리
    box2: [
      "./mainpage_img/main3_img/bread/sandwich.jpeg",
      "./mainpage_img/main3_img/bread/creambread.jpg",
      "./mainpage_img/main3_img/bread/hamburger.jpg",
    ],
    box3: [
      "./mainpage_img/main3_img/bread/muffin2.jpg",
      "./mainpage_img/main3_img/bread/bagle2.jpg",
      "./mainpage_img/main3_img/bread/pizzabread.png",
    ],
    box4: [
      "./mainpage_img/main3_img/bread/potatobread.png",
      "./mainpage_img/main3_img/bread/saltbread.jpg",
      "./mainpage_img/main3_img/bread/pizza.jpeg",
    ],
  },
  drink: {
    main: "./mainpage_img/main_img_jin/drink2.jpg", // '마시고' 카테고리
    box2: [
      "./mainpage_img/main3_img/drink/tea2.png",
      "./mainpage_img/main3_img/drink/smoodie.jpeg",
    ],
    box3: [
      "./mainpage_img/main3_img/drink/caferatte.jpg",
      "./mainpage_img/main3_img/drink/americano.jpg",
    ],
    box4: [
      "./mainpage_img/main3_img/drink/espresso.jpg",
      "./mainpage_img/main3_img/drink/icetea.jpg",
    ],
  },
  enjoy: {
    main: "./mainpage_img/main_img_jin/enjoy.jpg", // '즐기고' 카테고리
    box2: [
      "./mainpage_img/main3_img/icecream/choco.jpeg",
      "./mainpage_img/main3_img/icecream/mother.png",
    ],
    box3: [
      "./mainpage_img/main3_img/icecream/rainbow.jpeg",
      "./mainpage_img/main3_img/icecream/soothingstar.jpeg",
    ],
    box4: [
      "./mainpage_img/main3_img/icecream/strawberry.jpeg",
      "./mainpage_img/main3_img/icecream/vanilia.png",
    ],
  },
};

let currentSet = "eat"; // 초기값
let currentPage = 1; // 페이지 번호

// main3left 이미지 전환 효과 부드럽게
window.changeimg = (type) => {
  currentSet = type;

  const mainLeftImage = document.querySelector(".main3left");

  // 전환 시간을 짧게 설정 (0.3초)
  mainLeftImage.style.transition = "opacity 2.0s ease";
  mainLeftImage.style.opacity = 0; // 기존 이미지 서서히 사라짐

  // 새로운 이미지가 로드되기 전, 임시 배경 색상으로 흰 여백 최소화
  mainLeftImage.style.backgroundColor = "#f5f5f5"; // 임시 회색 배경 추가

  // 사라짐 효과 완료 후 이미지 변경
  mainLeftImage.addEventListener(
    "transitionend",
    () => {
      // 이미지 소스를 교체
      mainLeftImage.src = imageSets[type].main;

      // 새로운 이미지 로드 이벤트
      mainLeftImage.onload = () => {
        mainLeftImage.style.opacity = 1; // 새 이미지 부드럽게 나타남
        mainLeftImage.style.backgroundColor = "transparent"; // 임시 배경 제거
      };
    },
    { once: true } // 이벤트가 한 번만 실행되도록 설정
  );

  updateBoxImages();
  currentPage = 1;
  updatePageNumber();
};


// box2, box3, box4 이미지 업데이트 및 fadeIn 처리
function updateBoxImages() {
  // 각 박스 이미지들을 업데이트하고 서서히 나타나게 처리
  document.querySelector("#box2").innerHTML = generateImageMarkup(
    imageSets[currentSet].box2
  );
  document.querySelector("#box3").innerHTML = generateImageMarkup(
    imageSets[currentSet].box3
  );
  document.querySelector("#box4").innerHTML = generateImageMarkup(
    imageSets[currentSet].box4
  );

  fadeInImages(); // fadeIn 처리
}

// 이미지들이 서서히 나타나게 하는 함수
function fadeInImages() {
  setTimeout(() => {
    // 모든 이미지 요소들이 서서히 나타나게 설정
    document.querySelectorAll(".bread, .drink, .icecream").forEach((img) => {
      img.style.opacity = 1;
    });
  }, 100); // box 이미지들과 동일한 100ms 딜레이
}

// 이미지 마크업 생성 함수
function generateImageMarkup(images) {
  return images
    .map((image) => {
      return `<img class="${
        image.includes("bread")
          ? "bread"
          : image.includes("drink")
          ? "drink"
          : "icecream"
      }" 
                src="${image}" alt="image" 
                style="opacity: 0; transition: opacity 0.5s ease; width: 100%; height: 100%; object-fit: cover; border-radius: 25px;">`;
    })
    .join("");
}

// 페이지 전환 버튼 처리
window.changeImageSet = (direction) => {
  let currentImages = imageSets[currentSet];

  if (direction === "next") {
    if (currentPage < (currentSet === "eat" ? 3 : 2)) {
      currentPage++;
    } else {
      currentPage = 1;
    }
    currentImages.box2.push(currentImages.box2.shift());
    currentImages.box3.push(currentImages.box3.shift());
    currentImages.box4.push(currentImages.box4.shift());
  } else if (direction === "previous") {
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
  const pageNumberElement = document.querySelector(".detailText");
  if (pageNumberElement) {
    pageNumberElement.textContent = `${String(currentPage).padStart(2, "0")}/0${
      currentSet === "eat" ? 3 : 2
    }`;
  }
}

// 페이지 로딩 후 초기 설정
document.addEventListener("DOMContentLoaded", () => {
  const mainLeftImage = document.querySelector(".main3left");
  if (mainLeftImage) {
    mainLeftImage.style.transition = "opacity 0.8s ease"; // 전환 시간 0.8초로 설정
    mainLeftImage.style.opacity = 1; // 페이지 로딩 시 첫 번째 이미지는 보이게 설정
  }

  updateBoxImages();
  updatePageNumber();
});

// 탑 버튼 (제일 위로)
// 버튼 참조
const scrollToTopBtn = document.getElementById("scrollToTop");

// 스크롤 이벤트 감지
window.addEventListener("scroll", () => {
  // 화면의 중간 높이보다 스크롤이 내려가면 버튼 표시
  if (window.scrollY > window.innerHeight / 2) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// 버튼 클릭 이벤트로 스크롤을 상단으로 이동
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 부드러운 스크롤
  });
});

//sweet alert
const alert = () => {
  Swal.fire({
    title: "준비중입니다!",
    icon: "warning",
    draggable: true,
  });
};

// main4 나타나는 함수 (아래에서 위로)
document.addEventListener("DOMContentLoaded", function () {
  const fadeElement = document.querySelector(".main4");

  if (fadeElement) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const boundingRect = entry.boundingClientRect;
          const viewportHeight = window.innerHeight;

          // 요소의 상단 20%가 뷰포트에 들어왔는지 확인
          if (boundingRect.top <= viewportHeight * 0.8) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    observer.observe(fadeElement);
  }
});

// 텍스트 or 화살표 클릭시 이미지 전환 함수
const backTxt1 = document.querySelector(".backTxt1");
const backTxt2 = document.querySelector(".backTxt2");
const slides = document.querySelectorAll(".slider");
const nextButtons = document.querySelectorAll(".paging_next");
const prevButtons = document.querySelectorAll(".paging_prev");
const pagingNums = document.querySelectorAll(".paging_num span:first-child");
const pagingTotals = document.querySelectorAll(".paging_num span:last-child");

let currentIndex = 1;
let isEventMode = true;
let maxPages = 2;

function updateImages(prefix, max) {
  slides.forEach((slider) => {
    const allImages = slider.querySelectorAll("img");
    allImages.forEach((img) => {
      if (img.classList.contains(`${prefix}_${currentIndex}`)) {
        img.classList.add("active2");
      } else {
        img.classList.remove("active2");
      }
    });
  });

  updatePagingNum(currentIndex, max);
}

function updatePagingNum(num, total) {
  pagingNums.forEach((span) => {
    span.textContent = num.toString().padStart(2, "0");
  });
  pagingTotals.forEach((span) => {
    span.textContent = total.toString().padStart(2, "0");
  });
}

backTxt1.addEventListener("click", () => {
  isEventMode = true;
  currentIndex = 1;
  maxPages = 2;
  updateImages("event", maxPages);
});

backTxt2.addEventListener("click", () => {
  isEventMode = false;
  currentIndex = 1;
  maxPages = 3;
  updateImages("magazine", maxPages);
});

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentIndex = currentIndex < maxPages ? currentIndex + 1 : 1;
    updateImages(isEventMode ? "event" : "magazine", maxPages);
  });
});

prevButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentIndex = currentIndex > 1 ? currentIndex - 1 : maxPages;
    updateImages(isEventMode ? "event" : "magazine", maxPages);
  });
});

// 페이지 로드 시 자동으로 backTxt1 클릭 트리거 (처음 이미지 default)
document.addEventListener("DOMContentLoaded", () => {
  backTxt1.click();
});

// main5 나타나는 함수
// DOM 요소 선택
const main5 = document.querySelector(".main5");

// 화면에 요소가 보이는지 체크하는 함수
function checkScroll() {
  // main5의 상단 위치
  const main5Position = main5.getBoundingClientRect().top;

  // 화면에 보이는지 확인 (10px 정도 여유를 두고)
  if (main5Position <= window.innerHeight - 10) {
    // main5와 내부 요소들이 동시에 오른쪽에서 왼쪽으로 나타나도록 fade_in 클래스 추가
    main5.classList.add("fade_in");
  } else {
    // 사라지면 fade_in 클래스 제거
    main5.classList.remove("fade_in");
  }
}

// 스크롤 이벤트 리스너 추가
window.addEventListener("scroll", checkScroll);

// 페이지 로드 시 초기 상태 확인
checkScroll();
