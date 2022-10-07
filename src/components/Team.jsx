import React from 'react'
import { Link } from 'react-router-dom'

function Team() {
  return (
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
  )
}

export default Team