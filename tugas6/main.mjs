import { index, store, destroy } from "./controller.mjs";

// Menjalankan fungsi utama
const main = () => {
  // Menambahkan dua data baru
  store({
    nama: "Data 11",
    umur: 30,
    alamat: "Jl. Data 11",
    email: "data11@example.com",
  });
  store({
    nama: "Data 12",
    umur: 31,
    alamat: "Jl. Data 12",
    email: "data12@example.com",
  });

  // Menampilkan seluruh data
  index();

  // Menghapus satu data
  destroy();

  // Menampilkan data setelah penghapusan
  index();
};

// Jalankan fungsi main
main();
