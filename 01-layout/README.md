### 실습
**Card UI 코드로 만들기(Class와 ID)**[💻 강의site](https://www.youtube.com/watch?v=i72xG6ukehk&list=PLkbzizJk4Ae_ZCinIZzwLf4XDh1NvjmyE&index=7)

### 목표
- 반응형 mo only(360px~1920px)
- 요소들 사이즈(폰트, 이미지)반응형

**어려운 점**
- view 사이즈가 변할때마다 이미지의 width는 고정되는 것
- img 호버 시 가운데를 지점으로 확대되는 것

**기타 메모**
-  grid관련 코드
```
display: grid;
grid-template-columns: repeat(2, 2fr);
grid-template-rows: repeat(2, 2fr);
```
- gap은 display: inline-block;시 먹히지 않음


👉 **반응형 적용 전**
<img width="800" alt="반응형 적용 전" src="https://i.ibb.co/4JftLdx/before.gif">

👉 **반응형 적용 후**