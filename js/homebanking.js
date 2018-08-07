
var limiteExtraccion = 3000;
var nombreUsuario ="Enzo";
var pass = 1234;
var saldoCuenta =10000;
var serAgua =250;
var serTelefono=425;
var serLuz = 210;
var serInternet = 570;
var cAmiga1 = 1234567;
var cAmiga2 = 7654321;


cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();
iniciarSesion();



function superaLimiteMaximo(dinero){
  return ( dinero > limiteExtraccion);
}


function sumarDinero(nro){
  saldoCuenta = saldoCuenta+nro;
}

function restarDinero(nro){
  saldoCuenta = saldoCuenta-nro;
}

function cambiarLimiteDeExtraccion(){
  var nuevoLimite = prompt("Indique el nuevo límite de extracción");
  if (isNaN(nuevoLimite)) {
    alert("Ingresá sólo valores numéricos");
  } else if (nuevoLimite<1000) {alert("Por favor, ingresá un monto mayor a mil");
} else if (nuevoLimite%100!==0) {
  alert("Por favor, ingresá un monto divisible por cien");
}
else {
  limiteExtraccion = nuevoLimite;
  alert("El nuevo límite es $ " + nuevoLimite)
}
actualizarLimiteEnPantalla();
}

function extraerDinero() {
  var extDinero = prompt("Indique la cantidad de dinero que desea extraer");
  if (isNaN(extDinero)) {
    alert("Ingresos sólo valores numéricos");
  } else if (extDinero>saldoCuenta) {
    alert("No podés extraer más dinero que el que tenes disponible en tu cuenta");
  } else if (superaLimiteMaximo(extDinero)){
    alert("Estás superando tu límite de extracción");
  } else if (extDinero%100!==0) {
    alert("Solo podés sacar billetes de $100");
  }
  else {
    var saldoAnterior=saldoCuenta;
    restarDinero (extDinero);
    alert("Has extraido = $"+extDinero+"\nTu saldo anterior = $"+saldoAnterior +"\nSaldo Actual = $"+saldoCuenta);
  }
  actualizarSaldoEnPantalla();
}

function depositarDinero() {
  var depDinero= parseInt(prompt("Indique la cantidad de dinero que desea depositar"));
  var saldoAnterior=saldoCuenta;
  if (isNaN(depDinero)) {
    alert("Por favor, ingresá sólo valores numéricos")
  } else if (depDinero<100) {
    alert ("Sólo podes depositar monto mayores a 100");
  } else if (depDinero%100!==0){
    alert("Sólo puedes depositar billetes de 100");
  }
  else {
    sumarDinero (depDinero);
    alert("Depositaste = $"+depDinero+"\nTu saldo anterior = $"+saldoAnterior +"\nSaldo Actual = $"+saldoCuenta);
  }
  actualizarSaldoEnPantalla();
}

function pagarServicio() {
  var saldoAnterior= saldoCuenta ;
  var pagServicio = parseInt(prompt("Indique el servicio que desea pagar \n 1 - Agua \n 2 - Luz \n 3 - Internet \n 4 - Teléfono"));
  if (isNaN(pagServicio)) {
    alert("Por favor, ingresá sólo valores numéricos")
  } else if (pagServicio>saldoCuenta){
    alert("No tiene dinero suficiente para realizar la operación");
  }
  else {
    switch (pagServicio) {
      case 1: restarDinero(serAgua);
      alert("Has pagado el servicio de Agua \n Tu saldo anterior = $"+ saldoAnterior +"\n Saldo descontado = $ "+ serAgua +"\n Saldo Actual = $"+saldoCuenta);
      break;
      case 2: restarDinero(serLuz);
      alert("Has pagado el servicio de Luz \n Tu saldo anterior = $"+ saldoAnterior +"\n Saldo descontado = $ "+ serLuz +"\n Saldo Actual = $"+saldoCuenta);
      break;
      case 3: restarDinero(serInternet);
      alert("Has pagado el servicio de internet \n Tu saldo anterior = $"+ saldoAnterior +"\n Saldo descontado = $ "+ serInternet +"\n Saldo Actual = $"+saldoCuenta);
      break;
      case 4: restarDinero(serTelefono);
      alert("Has pagado el servicio de Teléfono \n Tu saldo anterior = $"+ saldoAnterior +"\n Saldo descontado = $ "+ serTelefono +"\n Saldo Actual = $"+saldoCuenta);
      break;
      default: alert("El servicio seleccionado no está disponible")
      break;
    }
  }
  actualizarSaldoEnPantalla();
}

function transferirDinero() {

  var transDinero = parseInt(prompt("Indique el monto que desea transferir"));
  if (isNaN(transDinero)) {
    alert("Por favor, ingresá sólo valores numéricos")
  } else if (transDinero>saldoCuenta){
    alert("No tiene dinero suficiente para realizar la operación");
  }
  else {
    var cuenta = parseInt(prompt("Indíque a qué cuenta deseas transferir \n 1 - John Digweed, Cuenta n° "+cAmiga1+" \n 2 - Guy J, cuenta n° "+cAmiga2));
    switch (cuenta) {
      case 1: restarDinero(transDinero);
      alert("Has transferido $"+ transDinero +" a John Digweed. \n cuenta n° = "+ cAmiga1 );
      break;
      case 2: restarDinero(transDinero);
      alert("Has transferido $"+ transDinero +" a Guy J.\n Cuenta n° = " + cAmiga2 );
      break;
      default: alert("Solo puedes transferir dinero a cuentas amigas.");
    }
  }
  actualizarSaldoEnPantalla()
}

function iniciarSesion() {

  var password = parseInt(prompt("Ingrese su código de usuario"));
  if (password !== pass) {
    alert("Contraseña incorrecta \n Por cuestiones de seguridad hemos retenido el dinero de su cuenta.");
    saldoCuenta = 0;
    actualizarSaldoEnPantalla();
  } else {
    alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones")
    cargarNombreEnPantalla();
  }
  actualizarSaldoEnPantalla();
}



function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
  document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
