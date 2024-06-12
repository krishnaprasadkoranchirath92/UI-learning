import "./Product.css"
function Product({ title, price = 1, features, featureObj }) {
    // console.log({ features });
    console.log(featureObj.a);
    const list = features.map(f => <li>{f}</li>);
    // let d = price > 10000 ? "5% Discount" : "";
    let d = price > 1000;
    let sty = { backgroundColor: d ? "yellow" : "" };
    let s1 = { color: price < 10 ? "red" : "", backgroundColor: "pink" };

    return (<div className="Product" style={sty}>
        <h1>{title}</h1>
        <h4 style={s1}>price:{price / 2}{price < 10 && <span>**</span>} </h4>
        <h4>{features.map(f => <li>{f}</li>)}</h4>
        {/* <p>{featureObj.a}, {featureObj.b}</p> */}
        {d && <p>5% Discount</p>}
    </div>
    );
}
export default Product;