/** Displays list content */

const List = ({list})=>{
    let listItems = list.map(item=><li key={item}>{item}</li>);
    return(
        <ul className="leftText scrollText" style={{backgroundColor:'rgb(244, 241, 237)', borderRadius:'.5em', color: 'black'}}>
            {listItems}
        </ul>
    );
}
export default List;