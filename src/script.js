const activate = document.querySelectorAll(".nav-link");
const viewMore = document.querySelectorAll(".button-secondary");
const Hide = document.querySelectorAll(".hide");
const Layout = document.querySelector(".layout");
const switchDark = document.querySelector(".formDark");
const Body = document.getElementsByTagName("BODY")[0];

for(let i = 0; i < activate.length; i++) {
  activate[i].addEventListener("click", () => {
    activate[i].classList.add("active")
    activate[0].classList.remove("active")
    for(let j = 0; j < activate.length; j++) {
      activate[j].addEventListener("click", () => {
        activate[i].classList.remove("active")
        activate[j].classList.add("active")
      });
    }
  });
}

const menuToggle = document.getElementsByClassName("fa-bars")[0];
const closeMenuToggle = document.getElementsByClassName("fa-times")[0];
menuToggle.addEventListener("click", () => {
  document.getElementsByClassName("nav")[0].classList.add("active");
  Layout.classList.add("active");
  document.getElementsByClassName("fa-times")[0].classList.add("active");
});

closeMenuToggle.addEventListener("click", () => {
  document.getElementsByClassName("nav")[0].classList.remove("active");
  Layout.classList.remove("active");
  document.getElementsByClassName("fa-times")[0].classList.remove("active");
})

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

switchDark.addEventListener("click", () => {
  if(document.getElementById("checkbox").checked) {
    Body.classList.add("dark")
    for(let i = 0; i < document.getElementsByTagName("p").length; i++) {
      document.getElementsByTagName("p")[i].classList.toggle("dark")
    }
    for(let i = 0; i < document.getElementsByTagName("h1").length; i++) {
      document.getElementsByTagName("h1")[i].classList.toggle("dark")
    }
    for(let i = 0; i < document.getElementsByTagName("h3").length; i++) {
      document.getElementsByTagName("h3")[i].classList.toggle("dark")
    }
    for(let i = 0; i < document.getElementsByTagName("h5").length; i++) {
      document.getElementsByTagName("h5")[i].classList.toggle("dark")
    }
    for(let i = 0; i < document.getElementsByTagName("a").length; i++) {
      document.getElementsByTagName("a")[i].classList.toggle("dark")
    }
    for(let i = 0; i < document.getElementsByClassName("nav-item").length; i++) {
      document.getElementsByClassName("nav-item")[i].classList.toggle("dark")
    }
    for(let i = 0; i < document.getElementsByClassName("button-send").length; i++) {
      document.getElementsByClassName("button-send")[i].classList.toggle("dark")
    }
    for(let i = 0; i < document.getElementsByClassName("nav-logo").length; i++) {
      document.getElementsByClassName("nav-logo")[i].classList.toggle("dark")
    }
  } else {
    Body.classList.remove("dark")
  }
  
})
