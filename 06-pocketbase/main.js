import { getNode as $ } from "kind-tiger";



const app = $('#app');




const h1 = document.createElement('h1');
h1.textContent = '빛 보다 빠른 Vite ⚡️';




const figure = document.createElement('figure');
figure.innerHTML = `<figcaption>로고</figcaption>`

const fragment = document.createDocumentFragment();

fragment.appendChild(h1);
fragment.appendChild(figure);


app.appendChild(fragment); // 리액트를 하면 fragment를 만나게 된다. 리액트에서는 <> 형태..? 이고 자바스크립트에서는 const fragment = document.createDocumentFragment(); 형태이다!