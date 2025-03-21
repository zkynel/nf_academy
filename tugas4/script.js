// Class Kendaraan sebagai parent
class Kendaraan {
  constructor(jenis, merk, hargaSewa) {
    this.jenis = jenis;
    this.merk = merk;
    this.hargaSewa = hargaSewa;
  }

  info() {
    return `${this.jenis} ${this.merk}, Harga Sewa: Rp${this.hargaSewa}`;
  }
}

// Class turunan Mobil dan Motor
class Mobil extends Kendaraan {
  constructor(merk, hargaSewa) {
    super("Mobil", merk, hargaSewa);
  }
}

class Motor extends Kendaraan {
  constructor(merk, hargaSewa) {
    super("Motor", merk, hargaSewa);
  }
}

// Class Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
  }

  info() {
    return `${this.nama} (${
      this.nomorTelepon
    }) menyewa ${this.kendaraanDisewa.info()}`;
  }
}

// Array untuk menyimpan daftar pelanggan
let daftarPelanggan = [];

// Fungsi untuk menambah pelanggan
function tambahPelanggan() {
  let nama = document.getElementById("nama").value;
  let nomorTelepon = document.getElementById("nomorTelepon").value;
  let jenisKendaraan = document.getElementById("kendaraan").value;

  if (nama === "" || nomorTelepon === "") {
    alert("Mohon isi semua data pelanggan!");
    return;
  }

  let kendaraan;
  if (jenisKendaraan === "Mobil") {
    kendaraan = new Mobil("Toyota Avanza", 500000);
  } else {
    kendaraan = new Motor("Honda Vario", 150000);
  }

  let pelangganBaru = new Pelanggan(nama, nomorTelepon, kendaraan);
  daftarPelanggan.push(pelangganBaru);

  tampilkanPelanggan();
}

// Fungsi untuk menampilkan daftar pelanggan di halaman
function tampilkanPelanggan() {
  let list = document.getElementById("daftarPelanggan");
  list.innerHTML = ""; // Reset daftar sebelum menampilkan yang baru

  daftarPelanggan.forEach((pelanggan, index) => {
    let li = document.createElement("li");
    li.textContent = pelanggan.info();
    list.appendChild(li);
  });
}
