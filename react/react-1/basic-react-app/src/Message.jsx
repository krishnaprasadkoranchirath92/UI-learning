import MsgBox from "./MsgBox";
function Message({ person }) {
    // let p = person.map(p => <li>{p.name}</li>)
    // let st = {color:"red"}
    return (<>
        <MsgBox name="Ram" textColor="red"/>
        <MsgBox name="Sam" textColor="blue"/>
        {person.map(p => <li style={p.age>18?{color:"red"}:{color:"green"}}>{p.name} - {p.age}{p.age>18&&<span>**</span>}</li>)}
    </>)
}
export default Message;