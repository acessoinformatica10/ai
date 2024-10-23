const administracao = document.getElementById("admin")
        const btnTabela = document.querySelectorAll(".btn-tabela");
        const fechar = document.querySelectorAll(".x");
        
    // Mostra os carts na tela
        btnTabela.forEach(btnTabela => {
            btnTabela.addEventListener("click", () => {

                let navegacao = document.getElementById('nav');
                navegacao.style.display = "none"


                let targetButton = btnTabela.getAttribute("data-target")
                if(targetButton == "adm") {
                    let administracao = document.getElementById('adm')
                    administracao.style.display = 'block'
                    administracao.setAttribute('class', 'tabela')

                    administracao.addEventListener('click', () => {
                        administracao.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "desApps") {
                    let desenvolApps = document.getElementById('desApps')
                    desenvolApps.style.display = 'block'
                    desenvolApps.setAttribute('class', 'tabela')

                    desenvolApps.addEventListener('click', () => {
                        desenvolApps.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })
                    
                }else if (targetButton == "desGames") {
                    let desenvolGames = document.getElementById('desGames')
                    desenvolGames.style.display = 'block'
                    desenvolGames.setAttribute('class', 'tabela')

                    desenvolGames.addEventListener('click', () => {
                        desenvolGames.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "desSistemas") {
                    let desenvolSistemas = document.getElementById('desSistemas')
                    desenvolSistemas.style.display = 'block'
                    desenvolSistemas.setAttribute('class', 'tabela')

                    desenvolSistemas.addEventListener('click', () => {
                        desenvolSistemas.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "desWeb") {
                    let desenvolWeb = document.getElementById('desWeb')
                    desenvolWeb.style.display = 'block'
                    desenvolWeb.setAttribute('class', 'tabela')

                    desenvolWeb.addEventListener('click', () => {
                        desenvolWeb.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "design") {
                    let designer = document.getElementById('design')
                    designer.style.display = 'block'
                    designer.setAttribute('class', 'tabela')

                    designer.addEventListener('click', () => {
                        designer.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "evoProfis") {
                    let evolucaoProfiss = document.getElementById('evoProfis')
                    evolucaoProfiss.style.display = 'block'
                    evolucaoProfiss.setAttribute('class', 'tabela')

                    evolucaoProfiss.addEventListener('click', () => {
                        evolucaoProfiss.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "workSpace") {
                    let workSpace = document.getElementById('workSpace')
                    workSpace.style.display = 'block'
                    workSpace.setAttribute('class', 'tabela')

                    workSpace.addEventListener('click', () => {
                        workSpace.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "inforEssencial") {
                    let inforEssencial = document.getElementById('inforEssencial')
                    inforEssencial.style.display = 'block'
                    inforEssencial.setAttribute('class', 'tabela')

                    inforEssencial.addEventListener('click', () => {
                        inforEssencial.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "opeCaixa") {
                    let opeCaixa = document.getElementById('opeCaixa')
                    opeCaixa.style.display = 'block'
                    opeCaixa.setAttribute('class', 'tabela')

                    opeCaixa.addEventListener('click', () => {
                        opeCaixa.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "projDesenhos") {
                    let projDesenhos = document.getElementById('projDesenhos')
                    projDesenhos.style.display = 'block'
                    projDesenhos.setAttribute('class', 'tabela')

                    projDesenhos.addEventListener('click', () => {
                        projDesenhos.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "redesInfraes") {
                    let redesInfraes = document.getElementById('redesInfraes')
                    redesInfraes.style.display = 'block'
                    redesInfraes.setAttribute('class', 'tabela')

                    redesInfraes.addEventListener('click', () => {
                        redesInfraes.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "tecContabeis") {
                    let tecContabeis = document.getElementById('tecContabeis')
                    tecContabeis.style.display = 'block'
                    tecContabeis.setAttribute('class', 'tabela')

                    tecContabeis.addEventListener('click', () => {
                        tecContabeis.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "tecVendas") {
                    let tecVendas = document.getElementById('tecVendas')
                    tecVendas.style.display = 'block'
                    tecVendas.setAttribute('class', 'tabela')

                    tecVendas.addEventListener('click', () => {
                        tecVendas.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "tecVideos") {
                    let tecVideos = document.getElementById('tecVideos')
                    tecVideos.style.display = 'block'
                    tecVideos.setAttribute('class', 'tabela')

                    tecVideos.addEventListener('click', () => {
                        tecVideos.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "tecnoFundamental") {
                    let tecnologiaFundamental = document.getElementById('tecnoFundamental')
                    tecnologiaFundamental.style.display = 'block'
                    tecnologiaFundamental.setAttribute('class', 'tabela')

                    tecnologiaFundamental.addEventListener('click', () => {
                        tecnologiaFundamental.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "youtube") {
                    let youtube = document.getElementById('youtube')
                    youtube.style.display = 'block'
                    youtube.setAttribute('class', 'tabela')

                    youtube.addEventListener('click', () => {
                        youtube.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "empreended") {
                    let empreendedorismo = document.getElementById('empreended')
                    empreendedorismo.style.display = 'block'
                    empreendedorismo.setAttribute('class', 'tabela')

                    empreendedorismo.addEventListener('click', () => {
                        empreendedorismo.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "marketing") {
                    let marketing = document.getElementById('marketing')
                    marketing.style.display = 'block'
                    marketing.setAttribute('class', 'tabela')

                    marketing.addEventListener('click', () => {
                        marketing.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "recHumanos") {
                    let recHumanos = document.getElementById('recHumanos')
                    recHumanos.style.display = 'block'
                    recHumanos.setAttribute('class', 'tabela')

                    recHumanos.addEventListener('click', () => {
                        recHumanos.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })

                }else if (targetButton == "hotelariaTurismo") {
                    let hotelariaTurismo = document.getElementById('hotelariaTurismo') 
                    hotelariaTurismo.style.display = 'block'             
                    hotelariaTurismo.setAttribute('class', 'tabela')

                    hotelariaTurismo.addEventListener('click', () => {
                        hotelariaTurismo.style.display = 'none'
                        navegacao.style.display = 'flex'
                    })
                }
                
            })
        })



        document.addEventListener("scroll", function () {
            const scrollLeft = document.querySelectorAll(".scroll-left");
            const scrollRight = document.querySelectorAll(".scroll-right");

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
        })