let resultContainer = document.querySelector('.result');
let yourButton = document.querySelector('button');

function getPulls(e) {
    e.preventDefault();
    let orundumQuantity = document.querySelector('input').value;
    let pullsCost = "600";
    let pullsAmount = (orundumQuantity / pullsCost);
    let leftOrundum = (orundumQuantity % pullsCost); 
    
    resultContainer.innerHTML = `You have ${Math.floor(pullsAmount)} pulls and ${leftOrundum} Orundum left.`;

}

yourButton.addEventListener('click', getPulls);