import "./awards.scss";
export default function Awards() {
  return (
    <section id="achievements">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="awards">
              <div className="box">
                <div className="content">
                  <div className="img-box">🏆</div>
                  <div className="text">
                    <h3>Excellent teachers Award</h3>
                    <p>from the Trinity College of music London 2024</p>
                  </div>
                </div>
              </div>
              {/* <div className="box">
                <div className="content">
                  <div className="img-box">🏆</div>
                  <div className="text">
                    <h3>Best teachers award</h3>
                    <p>by the MCS student council 2023</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="box">
                <div className="content">
                  <div className="img-box">🏆</div>
                  <div className="text">
                    <h3>Trinity toppers award 2014.</h3>
                    <p></p>
                  </div>
                </div>
              </div> */}
              {/* <div className="box">
                <div className="content">
                  <div className="img-box">🏆</div>
                  <div className="text">
                    <h3>Youngest conductors award 2012</h3>
                    <p></p>
                  </div>
                </div>
              </div> */}
              <div className="box">
                <div className="content">
                  <div className="img-box">🏆</div>
                  <div className="text">
                    <h3>Best solo instruments award 2016</h3>
                    <p>by Carnelian</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content">
              <h2>My achievements</h2>
              <p className="description">
                With a strong foundation in music and years of experience, I
                offer personalized lessons in Cello, Violin, Guitar, and Piano.
                Whether you're a beginner or looking to refine your skills, I'm
                here to help you reach your full potential. Let's work together
                to build your musical strength and achieve your goals!
              </p>
              <div className="instruments">
                <h3 className="play">Instruments i can play</h3>
                <div className="instrument">
                  Cello, Violin, Guitar, Violin, Piano
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
