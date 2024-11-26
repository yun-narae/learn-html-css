// 정적 vs 동적

    // 정적 변경의 장점
        // 변경할 필요가 없는 고정된 디자인에 적합합니다.
        // 추가적인 JavaScript 로직이 필요하지 않아 성능 부담이 적습니다.
    // 정적 변경의 단점
        // 상태에 따라 동적으로 변경해야 하는 경우 비효율적입니다.
        // 인터랙션(예: 버튼 클릭)이나 동적 UI 요구사항을 처리하지 못합니다.

    // 동적 변경의 장점
        // 사용자 인터랙션(클릭, 스크롤 등)에 따라 상태를 반영할 수 있습니다.
        // UI 요소를 동적으로 업데이트하여 사용자 경험을 풍부하게 합니다.
        // 재사용성과 유연성이 높아 여러 상태를 쉽게 관리할 수 있습니다.
    // 동적 변경의 단점
        // JavaScript 코드를 추가로 작성해야 하므로 코드가 복잡해질 수 있습니다.
        // 잘못된 구현 시 성능 문제가 발생할 가능성이 있습니다.
        // JavaScript가 비활성화된 환경에서는 작동하지 않을 수 있습니다.

// 👉 상태에 따라 달라져야 하기 때문에 동적 변경으로 진행하였습니다.

const btnNav = document.querySelector('#btnNav');
const navigation = document.querySelector('.navigation');
const navIcon = document.querySelector('.icon_nav_open');

btnNav.addEventListener('click', () => {
    // 동적 변경
    if (navigation.classList.toggle('active')) {
        navigation.style.display = 'flex';
    } else {
        navigation.style.display = 'none';
    }

    if (navigation.classList.contains('active')) {
        navIcon.style.maskImage = 'url("../assets/icon/header/icon_nav_close.svg")';
        navIcon.style.webkitMaskImage = 'url("../assets/icon/header/icon_nav_close.svg")';
    } else {
        navIcon.style.maskImage = 'url("../assets/icon/header/icon_nav_open.svg")';
        navIcon.style.webkitMaskImage = 'url("../assets/icon/header/icon_nav_open.svg")';
    }
});


// 정적 변경 예시
    // btnNav.addEventListener('click', () => {
        // navIcon.classList.toggle('active');
    // }
        // CSS에서는 미리 정의된 스타일로 mask-image를 고정적으로 설정하는 방식
        // .header .btn-box__nav-btn .icon_nav_open {
        //     mask-image: url("../assets/icon/header/icon_nav_open.svg");
        //     -webkit-mask-image: url("../assets/icon/header/icon_nav_open.svg");
        // }

        // .header .btn-box__nav-btn .icon_nav_open.active {
        //     mask-image: url("../assets/icon/header/icon_nav_close.svg");
        //     -webkit-mask-image: url("../assets/icon/header/icon_nav_close.svg");
        // }