// main 상단 category_item 클릭 시 색상 변화하는 함수
document.querySelectorAll(".category_item").forEach((item) => {
  item.addEventListener("click", function () {
    console.log("클릭됨:", item); // 클릭한 항목 확인
    // 모든 category_item에서 active 클래스를 제거
    document
      .querySelectorAll(".category_item")
      .forEach((i) => i.classList.remove("active"));

    // 클릭된 item에 active 클래스 추가
    item.classList.add("active");
  });
});

// main 하단 네비 바에 따른 스크롤 위치 지정
// 스크롤 이벤트로 각 섹션의 위치에 따라 강조하는 기능 (tab1 적용)
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  const navItems = document.querySelectorAll(
    ".nav_list .chap1, .nav_list .chap2, .nav_list .chap3, .nav_list .chap4, .nav_list .chap5"
  );

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      // 해당 섹션이 화면 중간에 있을 때
      navItems.forEach((item) => item.classList.remove("active")); // 모든 'active' 제거
      navItems[index].classList.add("active"); // 해당 nav item 강조
    }
  });
});

// 클릭 시 해당 섹션으로 스크롤 이동 (tab1 적용)
document
  .querySelectorAll(
    ".nav_list .chap1, .nav_list .chap2, .nav_list .chap3, .nav_list .chap4, .nav_list .chap5"
  )
  .forEach((item, index) => {
    item.addEventListener("click", () => {
      const targetSection = document.querySelector(`#tab1_sec${index + 1}`);
      window.scrollTo({
        top: targetSection.offsetTop + 50, // 탭이 위에 가려지지 않도록 조금 올려서 스크롤
        behavior: "smooth",
      });
    });
  });

// 스크롤 이벤트로 각 섹션의 위치에 따라 강조하는 기능 (tab2 적용)
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("#tab2 .section");
  const navItems = document.querySelectorAll(
    "#tab2 .nav_list .chap1, #tab2 .nav_list .chap2, #tab2 .nav_list .chap3, #tab2 .nav_list .chap4, #tab2 .nav_list .chap5"
  );

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      // 해당 섹션이 화면 중간에 있을 때
      navItems.forEach((item) => item.classList.remove("active")); // 모든 'active' 제거
      navItems[index].classList.add("active"); // 해당 nav item 강조
    }
  });
});

// 클릭 시 해당 섹션으로 스크롤 이동 (tab2 적용)
document
  .querySelectorAll(
    "#tab2 .nav_list .chap1, #tab2 .nav_list .chap2, #tab2 .nav_list .chap3, #tab2 .nav_list .chap4, #tab2 .nav_list .chap5"
  )
  .forEach((item, index) => {
    item.addEventListener("click", () => {
      const targetSection = document.querySelector(
        `#tab2_sec${index + 1}` // tab2의 섹션에 맞춰서 ID 설정
      );
      window.scrollTo({
        top: targetSection.offsetTop + 50, // 탭이 위에 가려지지 않도록 조금 올려서 스크롤
        behavior: "smooth",
      });
    });
  });

// 각 탭 제목 클릭 시 전환 기능만 처리
document.querySelectorAll(".tab_title").forEach((tab) => {
  tab.addEventListener("click", () => {
    // 탭을 전환
    if (tab.id === "ep1") {
      // tab1 보이고 tab2 숨기기
      document.getElementById("tab1").style.display = "flex";
      document.getElementById("tab2").style.display = "none";
      document.getElementById("dropdownMenuLink").textContent = "ep.1 토종효모";
      document.getElementById("ep1").classList.add("active");
      document.getElementById("ep2").classList.remove("active");
    }
    // 'ep2'를 클릭한 경우
    else if (tab.id === "ep2") {
      // tab2 보이고 tab1 숨기기
      document.getElementById("tab2").style.display = "flex";
      document.getElementById("tab1").style.display = "none";
      document.getElementById("dropdownMenuLink").textContent = "ep.2 상미종";
      document.getElementById("ep1").classList.remove("active");
      document.getElementById("ep2").classList.add("active");
    }
  });
});

// 드롭다운 클릭 시 해당 탭으로 전환
function showTab(tab) {
  if (tab === "ep1") {
    document.getElementById("tab1").style.display = "flex";
    document.getElementById("tab2").style.display = "none";
    document.getElementById("dropdownMenuLink").textContent = "ep.1 토종효모";
    document.getElementById("ep1").classList.add("active");
    document.getElementById("ep2").classList.remove("active");
  } else if (tab === "ep2") {
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab2").style.display = "flex";
    document.getElementById("dropdownMenuLink").textContent = "ep.2 상미종";
    document.getElementById("ep1").classList.remove("active");
    document.getElementById("ep2").classList.add("active");
  }
}

// tab_title 클릭 시 색상 변화하는 함수
document.querySelectorAll(".tab_title").forEach((item) => {
  item.addEventListener("click", function () {
    console.log("클릭됨:", item); // 클릭한 항목 확인
    // 모든 tab_title에서 active 클래스를 제거
    document
      .querySelectorAll(".tab_title")
      .forEach((i) => i.classList.remove("active"));

    // 클릭된 item에 active 클래스 추가
    item.classList.add("active");
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
  } else {
    alert("준비중입니다");
    return;
  }
  window.location.href = url; // URL로 이동
};

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

//sweet alert (alert 창 디자인)
const alert = () => {
  Swal.fire({
    title: "준비중입니다!",
    icon: "warning",
    draggable: true,
  });
};
