const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})

document.getElementById("signUpButton").addEventListener("click", function () {
    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;
  
    // Simula un login exitoso
    if (email === "enma@gmail.com" && password === "12345") {
      // Redirige al usuario a la siguiente página
      window.location.href = "Menu2.html";
    } else {
      alert("Credenciales incorrectas");
    }
  });
  