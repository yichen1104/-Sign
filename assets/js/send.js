
function send(){
    
    console.log(document.getElementById('name').value);

    var templateParams = {
        data_name: document.getElementById('name').value,
        reply_to: document.getElementById('email').value,
        data_iphone: document.getElementById('iphone').value,
        data_people: document.getElementById('people').value
    };
      
    emailjs.send('service_travel', 'template_j7nn29e', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           window.alert("報名成功");
           window.location.reload("#");
           window.document.body.scrollTop = 0;
           window.document.documentElement.scrollTop = 0;
        }, function(error) {
           console.log('FAILED...', error);
           window.alert("報名失敗，請聯絡工程師");
        });

}
