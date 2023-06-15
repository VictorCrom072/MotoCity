let currentSlide = 0;

        const slides = document.querySelectorAll('.carousel-inner img');

        const totalSlides = slides.length;

        function showSlide(slideIndex) {
            if (slideIndex < 0) {
                slideIndex = totalSlides - 1;
            } else if (slideIndex >= totalSlides) {
                slideIndex = 0;
            }

            // Esconde todas as imagens
            for (let i = 0; i < totalSlides; i++) {
                slides[i].style.display = 'none';
            }

            // Exibe a imagem atual
            slides[slideIndex].style.display = 'block';
            currentSlide = slideIndex;
        }

        function changeSlide(n) {
            showSlide(currentSlide + n);
        }

        // Função para mudar as imagens automaticamente
        function autoSlide() {
            changeSlide(1);
        }

        // Inicia o carrossel automático
        setInterval(autoSlide, 3000); // Troca de slide a cada 3 segundos


        // Função para passar automaticamente as imagens do carrossel
        function automaticCarousel() {
            var currentIndex = 0;
            var maxIndex = 2; // Altere o valor para o número total de imagens no carrossel

            setInterval(function () {
                var radioButtons = document.getElementsByName("slider");

                if (currentIndex < maxIndex) {
                    radioButtons[currentIndex + 1].checked = true;
                    currentIndex++;
                } else {
                    radioButtons[0].checked = true;
                    currentIndex = 0;
                }
            }, 5000); // Altere o intervalo de tempo (em milissegundos) para alterar a velocidade de rotação das imagens
        }

        automaticCarousel();