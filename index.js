function sendEmail(){
    var params = {
        name: document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        msg: document.getElementById("msg").value,
    };

    const serviceID = "service_p9ivn95";
  const templateID = "template_i6vphgs";

  emailjs.send(serviceID,templateID,params)
  .then(
    res =>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("subject").value="";
        document.getElementById("msg").value="";

        console.log(res);

        alert("Your message sent successfully");
    }
  )
  .catch((err) => console.log(err));
   }