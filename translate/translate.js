document.getElementById("btn-translate").addEventListener("click", async function () {
    const text = document.getElementById("text").value;
    const language = document.getElementById("language").value;
    const token = localStorage.getItem("token");

    try {
        const response = await fetch("http://127.0.0.1:8000/translate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": token
            },
            body: JSON.stringify({ text, language })
        });

        const data = await response.json();

        const translated = document.getElementById("translated");

        console.log(data)

        if (language === "fr-en") {
            translated.textContent = "EN: " + data[0].translation_text;
        } else {
            translated.textContent = "FR: " + data[0].translation_text;
        }

    } catch (error) {
        console.log(error.message);
    }
});
