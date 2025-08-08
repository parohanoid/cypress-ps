function Footer() {
  return (
    <footer style={{ display: 'flex', width: '100%', minHeight: '200px' }}>
      <div style={{ width: '75%', backgroundColor: '#a0a0a0', display: 'flex', paddingLeft: '171px', paddingTop: '40px' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start' }}>
          <div className="crf-footer--links" style={{ width: '25%', textAlign: 'left' }}>
            <h4 className="crf-footer--header text-primary" style={{ minHeight: '30px', alignItems: 'center', justifyContent: 'center', marginTop: '0' }}>Customer Support</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: 'white' }}>Contact Us</a></li>
              <li><a href="#" style={{ color: 'white' }}>Order Tracker</a></li>
              <li><a href="#" style={{ color: 'white' }}>Returns & Refunds</a></li>
              <li><a href="#" style={{ color: 'white' }}>Size Guide</a></li>
              <li><a href="#" style={{ color: 'white' }}>Store Locator</a></li>
              <li><a href="#" style={{ color: 'white' }}>Site Map</a></li>
            </ul>
          </div>

          <div className="crf-footer--links" style={{ width: '25%', textAlign: 'left' }}>
            <h4 className="crf-footer--header text-primary" style={{ minHeight: '30px', alignItems: 'center', justifyContent: 'center', marginTop: '0' }}>Company Info</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: 'white' }}>About Us</a></li>
              <li><a href="#" style={{ color: 'white' }}>Careers</a></li>
              <li><a href="#" style={{ color: 'white' }}>Press</a></li>
              <li><a href="#" style={{ color: 'white' }}>Sustainability</a></li>
              <li><a href="#" style={{ color: 'white' }}>Affiliates</a></li>
              <li><a href="#" style={{ color: 'white' }}>Students</a></li>
              <li><a href="#" style={{ color: 'white' }}>Mobile Apps</a></li>
            </ul>
          </div>

          <div className="crf-footer--links" style={{ width: '25%', textAlign: 'left' }}>
            <h4 className="crf-footer--header text-primary" style={{ minHeight: '30px', alignItems: 'center', justifyContent: 'center', marginTop: '0' }}>Privacy & Terms</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: 'white' }}>Privacy & Security</a></li>
              <li><a href="#" style={{ color: 'white' }}>Statement</a></li>
              <li><a href="#" style={{ color: 'white' }}>Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="crf-footer--links crf-footer--social" style={{ width: '25%', textAlign: 'left' }}>
            <h4 className="crf-footer--header text-primary" style={{ minHeight: '30px', alignItems: 'center', justifyContent: 'center', marginTop: '0' }}>Follow Us</h4>
            <div className="crf-footer--links crf-footer--social">
              <ul className="d-lg-block  d-none d-sm-none">
                <li><a href="#" className="crf-footer--icon twitter"></a></li>
                <li><a href="#" className="crf-footer--icon facebook"></a></li>
                <li><a href="#" className="crf-footer--icon pinterest"></a></li>
                <li><a href="#" className="crf-footer--icon instagram"></a></li>
                <li><a href="#" className="crf-footer--icon googleplus"></a></li>
              </ul>
              <div className="crf-footer--newsletter">
                <div className="crf-footer--header">Email Updates</div>
                <div className="crf-footer--subheader">Exclusive sales, special offers, and more.</div>
                <input type="text" className="form-control" placeholder="Enter email address" />
                <button className="btn btn-primary">Sign up</button>
              </div>
            </div>
            <div className="crf-footer--links crf-footer-m--social d-block   d-lg-none">
              <div className="crf-footer--header text-primary">Follow Us</div>
              <ul>
                <li><a href="#" className="crf-footer--icon twitter"></a></li>
                <li><a href="#" className="crf-footer--icon facebook"></a></li>
                <li><a href="#" className="crf-footer--icon pinterest"></a></li>
                <li><a href="#" className="crf-footer--icon instagram"></a></li>
                <li><a href="#" className="crf-footer--icon googleplus"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: '25%', backgroundColor: 'black' }}>
        <div className="crf-footer--logo d-flex">
          <div className="container justify-content-start align-items-center d-flex flex-column">
            <img src="https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/logos/pluralsight-white.png" alt="Pluralsight Logo" />
            <div>This site is created for demonstrative purposes only and does not offer any real products or services.</div>
          </div>
        </div>
      </div>
      <div className="crf-footer--copyright text-primary">@Pluralsight 2018</div>

    </footer>
  );
}

export default Footer;