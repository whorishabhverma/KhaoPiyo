function sendemail(){
  
        Email.send({
    Host : "smtp.elasticemail.com",
    Username : "aj637061@gmail.com",
    Password : "EE3CA6A7EB211158501783DF942C98612F6E",
    To : 'aj637061@gmail.com',
    From : 'aj637061@gmail.com',
    Subject : "New Contact Form Enquiry",
    Body : "Name :" + document.getElementById("name").value + "<br>Email:" + document.getElementById("email").value +
           "<br>Phone:" + document.getElementById("number").value + "<br>Subject:"  + document.getElementById("subject").value +
           "<br>Message:" + document.getElementById("message").value
})
.then(
  message => alert(message)
);
    }
