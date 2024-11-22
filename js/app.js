//UI

//Start Nav
const navbuttons = document.querySelector('.navbuttons');
const navbar = document.querySelector('.navbar');

navbuttons.addEventListener('click', () => {
     // navbuttons.classList.toggle('change');

     if(navbuttons.classList.contains('changes')){
          navbuttons.classList.remove('changes');
     }else{
          navbuttons.classList.add('changes');
     }
});

window.addEventListener('scroll', () => {
     const scrollvalue = window.scrollY;
     // console.log(scrollvalue);
     if(scrollvalue >= 200){
          navbar.classList.add('actives');
     }else{
          navbar.classList.remove('actives');
     }
});

function circularText(txt, radius, classIndex) {
     txt = txt.split(""),
       classIndex = document.getElementsByClassName("circTxt")[classIndex];
   
     var deg = 360 / txt.length,
       origin = 0;
   
     txt.forEach((ea) => {
       ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
       classIndex.innerHTML += ea;
       origin += deg;
     });
   }
   
   circularText("Inspiration from akshay roy ", 90, 0);
//End Nav

//Start Profile
const imgcontainer = document.querySelector('.img-container');
const img = document.querySelector('.img-container img');

window.addEventListener('scroll', () => {
     const scroll = window.scrollY;

     if(scroll >= 500){
          // imgcontainer.style.animation = `imgcontani ${1}s linear`;
          img.style.animation = `imgani ${1}s linear`;
          img.style.opacity = `1`;
     }
});
//End Profile

//Start Portfolio
const lists = document.querySelectorAll('.lists');
const filterlogos = document.querySelectorAll('.filters.logo');
const filter3ds = document.querySelectorAll('.filters.threed');
const filtermotions = document.querySelectorAll('.filters.motion');
const filtersvideos = document.querySelectorAll('.filters.video');

// console.log(lists, filterlogo, filter3d, filtermotion, filtersvideo);

lists.forEach(list => {
     list.addEventListener('click', (e) => {
          let datafilter = list.getAttribute('data-filter');
          // console.log(datafilter);

          if(datafilter === "logo"){
               removeactiveitem();
               e.target.classList.add('click');

               filterlogos.forEach(filterlogo => {
                    filterlogo.style.display = "inline-block";
               })

               filter3ds.forEach(filter3d => {
                    filter3d.style.display = "none";
               })

               filtermotions.forEach(filtermotion => {
                    filtermotion.style.display = "none";
               })

               filtersvideos.forEach(filtersvideo => {
                    filtersvideo.style.display = "none";
               })
          }else if(datafilter === 'threed'){
               removeactiveitem();
               e.target.classList.add('click');

               filterlogos.forEach(filterlogo => {
                    filterlogo.style.display = "none";
               })

               filter3ds.forEach(filter3d => {
                    filter3d.style.display = "inline-block";
               })

               filtermotions.forEach(filtermotion => {
                    filtermotion.style.display = "none";
               })

               filtersvideos.forEach(filtersvideo => {
                    filtersvideo.style.display = "none";
               })
          }else if(datafilter === 'motion'){
               removeactiveitem();
               e.target.classList.add('click');

               filterlogos.forEach(filterlogo => {
                    filterlogo.style.display = "none";
               })

               filter3ds.forEach(filter3d => {
                    filter3d.style.display = "none";
               })

               filtermotions.forEach(filtermotion => {
                    filtermotion.style.display = "inline-block";
               })

               filtersvideos.forEach(filtersvideo => {
                    filtersvideo.style.display = "none";
               })
          }else if(datafilter === 'video'){
               removeactiveitem();
               e.target.classList.add('click');

               filterlogos.forEach(filterlogo => {
                    filterlogo.style.display = "none";
               })

               filter3ds.forEach(filter3d => {
                    filter3d.style.display = "none";
               })

               filtermotions.forEach(filtermotion => {
                    filtermotion.style.display = "none";
               })

               filtersvideos.forEach(filtersvideo => {
                    filtersvideo.style.display = "inline-block";
               })
          }
     });
});

function removeactiveitem(){
     lists.forEach(list=>{
          list.classList.remove('click');
     });
 }
//End Portfolio

//Start Customer / Mission
const testimonialel = document.querySelector('.testimonials');
const userimg = document.querySelector('.carouselimgs');
const username = document.querySelector('.carouseltexts');

// console.log(testimonial, userimg, username);

const testmonials = [
     {
          name: "Mr.Kyaw Gyi",
          photo: "./assets/img/users/user2.jpg",
          text:"Kyaw Gyi Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod similique sed quasi eveniet tenetur adipisci hic eius cumque exercitationem possimus rem, illum ullam rerum error voluptas modi molestiae consequuntur officia!"
     },

     {
          name: "Ms.Mya Mya",
          photo: "./assets/img/users/user1.jpg",
          text:"Mya Mya Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod similique sed quasi eveniet tenetur adipisci hic eius cumque exercitationem possimus rem, illum ullam rerum error voluptas modi molestiae consequuntur officia!"
     },

     {
          name: "Ms.Hla Hla",
          photo: "./assets/img/users/user3.jpg",
          text:"Hla Hla Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod similique sed quasi eveniet tenetur adipisci hic eius cumque exercitationem possimus rem, illum ullam rerum error voluptas modi molestiae consequuntur officia!"
     }
];

let idx = 0;
function updatetestimonial(){
     const {name, photo, text} = testmonials[idx];

     testimonialel.textContent = text;
     userimg.src = photo;
     username.textContent = name;

     idx++;

     if(idx > testmonials.length -1){
          idx =0;
     }
}

updatetestimonial();
setInterval(updatetestimonial, 10000);
//End Customer / Mission


//Start Footer
const showyear = document.getElementById('showyear');
const getfullyear =new Date().getUTCFullYear();

showyear.textContent = getfullyear;
//End Footer
