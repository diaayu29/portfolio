const activate = document.querySelectorAll(".nav-link");
const viewMore = document.querySelectorAll(".button-secondary");
const Hide = document.querySelectorAll(".hide");
const Layout = document.querySelector(".layout");
// const switchDark = document.querySelector(".form-check");
// const Body = document.getElementsByTagName("BODY")[0];
// const paragraph = document.getElementsByTagName("p");
// const H3 = document.getElementsByTagName("h3");
// const H5 = document.getElementsByTagName("h5");
// const H1 = document.getElementsByTagName("h1");
// var css = 'a:hover{ background-color: #00ff00 }';
// var style = document.createElement('style');

// if (style.styleSheet) {
//     style.styleSheet.cssText = css;
// } else {
//     style.appendChild(document.createTextNode(css));
// }

// document.getElementsByTagName('head')[0].appendChild(style);


for(let i = 0; i < activate.length; i++) {
  activate[i].addEventListener("click", () => {
    activate[i].classList.add("active")
    for(let j = 0; j < activate.length; j++) {
      activate[j].addEventListener("click", () => {
        activate[i].classList.remove("active")
        activate[j].classList.add("active")
      });
    }
  });
}



for(let i = 0; i < viewMore.length; i++) {
  viewMore[i].addEventListener("click", () => {
    Hide[i].classList.add("active")
    Layout.classList.add("active")
  })
}

for(let i = 0; i < Hide.length; i++) {
  Layout.addEventListener("click" ,() => {
    Hide[i].classList.remove("active")
    Layout.classList.remove("active")
  })
}


// for(let i = 0; i < paragraph.length; i++) {
//   switchDark.addEventListener("click", () => {
//     Body.classList.toggle("dark")
//     console.log(typeof switchDark)
//     paragraph[i].classList.toggle("dark")

//     document.getElementById("coba").classList.toggle("dark")
//     document.querySelector(".button-contact").classList.toggle("dark")
//   });
// }

// for(let i = 0; i < H3.length; i++) {
//   switchDark.addEventListener("click", () => {
//     H3[i].classList.toggle("dark")
//   })
// }
// for(let i = 0; i < H5.length; i++) {
//   switchDark.addEventListener("click", () => {
//     H5[i].classList.toggle("dark")
//   })
// }
// for(let i = 0; i < activate.length; i++) {
//   switchDark.addEventListener("click", () => {
//     activate[i].classList.toggle("dark")
//   })
// }