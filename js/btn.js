// console.log('connected');
let playerNameList = [];
// let playerNmuber = playerNameList.length;

// add player to select field


//player add for click select
document.getElementById('player-card').addEventListener('click', function (event) {
    const targetElement = event.target;
    const targetElementText = targetElement.innerText;
    // const disablitiy = targetElement.parentNode;
    console.log(targetElement)

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
        }

    }
    else {
        console.log('other')
    }


})
