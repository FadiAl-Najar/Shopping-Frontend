import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function FavProducts() {
  const [favArr, setFavArr] = useState([]);

  const getFavProduct = () => {
    const serverURL = `http://localhost:3002/getFavProducts`;
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
    const serverURL = `http://localhost:3002/deleteFavProduct/${cardID}`
    axios.delete(serverURL, cardID)
        .then(response => {
            console.log(response.data);
            setFavArr(prevArr => prevArr.filter(item => item.goods_id !== cardID));
        }).catch(error =>{
            console.log(error);
        })
  }

  useEffect(() => {
    getFavProduct();
  }, []);
  return (
    <>
      <h1>Hello from favorite</h1>
      <Row xs={1} md={3} className="g-4">
        {favArr.map((item) => {
          return (
            <Col key={item.goods_id}>
              <Card key={item.goods_id}>
                <Card.Img variant="top" src={item.goods_img} />
                <Card.Body>
                  <Card.Title>{item.goods_name}</Card.Title>
                  <Card.Text>{item.amount}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                        deleteFavProducts(item.goods_id);
                    }}
                  >
                    Delete The Item
                  </Button>
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
