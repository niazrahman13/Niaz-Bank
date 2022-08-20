// //1) add eventHandler in button
// document.getElementById('button').addEventListener('click', function () {
//     //2) get the email address from input field
//     let store = document.getElementById('email').value;

//     //3) Get the Password
//     let passStore = document.getElementById('password').value
//     //4) Verify the mail pass and change the location
//     if (store === 'niaz.rahman@g.bracu.ac.bd' && passStore === '12345ni@z') {
//         window.location.href = 'InsideBank.html' //LOCTION CHANGE COMMAND
//     }
//     else {
//         alert('Invalid User');
//     }
// })


document.getElementById('button').addEventListener('click', function () {
    let x = document.getElementById('email').value;
    let y = document.getElementById('password').value;

    if (x === 'niaz.rahman@g.bracu.ac.bd' && y === "12345ni@z") {
        window.location.href = 'InsideBank.html'
    }
    else {
        alert('Invalid Input')
    }
})



