const SubmitForm = (e) => {
    var name, email, message, contact;
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    contact = document.getElementById('contact').value;
    message = document.getElementById('message').value;
    console.log('data');
    Email.send({ 
        Host: "smtp.gmail.com", 
        Username: "vipul19panwar@gmail.com", 
        Password: "betichod1999", 
        To: 'shlok.40516403218@ipu.ac.in', 
        From: "vipu19panwar@gmail.com", 
        Subject: "Sending Email using javascript", 
        Body: "Well that was easy!!", 
      }) 
        .then(function (message) { 
            console.log(message)
          alert("mail sent successfully: ", message) 
        }); 

    return false;
}