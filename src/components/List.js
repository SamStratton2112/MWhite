const List = ({list})=>{
    let listItems = list.map(item=><li>{item}</li>);
    return(
        <ul>
            {listItems}
        </ul>
    );
}
export default List;