openVideoBtn = document.querySelector('#open_video_button')
videoWindow = document.querySelector('#video_trailer_container')
closeicon = document.querySelector('#closeVideo')

openVideoBtn.addEventListener('click', function foo() {
  videoWindow.classList.toggle("active")
})

closeicon.addEventListener('click', function boo() {
  videoWindow.classList.remove(("active"))
})

// let offset = 0;
const sliderLine = document.querySelector('.slider');
const next = document.querySelector('.right-arrow')

// // document.querySelector('.right - arrow').addEventListener('click', function foo() {
// //   offset = offset + 597;
// //   sliderLine.style.backgroundColor = 'red' //offset + 'px';
// // })
// next.addEventListener('click', function foo() {
//   offset = offset + 597;
//   sliderLine.style.top = -offset + 'px' //offset + 'px';
// })

// let images = {
// 'url()'
// }

//next
