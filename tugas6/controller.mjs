import users from "./data.mjs";

// Menampilkan data menggunakan map()
const index = () => {
  console.log("Daftar Users:");
  users.map((user, index) => {
    console.log(
      `${index + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${
        user.alamat
      }, Email: ${user.email}`
    );
  });
};

// Menambahkan data ke dalam array (minimal 2 data)
const store = (user) => {
  users.push(user);
  console.log(`User ${user.nama} berhasil ditambahkan.`);
};

// Menghapus data berdasarkan index terakhir
const destroy = () => {
  if (users.length > 0) {
    let deletedUser = users.pop();
    console.log(`User ${deletedUser.nama} telah dihapus.`);
  } else {
    console.log("Tidak ada data untuk dihapus.");
  }
};

export { index, store, destroy };
