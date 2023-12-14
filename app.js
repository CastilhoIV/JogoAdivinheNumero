
let dificuldade;
let numeroSecreto;
console.log(numeroSecreto)
let chute;
let tentativas = 1;



    //comecando testes
    let facil = document.getElementById("facil");
    let medio = document.getElementById("medio")
    let dificil = document.getElementById("dificil")

    facil.addEventListener("click", function() {
        dificuldade = 10;
        numeroSecreto = parseInt(Math.random() * dificuldade +1 );
        console.log(numeroSecreto)
        while (chute != numeroSecreto){
             chute = prompt(`chute um numero de 1 a ${dificuldade}`);
            if (chute == numeroSecreto){
                break;
             
            }
            else{
                if (numeroSecreto<chute){
                    alert('o numero é menor que '+ chute)
        
                   }
                   if (numeroSecreto > chute)
                   alert('o numero é maior que '+ chute)
               }
               tentativas++
        }
        let tentaviaPalavra = tentativas>1 ? 'tentativas' : 'tentativa';

    alert('voce acertou com  '+ tentativas +'  ' +tentaviaPalavra)

        tentativas = 1
    } );

    medio.addEventListener("click", function(){
        dificuldade = 100;
        numeroSecreto = parseInt(Math.random() * dificuldade +1 );
        console.log(numeroSecreto)

        while (chute != numeroSecreto){
            chute = prompt(`chute um numero de 1 a ${dificuldade}`);
           if (chute == numeroSecreto){
               break;
            
           }
           else{
               if (numeroSecreto<chute){
                   alert('o numero é menor que '+ chute)
       
                  }
                  if (numeroSecreto > chute)
                  alert('o numero é maior que '+ chute)
              }
              tentativas++
       }
       let tentaviaPalavra = tentativas>1 ? 'tentativas' : 'tentativa';

   alert('voce acertou com  '+ tentativas +'  ' +tentaviaPalavra)

       tentativas = 1

    })

    dificil.addEventListener("click", function(){
        dificuldade = 1000;
        numeroSecreto = parseInt(Math.random() * dificuldade +1 );
        console.log(numeroSecreto)

        while (chute != numeroSecreto){
            chute = prompt(`chute um numero de 1 a ${dificuldade}`);
           if (chute == numeroSecreto){
               break;
            
           }
           else{
               if (numeroSecreto<chute){
                   alert('o numero é menor que '+ chute)
       
                  }
                  if (numeroSecreto > chute)
                  alert('o numero é maior que '+ chute)
              }
              tentativas++
       }
       let tentaviaPalavra = tentativas>1 ? 'tentativas' : 'tentativa';

   alert('voce acertou com  '+ tentativas +'  ' +tentaviaPalavra)

       tentativas = 1

    })

