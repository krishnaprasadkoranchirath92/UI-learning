function Price({price}) {
let s = {backgroundColor:"yellow"};
let s1= {textDecoration:"line-through"}
    return (<div style={s}>Price :
    <span style={s1}>{price[1]}</span> &nbsp; &nbsp; &nbsp;
    <span>{price[0]}</span>
    </div>);
}
export default Price;