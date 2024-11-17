
function showBurgerDetails(name, price) {
    document.getElementById('burgerName').innerText = name;
    document.getElementById('burgerDescription').innerText = "Çmimi: $" + price + ". Përbërësit: Mish, Djath, Salatë, Domate, etj.";
    document.getElementById('burgerDetails').style.display = 'block';
}


function orderBurger() {
    const quantity = parseInt(document.getElementById('quantity').value);
    if (quantity > 10) {
        alert("Nuk mund të porositni më shumë se 10 burgerë!");
    } else {
        alert("Keni porositur " + quantity + " burgerë!");
        document.getElementById('burgerDetails').style.display = 'none';
    }
}
function validateForm() {
 
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const people = document.getElementById('people').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Kontrollo nëse fushat e kërkuara janë plotësuar
    if (!date || !time || !people || !firstName || !lastName || !email || !phone) {
        alert("Please fill out all required fields.");
        return;
    }

    
    alert('Your reservation request has been submitted!');
    document.getElementById('bookingForm').submit();
}
function validateForm() {

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const people = document.getElementById('people').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    
    if (!date || !time || !people || !firstName || !lastName || !email || !phone) {
        alert("Rezervimi nuk u krye. Ju lutem plotësoni të gjitha të dhënat dhe provoni përsëri.");
        return;
    }

    
    alert('Rezervimi u krye me sukses!');
    document.getElementById('bookingForm').submit();
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
   
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
       
        document.getElementById("confirmation-message").style.display = "block";
        
        
        document.getElementById("contactForm").reset();
        
        
        setTimeout(function() {
            document.getElementById("confirmation-message").style.display = "none";
        }, 3000); 
    }
});
