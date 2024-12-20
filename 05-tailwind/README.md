# tailwind 공부

## 설치하기
```
npm install -D tailwindcss postcss autoprefixer
```
**tailwind.config.js를 생성**
```
npx tailwindcss init
```
**css파일에 Tailwind 지시어 추가**
```
/* Tailwind 기본 지시어 */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
**컴파일러**
dist 폴더가 생성되어야하며 생성되지 않는다면...🥲🥲
👉 캐시삭제하고 서버 다시 돌려보기
```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

**html에 css연결**
```
<link rel="stylesheet" href="/dist/output.css" />
```
**Hello, tailwind**
![스크린샷 2024-12-19 오후 5 29 52](https://github.com/user-attachments/assets/475be9fc-4f7d-46dc-91a4-8ffed2e4a42e)

## 공부한 것
**dist/output.css CSS파일 빌드**
```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```
**border를 줄때**
```
border border-gray-300
// 2개의 속성을 같이 줘야함
```

**hover, active 줄때**
```
hover:bg-slate-300
active:bg-blue-500
```

**여러 css파일 결합하기**
sass할때 처럼 변수를 만들어서 스타일하는게 편했었다.
tailwind 에서도 변수를 만들어보자
내가 정의한 스타일이 맨 하단에 가도록!

**작성**
@layer 사용
```
//custom-utilities
@layer utilities {
    .flex-between {
        display: flex;
        justify-content: space-between;
        gap: var(--gap-value);
    }
        .flex-center {
        display: flex;
        justify-content: center;
        gap: var(--gap-value);
    }

    ...
}
```
**파일 연결**
```
/* input.css */
@import "tailwindcss/base";       /* Tailwind 기본 스타일 */
@import "tailwindcss/components"; /* Tailwind 컴포넌트 스타일 */
@import "./custom.css";               /* 나의 정의 스타일 */
@import "tailwindcss/utilities";  /* Tailwind 유틸리티 스타일 */
@import "./custom-vars.css";         /* 나의 정의 vars 스타일 */
@import "./custom-utilities.css";         /* 나의 정의 유틸리티 스타일 */
```

## 반응형
**breakPoint**
```
screens: {
      sm: { min: "320px", max: "759px" },
      md: { min: "760px", max: "1023px" },
      lg: { min: "1024px" },
    }
```

**사용**
```
    <div class="w-full md:flex-between lg:flex-between"></div>

```

**view**
| min: "320px", max: "759px"       | min: "760px", max: "1023px"         | min: "1024px"         |
|---------------------|-----------------------|-----------------------|
| ![스크린샷 2024-12-20 오후 2 34 30](https://github.com/user-attachments/assets/26842fa7-b973-4700-895c-ba4e9e5fc44f)| ![스크린샷 2024-12-20 오후 2 35 19](https://github.com/user-attachments/assets/8c594571-7c56-4be6-8e7b-6d0c241d7094) | ![스크린샷 2024-12-20 오후 2 35 35](https://github.com/user-attachments/assets/8c2cb4ea-d2e1-4169-b8f2-c4c9a29387c3)|

## 나의 실수
- breakpoint가 안먹히는 오류 해결
👉 src 폴더 안에 index.html이 있었어야한다.

## tailwind 느낀점
추가로 css파일을 만들거라면 sass를 쓰는게 낫지 않나 싶지만 tailwind는 이미 reset같은 것을 제공해주기 때문에 sass보다는 심플하다고 생각한다.
</br>
아직 React에서 사용해보지 않았고, 디테일한 스타일링을 tailwind로 해보지 않았기 때문에 단지 흥미로울 뿐 편한건 아직까지는 모르겠다.
</br>
flex-bettween과 같이 중복되는 코드들이나 내가 주고싶은 특정한 컬러가 있을 경우 사용하면 좋을 것 같다.

**나만의 유튜브 사이트 만들기 개인 포트폴리오 프로젝트에 사용할 예정 </br>화이팅!👍‼️**