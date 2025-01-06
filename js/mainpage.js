let isImageOne = true;  

function changeImg() {
    const img = document.getElementById("firstimg");

    if (isImageOne) {
        img.classList.add('hidden');  // 기존 이미지를 숨김
        setTimeout(() => {
            img.src = "./mainpage_img/main_img_jin/main1coffee1.jpg";  // 2번 이미지로 변경
            img.classList.remove('hidden');  // 새 이미지 표시
        }, 200);
    } else {
        img.classList.add('hidden');  // 기존 이미지를 숨김
        setTimeout(() => {
            img.src = "../mainpage_img/main_img_jin/main1bread.jpg";  // 1번 이미지로 변경
            img.classList.remove('hidden');  // 새 이미지 표시
        }, 200);
    }

    isImageOne = !isImageOne;  // 상태를 반전시켜서 이미지가 번갈아 변경되도록 함
}
