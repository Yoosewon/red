/*
  div사이즈 동적으로 구하기
*/
const menuBtn=document.querySelector('#menu_btn');
const menuBtnHeight=menuBtn.getBoundingClientRect().height;
const $navbar = document.querySelector('#navbar');
document.addEventListener('scroll', ()=>{
  if(window.scrollY>menuBtnHeight) {
    menuBtn.classList.add('menu_btn--dark');
} else{
    menuBtn.classList.remove('menu_btn--dark');
}
});

window.addEventListener('scroll', () =>{
  //console.log(window.scrollY);
  if(window.scrollY > 300) {
    $navbar.style.visibility = 'hidden';
  } else {
    $navbar.style.visibility = 'visible';
  }
});

//menu_btn,menu
// 메뉴바 값을 가져온다
const $menuBtn = document.querySelectorAll('.btn'); //전체를 불러올 수 있음
// const $menu = document.querySelector('.menu');
// 여러 메뉴중에  맨 첫번째 메뉴만 불러올 수 있음(menu_btn) ex) 저장버튼
const $menuList = document.querySelectorAll('.menu_list');


$menuBtn.forEach((menuBtn) => menuBtn.addEventListener('click', () => {
//넣어줄수 있는 이름(변수)이 필요함 foreach : 안에 있는 값을 하나씩 읽어옴

  let filter = menuBtn.dataset.filter;
  //let은 값을 바꿔서 넣을 수 있지만, const 한 지정 값을 바꿀수 없다 

    $menuList.forEach((project)=> {
      if(filter === '전체' || filter === project.dataset.type ){ // 필터값만 가져옴 dataset.type
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
  })
);









// const menuBtn2 = document.querySelector('.btn');
// menuBtn2.addEventListener('click', (event)=>{
    
//     const target = event.target;
//     const link = target.dataset.link;
//     if(link == null) {
//         return;
//     }

//     menuBtn2.classList.remove('open');
//     scrollIntoView(link);
    
// });








const outer = document.querySelector('.outer');
const innerList = document.querySelector('.inner_list');
const inners = document.querySelectorAll('.inner');
let currentIndex = 0; // 현재 슬라이드 화면 인덱스

inners.forEach((inner) => {
  inner.style.width = `${outer.clientWidth}px`; // inner의 width를 모두 outer의 width로 만들기
})

innerList.style.width = `${outer.clientWidth * inners.length}px`; 
// innerList의 width를 inner의 width * inner의 개수로 만들기

/*
  버튼에 이벤트 등록하기
*/
const buttonLeft = document.querySelector('.button_left');
const buttonRight = document.querySelector('.button_right');

buttonLeft.addEventListener('click', () => {
  currentIndex--;
  currentIndex = currentIndex < 0 ? 0 : currentIndex; // index값이 0보다 작아질 경우 0으로 변경
  innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
});

buttonRight.addEventListener('click', () => {
  currentIndex++;
  currentIndex = currentIndex >= inners.length ? inners.length - 1 : currentIndex; // index값이 inner의 총 개수보다 많아질 경우 마지막 인덱스값으로 변경
  innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
});

// const all =document.querySelector("all");
