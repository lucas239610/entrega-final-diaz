const abajoForm = document.querySelector("#abajo-form");
console.log(abajoForm)
const abajoInput = document.querySelector("#abajo-input");
console.log(abajoInput)
const antiguedadInput = document.querySelector("#antiguedad-input");
console.log(antiguedadInput)
const presentismoInput = document.querySelector("#presentismo-input");
console.log(presentismoInput)
const datosFinales = document.querySelector("#datos-finales");

localStorage.setItem("edadEmpleado", antiguedadInput.value);
localStorage.setItem("diasPresentismo", presentismoInput.value);
localStorage.setItem("nombreEmpleado", abajoInput.value);
const edadEmpleado = localStorage.getItem("edadEmpleado");
const diasPresentismo = localStorage.getItem("diasPresentismo");
const nombreEmpleado = localStorage.getItem("nombreEmpleado");

Swal.fire({
    title: 'Hola',
    text: 'Bienvenido a el calculador de sueldos!',
    icon: 'success',
    confirmButtonText: 'Cargar Datos'
})

const valores=[80000,110000,150000];
        console.log(valores);
        for (let i = 0; i < 3; i++){
            console.log(valores[i]);
        }
let ValorAntiguedad;
        
        (antiguedadInput.value < 3 && antiguedadInput.value >= 0)? ValorAntiguedad = 80000 : (antiguedadInput.value >= 3 && antiguedadInput.value < 5)? ValorAntiguedad = 110000 :(antiguedadInput.value >= 5)? ValorAntiguedad = 150000 : 0;
        
        var BonoPresentismo=((presentismoInput.value>= 20 && presentismoInput.value < 32) ? BonoPresentismo = 10000 :0);
        
        const SueldoTotal= (ValorAntiguedad + BonoPresentismo );

console.log(SueldoTotal.value)


abajoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let ValorAntiguedad;
    if (antiguedadInput.value < 3 && antiguedadInput.value >= 0) {
    ValorAntiguedad = 80000;
    } else if (antiguedadInput.value >= 3 && antiguedadInput.value < 5) {
    ValorAntiguedad = 110000;
    } else if (antiguedadInput.value >= 5) {
    ValorAntiguedad = 150000;
    } else {
    ValorAntiguedad = 0;
    }

    let BonoPresentismo;
    if (presentismoInput.value >= 20 && presentismoInput.value < 32) {
    BonoPresentismo = 10000;
    } else {
    BonoPresentismo = 0;
    }

    const SueldoTotal = ValorAntiguedad + BonoPresentismo;

    datosFinales.innerHTML =
    "Hola " +
    abajoInput.value +
    " con tus " +
    antiguedadInput.value +
    " años de antiguedad " +
    "y tus " +
    presentismoInput.value +
    " dias trabados, tu sueldo final es " +
    SueldoTotal;

fetch('https://sheet.best/api/sheets/74e15dfe-6f1a-46ef-a4e2-6e57ceac9d5e',{
    method: 'POST',
    mode: 'cors',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "Nombre y Apellido": abajoInput.value,
        "Años de antiguedad": antiguedadInput.value,
        "Dias trabajados": presentismoInput.value,
    })
    
})
});
console.log(datosFinales)