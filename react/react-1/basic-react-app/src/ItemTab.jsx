import Item from "./Item";
export default function ItemTab() {
    let title=["iPhone", "MacBook","Tablet","Earphone"];
    let description=[["good1","bad1"],["good2","bad2"],["good3","bad3"],["good4","bad4"]];
    let price=[["1","11"],["12","112"],["13","113"],["14","114"]];
    let styleTitle={width:"200px", border:"solid"}
    let s = {display:"flex", flexwrap:"wrap"};
    return (
        <div style={s}>
        <Item title={title} description={description} price={price} idx={0} />
        <Item title={title} description={description} price={price} idx={1} />
        <Item title={title} description={description} price={price} idx={2} />
        <Item title={title} description={description} price={price} idx={3} />
        </div>
    );
}