document.querySelector("form").addEventListener("submit", function(e) {
    const idade = document.getElementById("idade").value;
    if (idade < 18) {
        alert("Menores de 18 anos precisam que o responsável preencha o formulário!");
        e.preventDefault();
    }
});