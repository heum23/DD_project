//클릭 시 준비중입니다! 띄우는 함수
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