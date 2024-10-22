function gjejDivizoret() {
    const numri = document.getElementById("numri").value;
    const rezultati = document.getElementById("rezultati");

    if (!numri || numri <= 0) {
        rezultati.innerHTML = "Ju lutem shkruani një numër pozitiv!";
        return;
    }

    let divizoret = [];
    for (let i = 1; i <= numri; i++) {
        if (numri % i === 0) {
            divizoret.push(i);
        }
    }

    rezultati.innerHTML = `Pjestuesit e numrit ${numri} janë: ${divizoret.join(", ")}`;
}
