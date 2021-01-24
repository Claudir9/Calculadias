function dias_idade() {
var idade = document.getElementById("idade").value;
var resultado_idade = idade*365;
var str1 = "Você tem ";
var str2 = resultado_idade;
var str3 = " dias de idade!";
document.getElementById("resultado").innerHTML = str1.concat(str2,str3);
document.getElementById("resultado").style.display = 'block';
document.getElementById("resultado").style.backgroundColor = 'white';
}