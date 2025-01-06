let isImageOne = true;  // 이미지 상태를 추적하는 변수

function changeImg() {
    const img = document.getElementById("firstimg");

    if (isImageOne) {
        img.classList.add('hidden');  // 기존 이미지를 숨김
        setTimeout(() => {
            img.src = "./mainpage_img/mainimg.jin/main1coffee1.jpg";  // 2번 이미지로 변경
            img.classList.remove('hidden');  // 새 이미지 표시
        }, 200);
    } else {
        img.classList.add('hidden');  // 기존 이미지를 숨김
        setTimeout(() => {
            img.src = "./mainpage_img/mainimg.jin/main1bread.jpg";  // 1번 이미지로 변경
            img.classList.remove('hidden');  // 새 이미지 표시
        }, 200);
    }

    isImageOne = !isImageOne;  // 상태를 반전시켜서 이미지가 번갈아 변경되도록 함
}
