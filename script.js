const plot = new Date("2026-05-02T00:00:00");

function atualizar() {
    const agora = new Date();

    const diff = agora - plot;

    const segundos = Math.floor(diff / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const semanas = Math.floor(dias / 7);

    let anos = agora.getFullYear() - plot.getFullYear();
    let meses = agora.getMonth() - plot.getMonth();

    if (agora.getDate() < plot.getDate()) {
        meses -= 1;
    }

    if (meses < 0) {
        anos -= 1;
        meses += 12;
    }

    document.getElementById("anos").textContent = `Anos: ${anos}`;
    document.getElementById("meses").textContent = `Meses: ${meses}`;
    document.getElementById("semanas").textContent = `Semanas: ${semanas}`;
    document.getElementById("dias").textContent = `Dias: ${dias}`;
    document.getElementById("horas").textContent = `Horas: ${horas}`;
    document.getElementById("minutos").textContent = `Minutos: ${minutos}`;
    document.getElementById("segundos").textContent = `Segundos: ${segundos}`;
}

atualizar();
setInterval(atualizar, 1000);