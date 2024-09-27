function abrirMenu() {
    document.getElementById("menu").style.width = "200px";
    document.getElementById("menu").style.height = "100%"
   
   }

   function fecharMenu() {
    document.getElementById("menu").style.width = "0px"
    document.getElementById("menu").style.height = "0px"
    
   }

   document.addEventListener("scroll", function() {
    const scrollLeft = document.querySelectorAll(".scroll-left");
    const scrollRight = document.querySelectorAll(".scroll-right");
    const scrollRightMenos = document.querySelectorAll(".scroll-rightM");
    const scrollOpacity = document.querySelectorAll(".scroll-opacity");
    const scrollTop = document.querySelectorAll(".scroll-top");

    scrollLeft.forEach(scrollLeft => {

        const boxPosition = scrollLeft.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (boxPosition < windowHeight) {
            scrollLeft.classList.add("scrollLeft");
        }else {
            scrollLeft.classList.remove("scrollLeft");
  }
    })

    scrollRight.forEach(scrollRight => {

        const boxPosition = scrollRight.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (boxPosition < windowHeight) {
            scrollRight.classList.add("scrollRight");
        }else {
            scrollRight.classList.remove("scrollRight");
  }
    })

    scrollTop.forEach(scrollTop => {

        const boxPosition = scrollTop.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (boxPosition < windowHeight) {
            scrollTop.classList.add("scrollTop");
        }else {
            scrollTop.classList.remove("scrollTop");
  }
    })
})

   /*

   //visivel o conteudo

   window.addEventListener('scroll', function() {
    var scrollPosition = this.window.scrollY + this.window.innerHeight * 0.8;

    this.document.querySelectorAll(".secao").forEach(function(element) {
        if (scrollPosition > element.offsetTop) {
            element.classList.add("secaovisivel");
        }
    });

   });

   //visivel o box Rede Sociais

   window.addEventListener('scroll', function() {
    var scrollPosition = this.window.scrollY + this.window.innerHeight * 0.8;

    this.document.querySelectorAll(".boxRS").forEach(function(element) {
        if (scrollPosition > element.offsetTop) {
            element.classList.add("boxRSvisivel");
        }
    });

   });


   //links nas imgs

    var picture = document.getElementsByClassName('picture');
    var imagem = document.getElementsByClassName('imgs');
    var link = document.getElementById('cursos');

    picture.addEventListener('click', function(){
        window.location.href = link.href ;

    });

   */


   