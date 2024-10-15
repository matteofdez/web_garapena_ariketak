window.addEventListener("load", inicio, true);

function inicio() {
    document.getElementById("calcular").addEventListener("click", calcularFechas);
}

function calcularFechas() {
    const obtenerFechaPresente = () => {
        const meses = { JAN: 1, FEB: 2, MAR: 3, APR: 4, MAY: 5, JUN: 6, JUL: 7, AUG: 8, SEP: 9, OCT: 10, NOV: 11, DEC: 12 };
        return new Date(
            parseInt(document.getElementById("presenteAno").value),
            meses[document.getElementById("presenteMes").value.toUpperCase()] - 1,
            parseInt(document.getElementById("presenteDia").value),
            parseInt(document.getElementById("presenteHora").value),
            parseInt(document.getElementById("presenteMinuto").value)
        );
    };

    const obtenerFechaDestino = () => {
        const meses = { JAN: 1, FEB: 2, MAR: 3, APR: 4, MAY: 5, JUN: 6, JUL: 7, AUG: 8, SEP: 9, OCT: 10, NOV: 11, DEC: 12 };
        return new Date(
            parseInt(document.getElementById("destinoAno").value),
            meses[document.getElementById("destinoMes").value.toUpperCase()] - 1,
            parseInt(document.getElementById("destinoDia").value),
            parseInt(document.getElementById("destinoHora").value),
            parseInt(document.getElementById("destinoMinuto").value)
        );
    };

    const fechaPresente = obtenerFechaPresente();
    const fechaDestino = obtenerFechaDestino();

    const diferenciaMs = fechaDestino - fechaPresente;
    let mensaje;

    if (diferenciaMs === 0) {
        mensaje = "Ez zara mugitu.";
    } else {
        let direccion;
        if (diferenciaMs > 0) {
            direccion = "Etorkizunera";
        } else {
            direccion = "Iraganera";
        }

        const absDiferenciaMs = Math.abs(diferenciaMs);

        const segundos = Math.floor(absDiferenciaMs / 1000);
        const minutos = Math.floor(segundos / 60);
        const horas = Math.floor(minutos / 60);
        const dias = Math.floor(horas / 24);
        const anos = Math.floor(dias / 365);

        const restoDias = dias % 365;
        const restoHoras = horas % 24;
        const restoMinutos = minutos % 60;
        const restoSegundos = segundos % 60;

        mensaje = `${direccion} ${anos} urte, ${restoDias} egun, ${restoHoras} ordu, eta ${restoMinutos} minutu bidaiatuko dituzu.`;
    }

    document.getElementById("mensaje").textContent = mensaje;
}
