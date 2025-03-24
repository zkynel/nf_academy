// **Data Produk**
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 7000000 },
  { id: 4, nama: "Monitor", harga: 3000000 },
  { id: 5, nama: "Mouse", harga: 500000 },
];

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
  const daftarProduk = document.getElementById("produkList");
  daftarProduk.innerHTML = ""; // Hapus daftar lama

  produkList.forEach(({ id, nama, harga }) => {
    const li = document.createElement("li");
    li.textContent = `ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`;
    daftarProduk.appendChild(li);
  });
}

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
  produkList = [...produkList, { id, nama, harga }];
  alert(`Produk ${nama} berhasil ditambahkan.`);
  tampilkanProduk();
}

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(...id) {
  produkList = produkList.filter((produk) => !id.includes(produk.id));
  alert(`Produk dengan ID ${id.join(", ")} telah dihapus.`);
  tampilkanProduk();
}

// **Menampilkan produk saat pertama kali halaman dimuat**
document.addEventListener("DOMContentLoaded", tampilkanProduk);
