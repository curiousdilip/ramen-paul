import "./bio.scss";
export default function Bio() {
  return (
    <section id="bio">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="education">
              <div className="ed-heading">
                <div className="line"></div>
                <h2>Education</h2>
              </div>
              <div className="box">
                <p className="duration">2021 - Present . UK</p>

                <h3 className="organization">Website Design Course</h3>
                <p className="description">
                  Bachelor's Degree in Computer Science ABC Technical Institute,
                  Jefferson, Missouri.
                </p>
              </div>
              <div className="box">
                <p className="duration">2021 - Present . UK</p>

                <h3 className="organization">Website Design Course</h3>
                <p className="description">
                  Bachelor's Degree in Computer Science ABC Technical Institute,
                  Jefferson, Missouri.
                </p>
              </div>
              <div className="box">
                <p className="duration">2021 - Present . UK</p>

                <h3 className="organization">Website Design Course</h3>
                <p className="description">
                  Bachelor's Degree in Computer Science ABC Technical Institute,
                  Jefferson, Missouri.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="work">
              <div className="work-heading">
                <div className="line"></div>
                <h2>Work History</h2>
              </div>
              <div className="box">
                <p className="duration">2021 - Present . UK</p>

                <h3 className="degree">Website Design Course</h3>
                <p className="description">
                  Bachelor's Degree in Computer Science ABC Technical Institute,
                  Jefferson, Missouri.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="instruments">
              <div className="ins-heading">
                <div className="line"></div>
                <h2>Instruments i Play</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
