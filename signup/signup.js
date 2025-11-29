document.getElementById("signup-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch('http://127.0.0.1:8000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            alert("Impossible de créer le compte. Essayez un autre username.");
            return;
        }

        window.location.href = "../login/page_login.html";

    } catch (error) {
        console.error("Erreur:", error);
        alert("Erreur interne du serveur");
    }
});
