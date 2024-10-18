const List = ({list})=>{
    let listItems = list.map(item=><li>{item}</li>);
    return(
        <ul className="leftText scrollText">
            {listItems}
        </ul>
    );
}
export default List;