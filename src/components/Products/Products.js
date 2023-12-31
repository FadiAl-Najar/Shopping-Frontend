import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./product.css";
import DotsContainer from "../DotsContainer/DotsContainer";

function Products() {
  const [product, setProducts] = useState([]);
  const [showDots, setShowDots] = useState(false);
  const notify = () => toast.success("Added to favorites!");
  const notify2 = () => toast.warn("Item already exists in favorites!");

  const getProducts = (item) => {
    setShowDots(true);
    const serverURL = `${process.env.REACT_APP_serverURL}/getAllProduct?product=${item}`;
    axios
      .get(serverURL)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setShowDots(false);
      });
  };

  const addToFav = (item) => {
    const serverURL = `${process.env.REACT_APP_serverURL}/addFavProduct`;
    axios
      .post(serverURL, item)
      .then((response) => {
        console.log(response.data);
        if (response.data.name === "error") {
          notify2();
        } else {
          notify();
        }
      })
      .catch((error) => {
        console.log(error);
        notify2();
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ToastContainer />

      <Row xs={1} md={4} className="g-4">
        {showDots ? (
          <DotsContainer isVisible={showDots} />
        ) : (
          product.map((item) => {
            return (
              <Col className="col-md-3 py-2" key={item.goods_id}>
                <Card 
                  className="card h-100 d-flex flex-column"
                  key={item.goods_id}
                >
                  <Card.Img
                    className="img"
                    variant="top"
                    src={item.goods_img}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{item.goods_name}</Card.Title>
                    <Card.Text>{item.amount}$</Card.Text>
                    <button
                      className="btn_add mt-auto"
                      onClick={() => {
                        addToFav(item);
                      }}
                    >
                      <span className="text">Button</span>
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        )}
      </Row>
    </>
  );
}

export default Products;
