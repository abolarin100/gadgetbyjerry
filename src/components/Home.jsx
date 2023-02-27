import React from 'react';
import "../css/Home.css"

const Home = () => {
    return (
        <div className='head'>
            <section className="py-5 text-center container ">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">My Gadget Blog</h1>
        <p className="home">We have collection of gadgets and a brief informaton about each. Everyone is welcome to add any gadget of choice and brief informaton about them. We strive to ensure that we keep you informed on the latest technologies, the best and help you decide what is best for you.</p>
        <p>
          <a href="/blog" className="btn btn-success my-2">Check out our gadget collection</a>
          <a href="/addGadgets" className="btn btn-secondary my-2">Add to the gadget collection</a>
        </p>
      </div>
    </div>
  </section>
        </div>
    );
}

export default Home;
