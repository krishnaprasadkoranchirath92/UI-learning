import Product from "./Product";
function ProductTab() {
    let features = ["reliable", "fast"];
    let features2 = { a: "reliable", b: "fast" };
    return (<>
        <Product title="phone" price={30000} features={features} featureObj={features2} />
        <Product title="laptop" price={50000} featureObj={features2} features={features} />
        <Product title="tab" featureObj={features2} features={features} /></>
    )
}
export default ProductTab;