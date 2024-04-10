import { Footer, NavBar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      {/* HEADER */}
      <div className="container-fluid background-container">
        <div className="intro-container">
          <h4 className="intro-text">
            We Crush Your
            <br /> Competitors, Goals, And
            <br /> Sales Records - Without
            <br /> The B.S.
          </h4>
          <button type="button" className="btn">
            Get free consultation
          </button>
        </div>
      </div>
      {/* SERVICE ONE */}
      <div className="container d-flex flex-column flex-md-row align-items-center mb-5 mt-5">
        <img className="me-md-5 p-0" src="/image-1.png" alt="Bootstrap" />
        <div className="d-flex flex-column align-items-md-start align-items-center service">
          <h4 className="title">Web & Mobile App Development</h4>
          <p className="service-body">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <button type="button" className="btn">
            Learn More
          </button>
        </div>
      </div>
      {/* SERVICE TWO */}
      <div className="container d-flex flex-column flex-md-row align-items-center mb-5">
        <div className="d-flex flex-column align-items-md-start align-items-center service">
          <h4 className="title">Digital Strategy Consulting</h4>
          <p className="service-body">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <button type="button" className="btn">
            Learn More
          </button>
        </div>
        <img className="ms-md-5 p-0" src="/image-2.png" alt="Bootstrap" />
      </div>
      {/* FAQ */}
      <div className="container d-flex flex-column align-items-center faq-container">
        <h2 className="title">Frequently asked questions</h2>
        <div className="accordion mb-5 pb-4" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                suscipit id ipsum. Elementum ultrices nulla faucibus odio est
                sed aliquam. Sapien massa morbi risus sagittis tortor integer.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Lorem ipsum dolor sit amet consectetur. Tortor scelerisque
                integer?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices. Cursus sit amet dictum sit amet justo donec
                enim diam porttitor lacus luctus accumsan tortor posuere.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque
                nunc?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices. Cursus sit amet dictum sit amet justo donec
                enim diam porttitor lacus luctus accumsan tortor posuere.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
