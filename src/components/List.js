const List = ({list})=>{
    let listItems = list.map(item=><li>{item}</li>);
    return(
        <ul className="leftText scrollText" style={{backgroundColor:'rgb(255, 255, 255,.7', borderRadius:'.5em'}}>
            {listItems}
        </ul>
    );
}
export default List;