import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Products() {
  const [product, setProducts] = useState([]);
  const [alertStatus, setAlertStatus] = useState("");

  const getProducts = (item) => {
    const serverURL = `http://localhost:3002/getAllProduct?product=${item}`;
    axios
      .get(serverURL)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addToFav = (item) => {
    const serverURL = `http://localhost:3002/addFavProduct`;
    axios
      .post(serverURL, item)
      .then((response) => {
        console.log(response.data);
        if (response.data.name === "error") {
          setAlertStatus("Warning");
        } else {
          setAlertStatus("Success");
        }
      })
      .catch((error) => {
        console.log(error);
        setAlertStatus("Warning");
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  const alertMessages = {
    Success: "The item has been added to favourites!",
    Warning: "The item has NOT been added to favourites!",
  };
  return (
    <>
      {alertStatus && (
        <Alert variant={alertStatus}>
          {alertMessages[alertStatus]}
          <Button
            onClick={() => {
              setAlertStatus("");
            }}
          >
            Close
          </Button>
        </Alert>
      )}
      {/* {
      
      alertStatus === "Success" ? (
        <Alert variant={alertStatus}>
          The item has been added to favourites!
          <Button
            onClick={() => {
              setAlertStatus("");
            }}
          >
            Close
          </Button>
        </Alert>
      ) : alertStatus === "Warning" ? (
        <Alert variant={alertStatus}>
          The item has NOT been added to favourites!
          <Button
            onClick={() => {
              setAlertStatus("");
            }}
          >
            Close
          </Button>
        </Alert>
      ) : (
        <></>
      )} */}
      <Row xs={1} md={3} className="g-4">
        {product.map((item) => {
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
                      addToFav(item);
                    }}
                  >
                    Add To Favorite
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

export default Products;
