// //1) add eventHandler in button
// document.getElementById('button').addEventListener('click', function () {
//     //2) get the email address from input field
//     let store = document.getElementById('email').value;

//     //3) Get the Password
//     let passStore = document.getElementById('password').value
//     //4) Verify the mail pass and change the location
//     if (store === '' && passStore === '') {
//         window.location.href = 'InsideBank.html' //LOCTION CHANGE COMMAND
//     }
//     else {
//         alert('Invalid User');
//     }
// })


document.getElementById('button').addEventListener('click', function () {
    let x = document.getElementById('email').value;
    let y = document.getElementById('password').value;

    window.location.href = 'InsideBank.html'

})



