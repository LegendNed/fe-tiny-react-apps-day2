import data from '../../assets/data'

import Item from './Item'

function ShoppingList({ addItem }) {

    return (
        <div className="block shopping-list">
            {data.map(data => {
                return <Item key={data.id} item={data} addItem={addItem}/>
            })}
        </div>
    )
}

export default ShoppingList