let tipodehabitación;

function habitaciónindividual(){ 
    let nombrereservador = prompt("Ingrese su nombre o el nombre al cual se pondra la reserva")
    let pais = prompt("Indique su pais de Origen")
    let numerodepersonas = prompt("Indique cuantas personas son en la habitación")
    parseInt(numerodepersonas)
    let Periododeestadia = prompt("Indique que mes y que dias desea la reserva en este formato dd/mm hasta dd/mm")
    let tipodecliente = prompt("¿Ud o alguna de las personas que estara en la habitación es fumadora, si/no?")
    if(numerodepersonas < 3){ 
        let mascota = prompt("¿Vienen mascostas con ud/s?, si/no")
        if (mascota === "no"){ alert("Su reservación para " + numerodepersonas + " ha sido exitosa ")
            let reserva = {
                Reservador: nombrereservador, 
                Numerodeclientes: numerodepersonas,
                Fecha: Periododeestadia,
                Pais: pais,
                Fumador: tipodecliente
            } 
            alert(`La reserva de la habitación individual esta a nombre de ${reserva.Reservador}, el pais al que pertenece/n es ${reserva.Pais}, ${reserva.Fumador} hay fumador/es, es/son ${reserva.Numerodeclientes} personas/s, no hay mascotas, y el periodo en el que se alojaran es desde ${reserva.Fecha}. `)    }
        else alert("Para mascostas solo esta disponible la habitación familiar")}
    else 
    alert("Si son mas de 2 personas no se puede rentar una habitación individual, necesita una doble o familiar")

}
function habitacióndoble(){ 
    let nombrereservador = prompt("Ingrese su nombre o el nombre al cual se pondra la reserva")
    let pais = prompt("Indique su pais de Origen")
    let numerodepersonas = prompt("Indique cuantas personas son en la habitación")
    parseInt(numerodepersonas)
    let Periododeestadia = prompt("Indique que mes y que dias desea la reserva en este formato dd/mm hasta dd/mm")
    let tipodecliente = prompt("¿Ud o alguna de las personas que estara en la habitación es fumadora, si/no?")
    if(numerodepersonas < 5){ 
        let mascota = prompt("¿Vienen mascostas con ud/s?, si/no")
        if (mascota === "no"){ alert("Su reservación para " + numerodepersonas + " ha sido exitosa ")
            let reserva = {
                Reservador: nombrereservador, 
                Numerodeclientes: numerodepersonas,
                Fecha: Periododeestadia,
                Pais: pais,
                Fumador: tipodecliente
            } 
            alert(`La reserva de la habitación doble esta a nombre de ${reserva.Reservador}, el pais al que pertenece/n es ${reserva.Pais}, ${reserva.Fumador} hay fumador/es, es/son ${reserva.Numerodeclientes} personas/s, no hay mascotas, y el periodo en el que se alojaran es desde ${reserva.Fecha}. `)   }
        else alert("Para mascostas solo esta disponible la habitación familiar")}
    else 
    alert("Si son mas de 4 personas no se puede rentar una habitación doble, necesita una familiar")

}
function habitaciónfamiliar(){ 
    let nombrereservador = prompt("Ingrese su nombre o el nombre al cual se pondra la reserva")
    let pais = prompt("Indique su pais de Origen")
    let numerodepersonas = prompt("Indique cuantas personas son en la habitación")
    parseInt(numerodepersonas)
    let Periododeestadia = prompt("Indique que mes y que dias desea la reserva en este formato dd/mm hasta dd/mm")
    let tipodecliente = prompt("¿Ud o alguna de las personas que estara en la habitación es fumadora, si/no?")
    let mascota = prompt("¿Vienen mascostas con ud/s?, si/no")
    if(numerodepersonas < 7){
    alert("Su reservación para " + numerodepersonas + " ha sido exitosa ")
    let reserva = {
        Reservador: nombrereservador, 
        Numerodeclientes: numerodepersonas,
        Fecha: Periododeestadia,
        Pais: pais,
        Fumador: tipodecliente,
        mascota: mascota
    }
    if (mascota === "si"){
    alert (`La reserva de la habitación familiar esta a nombre de ${reserva.Reservador}, el pais al que pertenece/n es ${reserva.Pais}, ${reserva.Fumador} hay fumador/es, es/son ${reserva.Numerodeclientes} persona/s, si hay mascotas, y el periodo en el que se alojaran es desde ${reserva.Fecha}. `) 
        }
    else  alert(`La reserva de la habitación familiar esta a nombre de ${reserva.Reservador}, el pais al que pertenece/n es ${reserva.Pais}, ${reserva.Fumador} hay fumador/es, es/son ${reserva.Numerodeclientes} personas/s, no hay mascotas, y el periodo en el que se alojaran es desde ${reserva.Fecha}. `) 
    }
    else ("La habitación familiar solo esta disponible para un maximo de 6 personas")
}
   
do{ 
   tipodehabitación = prompt("Hay 3 tipos de habitación, ¿cual desea? 1) Individual, 2) Doble, 3)Familiar")
   switch (tipodehabitación) {
    case "1": habitaciónindividual(); break;
    case "2": habitacióndoble(); break;
    case "3": habitaciónfamiliar(); break;
    default: alert("Opción no válida.");
}} while(confirm("desea rentar otra habitación"))