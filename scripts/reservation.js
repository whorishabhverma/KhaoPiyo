function sendemail(){
  
       Email.send({
   Host : "smtp.elasticemail.com",
   Username : "aj637061@gmail.com",
   Password : "EE3CA6A7EB211158501783DF942C98612F6E",
   To : 'aj637061@gmail.com',
   From : 'aj637061@gmail.com',
   Subject : "Reservation Booking",
   Body : "Selected Day:" + document.getElementById("days").value + "<br>Selected Time:" + document.getElementById("hours").value +
          "<br>Name of Customer" + document.getElementById("name").value + "<br>Phone Number of Customer:"  + document.getElementById("number").value +
          "<br>Total Peoples:" + document.getElementById("person").value
})
.then(
 message => alert(message)
);
   }
