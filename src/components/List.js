

const List = ({list})=>{
    let listItems = list.map(item=><li>{item}</li>);
    console.log(list);
    return(
        <ul>
            {listItems}
        </ul>
    );
}
export default List;