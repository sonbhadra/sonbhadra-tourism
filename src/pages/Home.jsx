import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import CountsSections from "../components/CountsSections";
import ClientsSection from "../components/ClientsSection";
import WhyUsSection from "../components/WhyUsSection";
import CtaSection from "../components/CtaSection";
import ServicesSection from "../components/ServicesSection";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
    return <div>
    <Header />

    <Hero />

  <main id="main">

    {/* <!-- ======= Clients Section ======= --> */}
    <ClientsSection />
    {/* <!-- End Clients Section --> */}

    {/* <!-- ======= About Section ======= --> */}
    <About />
    {/* <!-- End About Section --> */}

    {/* <!-- ======= Counts Section ======= --> */}
    <CountsSections />
    {/* <!-- End Counts Section --> */}

    {/* <!-- ======= Why Us Section ======= --> */}
    <WhyUsSection />
    {/* <!-- End Why Us Section --> */}

    {/* <!-- ======= Cta Section ======= --> */}
    <CtaSection />
    {/* <!-- End Cta Section --> */}

    {/* <!-- ======= Services Section ======= --> */}
    <ServicesSection />
    {/* <!-- End Services Section --> */}

    {/* <!-- ======= Portfolio Section ======= --> */}
    <Portfolio />
    {/* <!-- End Portfolio Section --> */}

    {/* <!-- ======= Testimonials Section ======= --> */}
    <Testimonials />
    {/* <!-- End Testimonials Section --> */}

    {/* <!-- ======= Team Section ======= --> */}
    <Team />
    {/* <!-- End Team Section --> */}

    {/* <!-- ======= Contact Section ======= --> */}
    <Contact />
    {/* <!-- End Contact Section --> */}

  </main>
  {/* <!-- End #main --> */}

  {/* <!-- ======= Footer ======= --> */}
  <Footer />
  {/* <!-- End Footer --> */}

  <Link to="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>
</div>
}

export default Home;