import "./Product.css"
function Product({ title, price = 1, features }) {
    console.log({ features });
    console.log(features);
    return (<div className="Product">
        <h1>{title}</h1>
        <h4>price:{price / 2}</h4>
        <h4>{features}</h4></div>
    );
}
export default Product;