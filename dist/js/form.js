// const sendButton = document.querySelectorAll('button[type="submit"]');
// // const sendButton =  document.getElementsByClassName("button");

// sendButton.addEventListener('click', sendEmail);



const sendButton = document.querySelector('.submit');

sendButton.addEventListener('click', sendEmail);

function sendEmail(){
    console.log("test")

    var email = document.querySelector('.email').value;
    var subject = document.querySelector('.subject').value;
    var message = document.querySelector('.message').value;
    var statusElm = document.querySelector('.status');
    statusElm.empty

    if(email.length > 5 && email.includes('@') && email.includes('.') && subject.length >= 2 && message.length >= 10){
        statusElm.append('Sending email');
    }
    else
    {
        event.preventDefault()
        statusElm.append('data is not Valid');
    }



}
// $(document).ready(function(){
//     $('.submit').click(function(event){
//         event.preventDefault()
//         console.log("button clicked")

//     })
// })
