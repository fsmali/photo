const img = document.querySelector('#nature-img');
const photo_name = document.querySelector('#name');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const photos = [
    { id: 10, names: 'nature10', img: './images/10.jpeg' },
    { id: 7, names: 'nature7', img: './images/7.jpeg' },
  {id: 1,names: 'nature',img: './images/1.jpeg',},
  { id: 2, names: 'nature1', img: './images/2.jpeg' },
  { id: 3, names: 'nature2', img: './images/3.jpeg' },
  { id: 4, names: 'nature4', img: './images/4.jpeg' },
  { id: 5, names: 'nature5', img: './images/5.jpeg' },
  { id: 6, names: 'nature6', img: './images/6.jpeg' },
  { id: 8, names: 'nature8', img: './images/8.jpeg' },
  { id: 9, names: 'nature9', img: './images/9.jpeg' },
  { id: 11, names: 'nature11', img: './images/11.jpeg' },
  { id: 12, names: 'nature12', img: './images/12.jpeg' },
  { id: 13, names: 'nature13', img: './images/13.jpeg' },
  { id: 14, names: 'nature14', img: './images/14.jpeg' },
  { id: 15, names: 'nature15', img: './images/15.jpeg' },
  { id: 16, names: 'nature16', img: './images/16.jpeg' },
];
let currentItem = 0
window.addEventListener('DOMContentLoaded', ()=>{
  images()

})

const images = ()=>{
    const item = photos[currentItem];
    img.src = item.img;
    photo_name.textContent = item.names;
}


next.addEventListener('click', () => {
  currentItem++;
  if (currentItem > photos.length - 1) {
    currentItem = 0;
  }
  images(currentItem);
});

prev.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = photos.length - 1;
  }
  images(currentItem);
});
