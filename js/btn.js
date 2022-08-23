// console.log('connected');
let playerNameList = [];
// let playerNmuber = playerNameList.length;

// add player to select field

// player total function
// function calculatePlayerTotal() {

// }


//player add for click select
document.getElementById('player-card').addEventListener('click', function (event) {
    const targetElement = event.target;
    const targetElementText = targetElement.innerText;
    // const disablitiy = targetElement.parentNode;
    // console.log(targetElement)

    // let playerName = '';

    if (targetElementText.toLowerCase() === 'select') {
        const playerName = targetElement.parentNode.children[0].innerText;
        // console.log(playerName)

        playerNameList.push(playerName);

        let selectPlayerField = document.getElementById('select-player-field');
        const li = document.createElement('li');
        li.innerText = playerName;

        if (playerNameList.length <= 5) {
            selectPlayerField.appendChild(li);
            targetElement.disabled = true;
            // console.log(selectPlayerField, playerNameList.length)
        }
        else {
            alert('You already select five player!')
            playerNameList.pop()
            // console.log(playerNameList.length)
        }

    }
    else {
        console.log('other')
    }


})


// calculate player total

document.getElementById('calculate-player-total').addEventListener('click', function () {
    const perPlayerPrice = parseInt(document.getElementById('per-player-price').value);
    if (isNaN(perPlayerPrice) != true) {
        const playerTotal = perPlayerPrice * playerNameList.length;

        const playerExpenses = parseInt(document.getElementById('player-expenses').innerText);
        document.getElementById('player-expenses').innerText = playerTotal;
    }
    else {
        alert('Enter number!')
        document.getElementById('player-expenses').innerText = '00';
    }
    // console.log(playerTotal, typeof playerExpenses, typeof perPlayerPrice)
})

// calculate total
