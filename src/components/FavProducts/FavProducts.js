import axios from "axios";
import "./fav.css";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ToastContainer, toast } from "react-toastify";

function FavProducts() {
  const [favArr, setFavArr] = useState([]);
  const notify = ()=> toast.warn ("The Item has been Deleted")

  const getFavProduct = () => {
    const serverURL = `${process.env.REACT_APP_serverURL}/getFavProducts`;
    axios
      .get(serverURL)
      .then((response) => {
        console.log(response.data);
        setFavArr(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteFavProducts = (cardID) => {
    const serverURL = `${process.env.REACT_APP_serverURL}/deleteFavProduct/${cardID}`;
    axios
      .delete(serverURL, cardID)
      .then((response) => {
        console.log(response.data);
        setFavArr((prevArr) =>
          prevArr.filter((item) => item.goods_id !== cardID));
          notify();
      })
      .catch((error) => {
        console.log(error);
      }).finally(()=>{
      })
  };

  useEffect(() => {
    getFavProduct();
  }, []);
  return (
    <>
    <ToastContainer />
      <h3>List for your favorite</h3>
      <Row xs={1} md={4} className="g-4">
        {favArr.map((item) => {
          return (
            <Col className="col-md-3 py-2" key={item.goods_id}>
              <Card
                className="card h-100 d-flex flex-column"
                key={item.goods_id}
              >
                <button
                      className="button mt-auto"
                      onClick={() => {
                        deleteFavProducts(item.goods_id);
                      }}
                    >
                      <svg viewBox="0 0 448 512" className="svgIcon">
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                      </svg>
                    </button>
                <Card.Img className="img" variant="top" src={item.goods_img} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{item.goods_name}</Card.Title>
                  <Card.Text>{item.amount}</Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default FavProducts;
