import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const products = [
  {
    id: "1",
    name: "Smartphone",
    description: "Description of Smartphone",
    price: 500,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
  {
    id: "2",
    name: "Laptop",
    description: "Description of Laptop",
    price: 1200,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
  {
    id: "3",
    name: "Headphones",
    description: "Description of Headphones",
    price: 100,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
  {
    id: "4",
    name: "Tablet",
    description: "Description of Tablet",
    price: 300,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
  {
    id: "5",
    name: "Camera",
    description: "Description of Camera",
    price: 800,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
  {
    id: "6",
    name: "Monitor",
    description: "Description of Monitor",
    price: 600,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
  {
    id: "7",
    name: "Smartwatch",
    description: "Description of Smartwatch",
    price: 250,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
  {
    id: "8",
    name: "Printer",
    description: "Description of Printer",
    price: 350,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
  {
    id: "9",
    name: "Speaker System",
    description: "Description of Speaker System",
    price: 400,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
  {
    id: "10",
    name: "Wireless Router",
    description: "Description of Wireless Router",
    price: 80,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
];

const ProductDetails = () => {
  const { productId } = useParams();

  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <>
        <Header />
        <main className="container pb-4">
          <div className="card my-5 p-4">
            <h2>Product Not Found</h2>
            <p>The product with ID {productId} does not exist.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container pb-4">
        <div className="card my-5 p-4">
          <h2>Product Details</h2>

          <div className="row my-3">
            <div className="col-md-3">
              <img src={product.productImg1} alt="Product Image 1" />
            </div>
            <div className="col-md-3">
              <img src={product.productImg2} alt="Product Image 2" />
            </div>
            <div className="col-md-3">
              <img src={product.productImg3} alt="Product Image 3" />
            </div>
          </div>

          <p>ID: {product.id}</p>
          <p>Name: {product.name}</p>
          <p>Description: {product.description}</p>
          <p>Price: INR {product.price}</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
