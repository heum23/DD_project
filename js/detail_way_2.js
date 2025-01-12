const getReady = () => {
    alert("준비중입니다!")
}
//url 이동 함수
const moveUrl = (type) => {
    let url
    
    if(type === 'dd'){
      url = "http://127.0.0.1:5500/main.html"
    }else if(type === "facebook"){
        url = "https://www.facebook.com/?locale=ko_KR"
    }else if(type === "instagram"){
        url = "https://www.instagram.com/"
    }else if(type === "youtube"){
        url = "https://www.youtube.com/?hl=ko&gl=KR&app=desktop"
    }else if(type === 'detail2'){
        url = 'http://127.0.0.1:5500/detail_way_2.html'
    }else if(type ==='detail1'){
        url = 'http://127.0.0.1:5500/detail_way_1.html'
    }
    else{alert("준비중입니다")
        return ;
    }
    window.location.href = url; // URL로 이동
  }
  //제일위로 올라가는 버튼
// 버튼 참조
const scrollToTopBtn = document.getElementById('scrollToTop');

// 스크롤 이벤트 감지
window.addEventListener('scroll', () => {
  // 화면의 중간 높이보다 스크롤이 내려가면 버튼 표시
  if (window.scrollY > window.innerHeight / 2) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// 버튼 클릭 이벤트로 스크롤을 상단으로 이동
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 부드러운 스크롤
  });
});
