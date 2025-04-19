import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

export default function Team() {
  return (
    <>
      {/* Header */}
      <Header />

      <div className="container text-center py-5">
        <h1 className="fw-light">Meet Our Team</h1>
        <div className="row py-5">
          <div className="col-lg-4">
            <img
              src="https://picsum.photos/720/600"
              alt=""
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              role="img"
            />
            <h2 className="fw-normal my-3">Langsung</h2>
            <p>
              Handles daily operations, staff coordination, and keeps the
              bookstore welcoming for every customer.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src="https://picsum.photos/720/600"
              alt=""
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              role="img"
            />
            <h2 className="fw-normal my-3">Aja</h2>
            <p>
              Monitors stock levels, organizes new arrivals, and ensures every
              shelf is always well-curated.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src="https://picsum.photos/720/600"
              alt=""
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              role="img"
            />
            <h2 className="fw-normal my-3">Di Letsgoin</h2>
            <p>
              Guides visitors, offers book recommendations, and creates a
              friendly space for all readers alike.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
