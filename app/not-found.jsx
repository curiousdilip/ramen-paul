import "./404.css";
export default function NotFound() {
  return (
    <section id="error">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content">
              <img src="/img/404.svg" alt="" className="img-fluid" />
              <h1>Page not found...</h1>
              <p>
                Something went wrong. It’s look that your requested could not be
                found. It’s look like the link is broken or the page is removed.
              </p>
              <div className="home-btn">
                <a href="/">Go To Home</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
