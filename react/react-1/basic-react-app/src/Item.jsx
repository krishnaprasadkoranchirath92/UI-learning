import Details from "./Details";
import Price from "./Price";
function Item({ title, description, price, idx }) {
    let s = { border: "solid" ,margin:"10px", borderRadius:"10px"};
    return <div style={s}><Details title={title[idx]}
        desc={description[idx]} />
        <Price price={price[idx]} /></div>
}
export default Item;