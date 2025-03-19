// Array untuk menyimpan daftar produk
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 },
];

// Fungsi untuk menampilkan daftar produk di halaman
function tampilkanProduk() {
  let produkList = document.getElementById("produkList");
  produkList.innerHTML = ""; // Reset daftar sebelum menampilkan yang baru
  produkToko.forEach((produk) => {
    let li = document.createElement("li");
    li.textContent = `ID: ${produk.id}, Nama: ${produk.nama}, Harga: Rp${produk.harga}, Stok: ${produk.stok}`;
    produkList.appendChild(li);
  });
}

// Fungsi untuk menambahkan produk baru melalui prompt
function tambahProdukPrompt() {
  let nama = prompt("Masukkan nama produk:");
  let harga = parseInt(prompt("Masukkan harga produk:"));
  let stok = parseInt(prompt("Masukkan stok produk:"));
  if (nama && !isNaN(harga) && !isNaN(stok)) {
    tambahProduk(nama, harga, stok);
    tampilkanProduk();
  } else {
    alert("Data tidak valid, coba lagi.");
  }
}

// Fungsi untuk menghapus produk berdasarkan ID melalui prompt
function hapusProdukPrompt() {
  let id = parseInt(prompt("Masukkan ID produk yang akan dihapus:"));
  if (!isNaN(id)) {
    hapusProduk(id);
    tampilkanProduk();
  } else {
    alert("ID tidak valid.");
  }
}

// Fungsi untuk menambahkan produk baru
function tambahProduk(nama, harga, stok) {
  let idBaru =
    produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
  let produkBaru = { id: idBaru, nama: nama, harga: harga, stok: stok };
  produkToko.push(produkBaru);
  alert(`Produk ${nama} berhasil ditambahkan.`);
}

// Fungsi untuk menghapus produk berdasarkan ID
function hapusProduk(id) {
  let index = produkToko.findIndex((produk) => produk.id === id);
  if (index !== -1) {
    let produkDihapus = produkToko.splice(index, 1);
    alert(`Produk ${produkDihapus[0].nama} berhasil dihapus.`);
  } else {
    alert(`Produk dengan ID ${id} tidak ditemukan.`);
  }
}
