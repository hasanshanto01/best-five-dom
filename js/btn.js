let playerNameList = [];

// get element field by id
function getElementFieldById(elementFieldId) {
    const elementField = document.getElementById(elementFieldId);
    return elementField;
}

// alert message
function alertMessage(id) {
    alert('Enter number!!!')
    getElementFieldById(id).innerText = '00';
}

//player add to select-v on click select button
document.getElementById('player-card').addEventListener('click', function (event) {
    const targetElement = event.target;
    const targetElementText = targetElement.innerText;

    if (targetElementText.toLowerCase() === 'select') {
        const playerName = targetElement.parentNode.children[0].innerText;
        playerNameList.push(playerName);

        let selectPlayerField = getElementFieldById('select-player-field');
        const li = document.createElement('li');
        li.innerText = playerName;

        if (playerNameList.length <= 5) {
            selectPlayerField.appendChild(li);
            targetElement.disabled = true;
        }
        else {
            alert('You already select five players!');
            playerNameList.pop();
        }

    }
})


// calculate player total
document.getElementById('calculate-player-total').addEventListener('click', function () {
    const perPlayerPrice = parseInt(getElementFieldById('per-player-price').value);

    if (isNaN(perPlayerPrice) != true) {
        const playerTotal = perPlayerPrice * playerNameList.length;

        const playerExpenses = parseInt(getElementFieldById('player-expenses').innerText);
        getElementFieldById('player-expenses').innerText = playerTotal;
    }
    else {
        alertMessage('player-expenses');
    }
})

// calculate total
document.getElementById('calculate-total').addEventListener('click', function () {
    const managerPrice = parseInt(getElementFieldById('manager-price').value);
    const coachPrice = parseInt(getElementFieldById('coach-price').value);
    let total = parseInt(getElementFieldById('total').innerText);

    if (isNaN(managerPrice) != true && isNaN(coachPrice) != true) {
        const playerExpenses = parseInt(getElementFieldById('player-expenses').innerText);

        total = playerExpenses + managerPrice + coachPrice;
        getElementFieldById('total').innerText = total;
    }
    else {
        alertMessage('total');
    }

})
