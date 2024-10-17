let atendidosllamada = 0
let atendidosasesoria = 0
let tipodeatención;
let atendidosestudiantes = 0
let atendidosdirectivos = 0
let atendidosestudiantesllamada = 0
let atendidosdirectivosllamada = 0
function llamada(){
    let deseaseguir = prompt("¿desea continuar o transferirse? presione 1 para continuar, 2 para transferirse")
    parseInt(deseaseguir)
    if (deseaseguir == 1){
        let tipodecliente = prompt("¿Ud es un estudiante o un directivo?")
        let cedula = prompt("ingrese su cedula")
        parseInt(cedula)
        let nombre = prompt("ingrese su nombre")
        if (tipodecliente == "estudiante"){
        alert(`señor(a) ${nombre}, ${tipodecliente} con el numero de cedula ${cedula}, se le atendera por llamada en segundos`)
        atendidosllamada++
        atendidosestudiantesllamada++}
        else if(tipodecliente == "directivo"){
            alert(`señor(a) ${nombre}, ${tipodecliente} con el numero de cedula ${cedula}, se le atendera por llamada en segundos`)
        atendidosllamada++
        atendidosdirectivosllamada++}
        else alert("El servicio solo esta para estudiantes y directivos")
        alert("Por llamada se han atendido "+atendidosllamada)
        alert("Por llamada se han atendido "+ atendidosestudiantesllamada + " estudiantes y "+ atendidosdirectivosllamada + " directivos")
    }
    else {alert("se le transferira en segundos al menu para que elija el otro tipo de atención")}
}
function asesoria(){
    let deseaseguir = prompt("¿desea continuar o transferirse? presione 1 para continuar, 2 para transferirse")
    parseInt(deseaseguir)
    if (deseaseguir == 1){
        let tipodecliente = prompt("¿Ud es un estudiante o un directivo?")
        let cedula = prompt("ingrese su cedula")
        parseInt(cedula)
        let nombre = prompt("ingrese su nombre")
        if (tipodecliente == "estudiante"){
        alert(`señor(a) ${nombre}, ${tipodecliente} con el numero de cedula ${cedula}, se le atendera por asesoria en segundos`)
        atendidosasesoria++
        atendidosestudiantes++}
        else if(tipodecliente == "directivo"){
            alert(`señor(a) ${nombre}, ${tipodecliente} con el numero de cedula ${cedula}, se le atendera por asesoria en segundos`)
        atendidosasesoria++
        atendidosdirectivos++}
        else alert("El servicio solo esta para estudiantes y directivos")
        alert("Por asesoria se han atendido "+atendidosasesoria)
        alert("Por asesoria se han atendido "+ atendidosestudiantes + " estudiantes y "+ atendidosdirectivos + " directivos")
    }
    else {alert("se le transferira en segundos al menu para que elija el otro tipo de atención")}

}
do {
    let tipodeatención = prompt("¿Que atención desea? 1) Llamada telefonica 2) asesoria")
    switch(tipodeatención) {
    case "1" : llamada(); break;
    case "2" : asesoria(); break;
}}while(confirm("¿desea ser atendido?"))