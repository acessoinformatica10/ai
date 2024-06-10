function abrirMenu() {
    document.getElementById("menu").style.width = "250px";
   
   }

   function fecharMenu() {
    document.getElementById("menu").style.width = "0px"
    
   }

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

   /* var picture = document.getElementsByClassName('picture');
    var imagem = document.getElementsByClassName('imgs');
    var link = document.getElementById('cursos');

    picture.addEventListener('click', function(){
        window.location.href = link.href ;

    });

   */


   