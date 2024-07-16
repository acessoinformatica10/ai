        var finalizar = document.getElementById('finalizar');
        var resCerta = document.querySelectorAll('.resCerta');
        var radios = document.getElementsByClassName("alternativas");
        var cart = document.getElementById('minhaDiv');
        var input = document.getElementById('input');
        var bt = document.getElementById('bt');
        var inputText = document.getElementById('input-text');
        var ok = document.getElementById('ok');
        var areaText = document.getElementById('areatext');
        var x = document.getElementById("x");

        //Abre o cart Modal
        finalizar.addEventListener('click', ()=> {
            cart.style.display = 'inline';

        });
        
        //Verifica o código e finaliza a prova
        bt.addEventListener("click", ()=> {

            if (input.value === '10') {
            resCerta.forEach(resCerta => {
                resCerta.style.color = 'green';
                resCerta.style.border = '1px solid green'
                cart.style.display = 'none';
            })
        }else {
            alert('Código incorreto!');
        }
        })

        //desmarca tudo
        function desmarcarRadios() {
            for (var i = 0; i < radios.length; i++) {
                radios[i].checked = false;

                resCerta.forEach(resCerta => {
                    resCerta.style.color = 'black';
                    resCerta.style.border = 'none'
                })
            }
        }

        ok.addEventListener('click', ()=> {

            var numeros = inputText.value.length;
            if (numeros < 3) {
                alert('Digite seu nome!')
            }else {
                areaText.innerHTML = 'Boa prova!  '  + "''" +  inputText.value + "''" ;
            }
        })

        x.addEventListener("click", ()=> {
            cart.style.display = 'none';
        })