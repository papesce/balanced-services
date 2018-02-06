import React from "react";
import "./Footer.css";

export default () => (
  <footer className="page-footer center-on-small-only blue-grey lighten-5 pt-0">
    <div className="footer-nav">
      <div className="container">
        {/* <!--Grid row--> */}
        <div className="row py-4 d-flex align-items-center">
          {/* <!--Grid column--> */}
          <div className="col-12 col-md-5 text-left mb-4 mb-md-0">
            <h6 className="mb-0 white-text text-center text-md-left">
              <strong>Get connected with us on social networks!</strong>
            </h6>
          </div>
          {/* <!--Grid column--> */}
          <div className="col-12 col-md-7 text-center text-md-right">
            {/* <!--Facebook--> */}
            <a className="icons-sm fb-ic">
              <i className="fa fa-facebook white-text mr-lg-4"> </i>
            </a>
            {/* <!--Twitter--> */}
            <a className="icons-sm tw-ic">
              <i className="fa fa-twitter white-text mr-lg-4"> </i>
            </a>
            {/* <!--Google +--> */}
            <a className="icons-sm gplus-ic">
              <i className="fa fa-google-plus white-text mr-lg-4"> </i>
            </a>
            {/* <!--Linkedin--> */}
            <a className="icons-sm li-ic">
              <i className="fa fa-linkedin white-text mr-lg-4"> </i>
            </a>
            {/* <!--Instagram--> */}
            <a className="icons-sm ins-ic">
              <i className="fa fa-instagram white-text mr-lg-4"> </i>
            </a>
          </div>
          {/* <!--Grid column--> */}
        </div>
      </div>
    </div>
    {/* <!--Footer Links--> */}
    <div className="container mt-5 mb-4 text-center text-md-left">
        <div className="row mt-3">

            {/* <!--First column--> */}
            <div className="col-md-3 col-lg-4 col-xl-3 mb-r dark-grey-text">
                <h6 className="title font-bold"><strong>Balanced Services</strong></h6>
                <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                <p>We are here to help you achieve your goals</p>
            </div>
            {/* <!--/.First column--> */}

            {/* <!--Second column--> */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-r dark-grey-text">
                <h6 className="title font-bold"><strong>Products</strong></h6>
                <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                <p><a href="#!" className="dark-grey-text">Balanced Life</a></p>
                <p><a href="#!" className="dark-grey-text">Balanced Gym</a></p>
            </div>
            {/* <!--/.Second column--> */}


            {/* <!--Fourth column--> */}
            <div className="col-md-4 col-lg-3 col-xl-3 dark-grey-text">
                <h6 className="title font-bold"><strong>Contact</strong></h6>
                <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                <p><i className="fa fa-home mr-3"></i> La Plata, BSAS 1900, AR</p>
                <p><i className="fa fa-envelope mr-3"></i> info@balanced.com</p>
                <p><i className="fa fa-phone mr-3"></i> + 54 221 451 4157</p>
            </div>
            {/* <!--/.Fourth column--> */}

        </div>
    </div>
    {/* <!--/.Footer Links--> */}

    {/* <!-- Copyright--> */}
    <div className="footer-copyright">
      <div className="container-fluid">
        © 2018 Copyright:{" "}
        <a href="https://www.balancedservies.com">
          <strong> Balanced Services</strong>
        </a>
      </div>
    </div>
    {/* <!--/.Copyright --> */}
  </footer>
);
