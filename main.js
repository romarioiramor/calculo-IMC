
function calcIMC() {

    var form = document.getElementById('imc_form');
    var peso = form.peso.value;
    var altura = form.altura.value / 100;

    var resultado = peso / (altura * altura);

    alert (`o seu IMC é "${resultado}"`)
    

}
