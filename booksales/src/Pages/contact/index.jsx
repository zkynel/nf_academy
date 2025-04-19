import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

export default function Books() {
  return (
    <>
      {/* Header */}
      <Header />

      <div className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">📬 Hubungi Kami</h2>
            <p className="text-muted">
              Punya pertanyaan seputar pesanan, rekomendasi buku, atau ingin
              kerja sama? Kami siap membantu!
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  <strong>📞 Telepon:</strong> +62 813 8580 5070
                  <br />
                  <small className="text-muted">
                    Tersedia Senin - Jumat, 09.00 - 17.00 WIB
                  </small>
                </li>

                <li className="mb-3">
                  <strong>📧 Email: </strong>
                  <a
                    href="mailto:nasa@booksales.id"
                    className="text-decoration-none"
                  >
                    support@booksales.id
                  </a>
                </li>

                <li className="mb-3">
                  <strong>📍 Alamat:</strong>
                  <br />
                  Booksales Indonesia
                  <br />
                  Jl. Nangka, Indonesia
                </li>

                <li className="mb-3">
                  <strong>💬 Live Chat:</strong> Gunakan ikon chat di pojok
                  kanan bawah untuk ngobrol langsung dengan tim kami!
                </li>

                <li>
                  <strong>📱 Ikuti Kami:</strong>
                  <br />
                  <a
                    href="https://instagram.com/booksales.id"
                    target="_blank"
                    className="me-2 text-decoration-none"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://twitter.com/booksales_id"
                    target="_blank"
                    className="me-2 text-decoration-none"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://tiktok.com/@booksales.id"
                    target="_blank"
                    className="text-decoration-none"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
