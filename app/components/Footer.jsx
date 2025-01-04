import "./footer.scss";
export default function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading">
                <h2>
                  Looking to improve your music skills?
                  <br />
                  Let's connect and start your lessons today!
                </h2>
              </div>
              <div className="details">
                <div className="box">
                  <img src="/img/send.svg" alt="" />
                  <p>Email Address</p>
                  <h3>ramen.paul14@gmail.com</h3>
                </div>
                <div className="box">
                  <img src="/img/call.svg" alt="" />
                  <p>Phone Number</p>
                  <h3>+91 98110 71981</h3>
                </div>
                <div className="box">
                  <img src="/img/linkedin-home.svg" alt="" />
                  <p>Available on LinkedIn</p>
                  <h3>ramen-paul</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2017-2024 Ramen Paul</p>
      </div>
    </footer>
  );
}
