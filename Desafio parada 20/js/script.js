function verificar() {
    let div = document.getElementById("resp");
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    let text;

    let media = (num1 + num2 + num3) / 3;

    if (isNaN(media)) {
        text = "Por favor, insira valores numéricos válidos.";
    } else {
        if (media >= 6) {
            text = `Você passou, sua média é ${media}`;
        } else {
            text = `Reprovado, sua média é ${media}`;
        }
    }

    div.innerHTML = text;
}
