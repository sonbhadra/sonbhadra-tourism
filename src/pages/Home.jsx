import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Home = () => {
    return <div>
    <Header />

    {/* // <!-- ======= Hero Section ======= --> */}
  <section id="hero" className="d-flex align-items-center">
    <div className="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
      <h1>Your New Online Presence with Bethany</h1>
      <h2>We are team of talented designers making websites with Bootstrap</h2>
      <Link to="#about" className="btn-get-started scrollto">Get Started</Link>
    </div>
  </section>
{/* //   <!-- End Hero --> */}

  <main id="main">

    {/* <!-- ======= Clients Section ======= --> */}
    <section id="clients" className="clients">
      <div className="container">

        <div className="row">

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="100">
            <img src="assets/img/clients/client-1.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="200">
            <img src="assets/img/clients/client-2.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="300">
            <img src="assets/img/clients/client-3.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="400">
            <img src="assets/img/clients/client-4.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="500">
            <img src="assets/img/clients/client-5.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="600">
            <img src="assets/img/clients/client-6.png" className="img-fluid" alt=""/>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Clients Section --> */}

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container">

        <div className="row content">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <h2>Eum ipsam laborum deleniti velitena</h2>
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay="200">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
              <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
            </ul>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End About Section --> */}

    {/* <!-- ======= Counts Section ======= --> */}
    <section id="counts" className="counts">
      <div className="container">

        <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
            <p>Clients</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
            <p>Projects</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
            <p>Hours Of Support</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
            <p>Hard Workers</p>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Counts Section --> */}

    {/* <!-- ======= Why Us Section ======= --> */}
    <section id="why-us" className="why-us">
      <div className="container">

        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-right">
            <div className="content">
              <h3>Why Choose Bethany for your company website?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </p>
              <div className="text-center">
                <Link to="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-receipt"></i>
                    <h4>Corporis voluptates sit</h4>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-cube-alt"></i>
                    <h4>Ullamco laboris ladore pan</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-images"></i>
                    <h4>Labore consequatur</h4>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End .content--> */}
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Why Us Section --> */}

    {/* <!-- ======= Cta Section ======= --> */}
    <section id="cta" className="cta">
      <div className="container">

        <div className="text-center" data-aos="zoom-in">
          <h3>Call To Action</h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Link className="cta-btn" to="#">Call To Action</Link>
        </div>

      </div>
    </section>
    {/* <!-- End Cta Section --> */}

    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services section-bg">
      <div className="container">

        <div className="row">
          <div className="col-lg-4">
            <div className="section-title" data-aos="fade-right">
              <h2>Services</h2>
              <p>Magnam dolores commodi suscipit nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                  <div className="icon"><i className="bx bxl-dribbble"></i></div>
                  <h4><Link to="">Lorem Ipsum</Link></h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
              </div>

              <div className="col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                  <div className="icon"><i className="bx bx-file"></i></div>
                  <h4><Link to="">Sed ut perspiciatis</Link></h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
              </div>

              <div className="col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                  <div className="icon"><i className="bx bx-tachometer"></i></div>
                  <h4><Link to="">Magni Dolores</Link></h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </div>
              </div>

              <div className="col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box" data-aos="zoom-in" data-aos-delay="400">
                  <div className="icon"><i className="bx bx-world"></i></div>
                  <h4><Link to="">Nemo Enim</Link></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Services Section --> */}

    {/* <!-- ======= Portfolio Section ======= --> */}
    <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title" data-aos="fade-left">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <Link to="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                  <Link to="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <Link to="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></Link>
                  <Link to="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <Link to="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></Link>
                  <Link to="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <Link to="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></Link>
                  <Link to="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <Link to="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></Link>
                  <Link to="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <Link to="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></Link>
                  <Link to="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <Link to="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></Link>
                  <Link to="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <Link to="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></Link>
                  <Link to="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <Link to="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></Link>
                  <Link to="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Portfolio Section --> */}

    {/* <!-- ======= Testimonials Section ======= --> */}
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">

        <div className="row">
          <div className="col-lg-4">
            <div className="section-title" data-aos="fade-right">
              <h2>Testimonials</h2>
              <p>Magnam dolores commodi suscipit uisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
          </div>
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">

            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Testimonials Section --> */}

    {/* <!-- ======= Team Section ======= --> */}
    <section id="team" className="team">
      <div className="container">

        <div className="row">
          <div className="col-lg-4">
            <div className="section-title" data-aos="fade-right">
              <h2>Team</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">

              <div className="col-lg-6">
                <div className="member" data-aos="zoom-in" data-aos-delay="100">
                  <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""/></div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                    <div className="social">
                      <Link to=""><i className="ri-twitter-fill"></i></Link>
                      <Link to=""><i className="ri-facebook-fill"></i></Link>
                      <Link to=""><i className="ri-instagram-fill"></i></Link>
                      <Link to=""> <i className="ri-linkedin-box-fill"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="member" data-aos="zoom-in" data-aos-delay="200">
                  <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""/></div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                    <div className="social">
                      <Link to=""><i className="ri-twitter-fill"></i></Link>
                      <Link to=""><i className="ri-facebook-fill"></i></Link>
                      <Link to=""><i className="ri-instagram-fill"></i></Link>
                      <Link to=""> <i className="ri-linkedin-box-fill"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="member" data-aos="zoom-in" data-aos-delay="300">
                  <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""/></div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                    <div className="social">
                      <Link to=""><i className="ri-twitter-fill"></i></Link>
                      <Link to=""><i className="ri-facebook-fill"></i></Link>
                      <Link to=""><i className="ri-instagram-fill"></i></Link>
                      <Link to=""> <i className="ri-linkedin-box-fill"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="member" data-aos="zoom-in" data-aos-delay="400">
                  <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""/></div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                    <div className="social">
                      <Link to=""><i className="ri-twitter-fill"></i></Link>
                      <Link to=""><i className="ri-facebook-fill"></i></Link>
                      <Link to=""><i className="ri-instagram-fill"></i></Link>
                      <Link to=""> <i className="ri-linkedin-box-fill"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Team Section --> */}

    {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <div className="section-title">
              <h2>Contact</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
            {/* <iframe style="border:0; width: 100%; height: 270px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe> */}
            <div className="info mt-4">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
            <div className="row">
              <div className="col-lg-6 mt-4">
                <div className="info">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info w-100 mt-4">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>
              </div>
            </div>

            <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Contact Section --> */}

  </main>
  {/* <!-- End #main --> */}

  {/* <!-- ======= Footer ======= --> */}
  <footer id="footer">

    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Bethany</h3>
            <p>
              A108 Adam Street <br/>
              New York, NY 535022<br/>
              United States <br/><br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@example.com<br/>
            </p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">Home</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">About us</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">Services</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">Terms of service</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">Privacy policy</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">Web Design</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">Web Development</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">Product Management</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">Marketing</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">Graphic Design</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>
          </div>

        </div>
      </div>
    </div>

    <div className="container d-md-flex py-4">

      <div className="me-md-auto text-center text-md-start">
        <div className="copyright">
          &copy; Copyright <strong><span>Bethany</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          {/* <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bethany-free-onepage-bootstrap-theme/ --> */}
          Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
        </div>
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
        <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
        <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
        <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
        <Link to="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
        <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
      </div>
    </div>
  </footer>
  {/* <!-- End Footer --> */}

  <Link to="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>
</div>
}

export default Home;