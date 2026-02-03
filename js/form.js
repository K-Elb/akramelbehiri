  document.getElementById('RegisterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSezCDYofsYwe9LAIlInhzoQy3tmEc1vYX_So8zFj_H2M1Uzxw/formResponse';
    
    const choiceValue = document.querySelector('input[name="choice"]:checked').value;
    
    const formData = new FormData();
    formData.append('entry.2005620554', document.getElementById('name').value);
    formData.append('entry.839337160', document.getElementById('school').value);
    formData.append('entry.1166974658', document.getElementById('number').value);
    formData.append('entry.839337160', document.getElementById('email').value);
    
    formData.append('entry.1032903721', choiceValue);
    
    fetch(formURL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(() => {
        document.getElementById('RegisterForm').reset();
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 5000);
    }).catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
});