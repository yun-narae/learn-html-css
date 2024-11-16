### 실습
**Card UI 만들기**[💻 강의site](https://www.youtube.com/watch?v=i72xG6ukehk&list=PLkbzizJk4Ae_ZCinIZzwLf4XDh1NvjmyE&index=7)

### 목표
- [x] 반응형 mo only(360px~1920px)
- [x] 이미지 반응형
- [x] HTML 검사
- [x] CSS 검사

**내 앞길을 막은 것들**
- [x] view 사이즈가 변할때마다 이미지의 width는 컨텐츠 크기에 맞춰지도록
- [x] view 사이즈가 변할때마다 이미지의 수직 중앙 정렬
- [x] img 호버 시 가운데를 지점으로 확대되는 것
```
.img-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        position:absolute;
        top: 50%;
        transform:translateY(-50%);
        z-index: -1;
    }
}
```

**기타 메모**
-  grid관련 코드
```
display: grid;
grid-template-columns: repeat(2, 2fr);
grid-template-rows: repeat(2, 2fr);
```
- gap은 display: inline-block;시 먹히지 않음

👉 **반응형 적용 전**
![before](https://github.com/user-attachments/assets/c3175a10-1a57-4b5e-a042-f7eb1e900ecc)


👉 **반응형 적용 후**
![after](https://github.com/user-attachments/assets/5c5e3682-b287-430f-b036-aab72e9b6cab)