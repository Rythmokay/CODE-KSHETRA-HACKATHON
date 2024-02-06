import React from "react";
// import './MainContent.css'; // Import your CSS file
import "./App.css";

const MainContent = () => {
  return (
    <main>
      {/* About section */}
      <section id="about" className="about py">
        <div className="about-inner">
          <div className="container grid">
            <div className="about-left text-center">
              <div className="section-head">
                <h2>About Us</h2>
                <div className="border-line"></div>
              </div>
              <p className="text text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae molestias delectus facilis, temporibus eum
                consectetur, a debitis exercitationem quae distinctio aliquid ea
                ipsam vitae esse amet soluta maxime dolorem? Inventore ut
                maiores illo ipsum nisi, nulla eligendi unde reiciendis quod
                voluptas velit sit voluptate perferendis cum pariatur molestiae
                tenetur repellat!
              </p>
              <a href="#" className="btn btn-white">
                Learn More
              </a>
            </div>
            <div className="about-right flex">
              <div className="img">
                <img src="/images/about-img.png" alt="About Us" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner one section */}
      <section id="banner-one" className="banner-one text-center">
        <div className="container text-white">
          <blockquote className="lead">
            <i className="fas fa-quote-left"></i> When you are young and
            healthy, it never occurs to you that in a single second your whole
            life could change. <i className="fas fa-quote-right"></i>
          </blockquote>
          <small className="text text-sm">- Anonim Nano</small>
        </div>
      </section>

      {/* Services section */}
      <section id="services" className="services py">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="lead">The Best Doctor gives the least medicines</h2>
            <p className="text text-lg">
              A perfect way to show your hospital services
            </p>
            <div className="line-art flex">
              <div></div>
              <img src="/images/4-dots.png" alt="Dots" />
              <div></div>
            </div>
          </div>
          <div className="services-inner text-center grid">
            <article className="service-item">
              <div className="icon">
                <img src="/images/service-icon-1.png" alt="Cardio Monitoring" />
              </div>
              <h3>Cardio Monitoring</h3>
              <p className="text text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis possimus doloribus facilis velit, assumenda tempora
                quas mollitia quos voluptatibus consequatur!
              </p>
            </article>

            <article className="service-item">
              <div className="icon">
                <img src="/images/service-icon-2.png" alt="Medical Treatment" />
              </div>
              <h3>Medical Treatment</h3>
              <p className="text text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis possimus doloribus facilis velit, assumenda tempora
                quas mollitia quos voluptatibus consequatur!
              </p>
            </article>

            <article className="service-item">
              <div className="icon">
                <img src="/images/service-icon-3.png" alt="Emergency Help" />
              </div>
              <h3>Emergency Help</h3>
              <p className="text text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis possimus doloribus facilis velit, assumenda tempora
                quas mollitia quos voluptatibus consequatur!
              </p>
            </article>

            <article className="service-item">
              <div className="icon">
                <img src="/images/service-icon-4.png" alt="First Aid" />
              </div>
              <h3>First Aid</h3>
              <p className="text text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis possimus doloribus facilis velit, assumenda tempora
                quas mollitia quos voluptatibus consequatur!
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Banner two section */}
      <section id="banner-two" className="banner-two text-center">
        <div className="container grid">
          <div className="banner-two-left">
            <img src="/images/banner-2-img.png" alt="Banner Two" />
          </div>
          <div className="banner-two-right">
            <p className="lead text-white">
              When you are young and healthy, it never occurs to you that in a
              single second your whole life could change.
            </p>
            <div className="btn-group">
              <a href="#" className="btn btn-white">
                Learn More
              </a>
              <a href="#" className="btn btn-light-blue">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors section */}
      <section id="doc-panel" className="doc-panel py">
        <div className="container">
          <div className="section-head">
            <h2>Our Doctor Panel</h2>
          </div>
          <div className="doc-panel-inner grid">
            <div className="doc-panel-item">
              <div className="img flex">
                <img src="/images/doc-1.png" alt="Doctor 1" />
                <div className="info text-center bg-blue text-white flex">
                  <p className="lead">samuel goe</p>
                  <p className="text-lg">Medicine</p>
                </div>
              </div>
            </div>

            <div className="doc-panel-item">
              <div className="img flex">
                <img src="/images/doc-2.png" alt="Doctor 2" />
                <div className="info text-center bg-blue text-white flex">
                  <p className="lead">elizabeth ira</p>
                  <p className="text-lg">Cardiology</p>
                </div>
              </div>
            </div>

            <div className="doc-panel-item">
              <div className="img flex">
                <img src="/images/doc-3.png" alt="Doctor 3" />
                <div className="info text-center bg-blue text-white flex">
                  <p className="lead">tanya collins</p>
                  <p className="text-lg">Medicine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package services section */}
      <section id="package-service" className="package-service py text-center">
        <div className="container">
          <div className="package-service-head text-white">
            <h2>Package Service</h2>
            <p className="text text-lg">Best service package for you</p>
          </div>
          <div className="package-service-inner grid">
            <div className="package-service-item bg-white">
              <div className="icon flex">
                <i className="fas fa-phone fa-2x"></i>
              </div>
              <h3>Regular Case</h3>
              <p className="text text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, asperiores. Expedita, reiciendis quos beatae at
                consequatur voluptatibus fuga iste adipisci.
              </p>
              <a href="#" className="btn btn-blue">
                Read More
              </a>
            </div>

            <div className="package-service-item bg-white">
              <div className="icon flex">
                <i className="fas fa-calendar-alt fa-2x"></i>
              </div>
              <h3>Serious Case</h3>
              <p className="text text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, asperiores. Expedita, reiciendis quos beatae at
                consequatur voluptatibus fuga iste adipisci.
              </p>
              <a href="#" className="btn btn-blue">
                Read More
              </a>
            </div>

            <div className="package-service-item bg-white">
              <div className="icon flex">
                <i className="fas fa-comments fa-2x"></i>
              </div>
              <h3>Emergency Case</h3>
              <p className="text text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, asperiores. Expedita, reiciendis quos beatae at
                consequatur voluptatibus fuga iste adipisci.
              </p>
              <a href="#" className="btn btn-blue">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Posts section */}
      <section id="posts" className="posts py">
        <div className="container">
          <div className="section-head">
            <h2>Latest Post</h2>
          </div>
          <div className="posts-inner grid">
            <article className="post-item bg-white">
              <div className="img">
                <img src="/images/post-1.jpg" alt="Post 1" />
              </div>
              <div className="content">
                <h4>
                  Inspiring stories of person and family centered care during a
                  global pandemic.
                </h4>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor voluptas eius recusandae sunt obcaecati esse facere
                  cumque. Aliquid, cupiditate debitis.
                </p>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  quia ipsam, quis iure sed nulla.
                </p>
                <div className="info flex">
                  <small className="text text-sm">
                    <i className="fas fa-clock"></i> October 27, 2021
                  </small>
                  <small className="text text-sm">
                    <i className="fas fa-comment"></i> 5 comments
                  </small>
                </div>
              </div>
            </article>

            <article className="post-item bg-white">
              <div className="img">
                <img src="/images/post-2.jpg" alt="Post 2" />
              </div>
              <div className="content">
                <h4>
                  Inspiring stories of person and family centered care during a
                  global pandemic.
                </h4>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor voluptas eius recusandae sunt obcaecati esse facere
                  cumque. Aliquid, cupiditate debitis.
                </p>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  quia ipsam, quis iure sed nulla.
                </p>
                <div className="info flex">
                  <small className="text text-sm">
                    <i className="fas fa-clock"></i> October 27, 2021
                  </small>
                  <small className="text text-sm">
                    <i className="fas fa-comment"></i> 5 comments
                  </small>
                </div>
              </div>
            </article>

            <article className="post-item bg-white">
              <div className="img">
                <img src="/images/post-3.jpg" alt="Post 3" />
              </div>
              <div className="content">
                <h4>
                  Inspiring stories of person and family centered care during a
                  global pandemic.
                </h4>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor voluptas eius recusandae sunt obcaecati esse facere
                  cumque. Aliquid, cupiditate debitis.
                </p>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  quia ipsam, quis iure sed nulla.
                </p>
                <div className="info flex">
                  <small className="text text-sm">
                    <i className="fas fa-clock"></i> October 27, 2021
                  </small>
                  <small className="text text-sm">
                    <i className="fas fa-comment"></i> 5 comments
                  </small>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact section */}

      <section id="contact" className="contact py">
        <div className="container grid">
          <div className="contact-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2384.6268289831164!2d-6.214682984112116!3d53.29621947996855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486709e0c9c80f8f%3A0x92f408d10f2277c2!2sREVO!5e0!3m2!1sen!2snp!4v1636264848776!5m2!1sen!2snp"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="contact-right text-white text-center bg-blue">
            <div className="contact-head">
              <h3 className="lead">Contact Us</h3>
              <p className="text text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga.
              </p>
            </div>
            <form>
              <div className="form-element">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
              <div className="form-element">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                />
              </div>
              <div className="form-element">
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-white btn-submit">
                <i className="fas fa-arrow-right"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
