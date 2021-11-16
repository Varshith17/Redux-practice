import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PRODUCTS = [
  {
    id:'p1',
    price:8,
    title:'Product1',
    description:'Product des'
  },
  {
    id:'p2',
    price:10,
    title:'Product2',
    description:'Product des'
  },
  {
    id:'p3',
    price:10,
    title:'Product3',
    description:'Product des'
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS.map(product=>
           <ProductItem
           key={product.id}
           id={product.id}
           title={product.title}
           price={product.price}
           description={product.description}
         />
        )}
      </ul>
    </section>
  );
};

export default Products;
