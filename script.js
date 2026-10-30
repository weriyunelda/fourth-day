const daftarBarang = [
    "laptop",
    "mouse",
    "keyboard",
    "monitor"
];
console.log(daftarBarang.length)
for (let i = 0; i < daftarBarang.length; i++) {
    console.log(daftarBarang[i]);
}

function sapa() {
    console.log("Selamat belajar JavaScript");
}

sapa();

function tentukanStatusStok(stok) {
    if (stok === 0) {
        return "Habis";
    } else if (stok < 5) {
        return "Menipis";
    } else {
        return "Aman";
    }
}

console.log(tentukanStatusStok(0));
console.log(tentukanStatusStok(3));
console.log(tentukanStatusStok(15));