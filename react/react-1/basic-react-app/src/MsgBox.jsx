function MsgBox({ name, textColor }) {
    let sty = {color:{textColor}};
    console.log({sty});
    return (<>
        <p style={{color:{textColor}}}>My name is {name}</p>
    </>)

}
export default MsgBox;