const List = ({list})=>{
    let listItems = list.map(item=><li>{item}</li>);
    return(
        <ul className="leftText scrollText" style={{backgroundColor:'white', borderRadius:'.5em'}}>
            {listItems}
        </ul>
    );
}
export default List;