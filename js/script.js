const name1 = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('contact-form');

function sendEmail(){
const ebody=`Name: ${name1.value}
  <br>
   Email : ${email.value}
   <br>
   Message: ${message.value}`;
Email.send({
Host : "smtp.elasticemail.com",
Username : "tejassgadgil@gmail.com",
Password : "091BDBE41A81E5785D3D6FA474DB9D161314",
To : 'tejassgadgil@gmail.com',
From : 'tejassgadgil@gmail.com',
Subject : "tried to contact from" + email.value,
Body : ebody
}).then(
message => alert(message)
);
console.log(ebody)
}
