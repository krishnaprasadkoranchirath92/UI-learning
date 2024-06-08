import Product from "./Product";
function ProductTab() {
    let features=["reliable","fast"];
    return (<>
        <Product title="phone" price={30000} features={features} />
        <Product title="laptop" price={50000}/>
        <Product title="tab"/></>
    )
}
export default ProductTab;