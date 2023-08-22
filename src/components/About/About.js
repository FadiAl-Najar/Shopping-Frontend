import './About.css';


function About() {
  return (
    <>
      <div className="main" style={{ maxWidth: "100%" }}>
        <div
          className="container"
        >
          <div className="about-content" style={{ overflow: "hidden", margin: "90px" }}>
            <img
              src="https://img.freepik.com/premium-vector/online-shop-icon-neon-style-sign-illustration_189374-123.jpg?w=740"
              alt="About Us"
              className="about-image"
            />  
            <p>
              Welcome to our Website, you can use this website as a reference to
              the names of the products in SHEIN. We provide t-shirts that are
              existed in SHEIN now there are just t-shirts for men in the future
              we will provide many items that are existed in SHEIN.
            </p>
            <p>
              We are committed to providing you with a wide range of
              high-quality products. With a passion for customer satisfaction,
              we strive to make your shopping experience enjoyable and
              hassle-free.
            </p>
            <p>
              Our team consists of dedicated professionals who are constantly
              working to bring you the latest trends and the most sought-after
              items. Whether you're looking for fashion, electronics, home
              essentials, or gifts, we've got you covered.
            </p>
            <p>
              Your satisfaction is our top priority, and we're always here to
              assist you with any inquiries or concerns.
            </p>
            <p>
              Thank you for choosing Your Shopping. We look forward to serving
              you and exceeding your expectations!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
