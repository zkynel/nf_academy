import React, { useState } from "react";
import booksData from "../../books";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

export default function Books() {
  const [books, setBooks] = useState(booksData);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: books.length + 1,
      ...formData,
    };
    setBooks([...books, newBook]);

    // Reset input form
    setFormData({
      title: "",
      author: "",
      year: "",
      description: "",
      image: "",
    });
  };

  return (
    <>
      {/* Header */}
      <Header />

      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 me-2">
                View
              </a>
              <a href="#" className="btn btn-secondary my-2">
                Other Books
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <h2 className="mb-4">Daftar Buku</h2>

          <form className="mb-4" onSubmit={handleAddBook}>
            <div className="row g-2">
              <div className="col-md">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Judul"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Penulis"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Tahun"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Deskripsi"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="URL Gambar"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary w-100">
                  Tambah Buku
                </button>
              </div>
            </div>
          </form>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm h-100">
                  <img
                    src={book.image}
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    alt={book.title}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5>{book.title}</h5>
                    <p className="card-text mb-1">
                      <strong>{book.author}</strong> ({book.year})
                    </p>
                    <p className="card-text" style={{ flexGrow: 1 }}>
                      {book.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      {/* <small className="text-body-secondary">
                        ID: {book.id}
                      </small> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
