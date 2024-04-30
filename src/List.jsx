function List(props) {
    
    const category = props.category;
    const itemList = props.itemList;

    const listItems = itemList.map((item) => {
        return <li key={item.id}>{item.name}</li>
    });


    return (
        <>
            <h3>{category}</h3>
            <ol>{listItems}</ol>
        </>
    );
}

export default List