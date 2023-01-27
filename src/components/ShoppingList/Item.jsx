function Item({ item, addItem }) {

    return (
        <div className="item">
            <img src={item.image} alt={item.name} onClick={() => addItem(item)}/>
            <h2>{item.name}</h2>
            <span>£{item.price.toFixed(2)}</span>
        </div>
    )
}

export default Item