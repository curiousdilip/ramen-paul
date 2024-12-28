import "./lesson.css";
export default function Lesson() {
  return (
    <section id="lesson">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading">
              <h2>Classes I provide</h2>
              <h3>
                I specialize in teaching instruments, with a passion for
                technique, expression, and creating a strong musical foundation.
              </h3>
            </div>
            <div className="lessons">
              <div className="box">
                <div className="icon-box">🎤</div>
                <h4>Vocal</h4>
                <p>
                  I teach vocals, focusing on technique, breathing, and
                  consistent practice.
                </p>
              </div>
              <div className="box">
                <div className="icon-box">🎻</div>
                <h4>Violin</h4>
                <p>
                  I teach violin, focusing on technique, scales, and consistent
                  practice.
                </p>
              </div>
              <div className="box">
                <div className="icon-box">🎹</div>
                <h4>Piano</h4>
                <p>
                  I teach piano, focusing on technique, scales, and disciplined
                  practice.
                </p>
              </div>
              <div className="box">
                <div className="icon-box">🎻</div>
                <h4>Cello</h4>
                <p>
                  I teach cello, focusing on technique, bowing, and regular
                  practice.
                </p>
              </div>
              <div className="box">
                <div className="icon-box">🎸</div>
                <h4>Guitar</h4>
                <p>
                  I teach guitar, focusing on technique, chords, and consistent
                  practice.
                </p>
              </div>
              <div className="box">
                <div className="icon-box">🥁</div>
                <h4>Drums</h4>
                <p>
                  I teach drums, focusing on rhythm, technique, and steady
                  practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
