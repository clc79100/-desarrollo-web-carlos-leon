document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('leon').addEventListener('submit', function(event){
    event.preventDefault();
    var edad = document.getElementById('chavez').value;
    var sexo = document.getElementById('sexo').value;
    var nivelEducacion = document.getElementById('nivelEducacion').value;
    var ocupacion = document.getElementById('ocupacion').value;
    
    var url = 'resultado-carlos-leon.html?chavez=' + encodeURIComponent(edad) + '&sexo=' + encodeURIComponent(sexo) + '&nivelEducacion=' + encodeURIComponent(nivelEducacion) + '&ocupacion=' + encodeURIComponent(ocupacion);
    window.location.href = url;
    });
});



function obtenerParametro(name){
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    resultados = regex.exec(location.search);
    return resultados === null ? "" : decodeURIComponent (resultados [1]);
}






edad = obtenerParametro('chavez');
sexo = obtenerParametro('sexo');
nivelEduacion = obtenerParametro('nivelEducacion');
ocupacion = obtenerParametro('ocupacion');
document.getElementById('resultado').innerHTML =
'<p>Edad: ' + edad + '</p>' + 
'<p>sexo:' + sexo   + '</p>' + 
'<p>Nivel educativo:' + nivelEduacion + '</p>'+
'<p>ocupacion:' + ocupacion + '</p>';