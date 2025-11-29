document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const ErrorElement = document.getElementById('error')

    form,addEventListener( 'submit', async (e) =>{
        e.preventDefault();
        console.log(password )
        try {
            const response = await fetch('http://127.0.0.1:8000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ username, password })
            });

            console.log(response)

            if (!response.ok) {
                alert("Username ou Password incorrect");
                return;
            }

            const data = await response.json();
            console.log(data)
            localStorage.setItem("token", data.token);

            window.location.href = "../translate/page_translate.html";

        } catch (error) {
            console.error("Erreur:", error);
            ErrorElement.innerText="Erreur interne";
        }
    });
});
