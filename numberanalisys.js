const buttonAdd = document.querySelector('#button_add');
const buttonEnd = document.querySelector('#button_end');
var resultsContainer = document.querySelector('.show_results');
var list = document.querySelector('#list');
var listedNumbers = [];

buttonAdd.addEventListener('click', addNumber);
buttonEnd.addEventListener('click', showResults);

function intervalChecker(n){
    if (n>=1 && n<=100){
        return true;
    }else {
        return false;
    }
}

function addNumber(n){
    resultsContainer.innerHTML = "";
    let inputNumber = document.querySelector('#number');
    var n = Number(inputNumber.value);
    let item = document.createElement('option');
    item.setAttribute('id', 'options')
    
    if (inputNumber.value.length==0){
        
        alert('Por favor digite um número!')
        
    }else if(listedNumbers.indexOf(n) == -1 && intervalChecker(n)==true){
            listedNumbers.push(n);
            item.textContent = `O valor ${n} foi adicionado.`;
            list.appendChild(item);
            console.log(listedNumbers);
            
        
        }else if(listedNumbers.indexOf(n) != -1){
            alert('Esse valor já se encontra na lista!')
        }else{
            alert('Este não é um valor válido! Digite um número entre 1 e 100!')
        }
        inputNumber.value= '';
        inputNumber.focus();
    }


    function sumNumbers(){
        var sum = 0;
        for(let i in listedNumbers){
        sum += listedNumbers[i];
        }
        return sum;
    }


function showResults() {

    if (listedNumbers.length==0){
        alert('Adicione valores antes de continuar')
    }else{

        let total = listedNumbers.length;
        let minorNumber = Math.min(...listedNumbers) ;
        let greaterNumber = Math.max(...listedNumbers) ; 

        resultsContainer.innerHTML = "";
        resultsContainer.innerHTML += `<p>Temos ${total} números cadastrados;</p>`
        resultsContainer.innerHTML += `<p>O maior número é ${greaterNumber};</p>`
        resultsContainer.innerHTML += `<p>O menor número é ${minorNumber};</p>`
        resultsContainer.innerHTML += `<p>A soma dos valores é ${sumNumbers()};</p>`
        resultsContainer.innerHTML += `<p>A média dos valores é ${(sumNumbers())/listedNumbers.length};</p>`


    }
    
    
    
}


