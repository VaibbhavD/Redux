import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummy = [
  {
    id: "a1",
    title: "Test",
    Price: 10,
    Description: "This is a first product - amazing!",
  },
  {
    id: "a2",
    title: "Best",
    Price: 20,
    Description: "This ARe Good NAd Best libelities - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            Price={item.Price}
            Description={item.Description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
