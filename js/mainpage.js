window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.main1, .main2, .mainWrap, .footer');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 200); // 순차적 딜레이 추가
    });
});
//클릭 시 준비중입니다! 띄우는 함수
const getReady = () => {
    alert("준비중입니다!")
}