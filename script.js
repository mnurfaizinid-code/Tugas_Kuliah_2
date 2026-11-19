function hitungNilai() {
        let tugas = Number(document.getElementById("tugas").value);
        let uts = Number(document.getElementById("uts").value);
        let uas = Number(document.getElementById("uas").value);

        let nilaiAkhir = (tugas * 30 / 100) + (uts * 30 / 100) + (uas * 40 / 100);

        let grade;
            if (nilaiAkhir >= 90) {
                grade = "A";
            } else if (nilaiAkhir >= 80) {
                grade = "B";
            } else if (nilaiAkhir >= 70) {
                grade = "C";
            } else {
                grade = "D";
            }

        let keterangan = "";
            switch (grade) {
                case "A":
                    keterangan = "Dah pasti lulus, anda hebat";
                break;
                case "B":
                    keterangan = "Nanggung ye";
                break;
                case "C":
                    keterangan = "Ok aja";
                break;
                case "D":
                    keterangan = "Ngawor banget rek, remed ye";
                break;
            }      

        document.getElementById("hasil").innerHTML = 
            "Nilai Akhir: " + nilaiAkhir.toFixed(2) + "<br>" +
            "Grade: " + grade + "<br>" +
            "Status: " + keterangan;
        }

let daftarTugas = [];

function tambahTugas() {
    let input = document.getElementById("input-tugas");

    if (input.value === "") {
        return;
    }
    
    daftarTugas.push({judul: input.value, selesai: false});
    input.value = "";
    tampilkan();
}

function tandaiSelesai(index) {
    daftarTugas[index].selesai = !daftarTugas[index].selesai;
    tampilkan();
}

function hapusTugas(index) {
    daftarTugas.splice(index, 1);
    tampilkan();
}

function tampilkan() {
    let html = "";

    for (let i = 0; i < daftarTugas.length; i++) {
        let kelas = "";
        if (daftarTugas[i].selesai) {
            kelas = "selesai";
        }

        html += "<li class='" + kelas + "'>" + daftarTugas[i].judul +
            " <button onclick='tandaiSelesai(" + i + ")'>Selesai</button>" +
            " <button onclick='hapusTugas(" + i + ")'>Hapus</button></li>";
    }

    document.getElementById("daftar").innerHTML = html;
}