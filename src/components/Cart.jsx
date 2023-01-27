function Cart({ data }) {
  function SumTotal() {
    let total = data.reduce((a, b) => a + b.price, 0);
    return <h2>Total: £{total.toFixed(2)}</h2>;
  }

  function List() {
    if (data.length === 0) {
      return <h3>Your cart is empty.</h3>;
    } else {
      return (
        <ol>
          {data.map((data) => {
            return (
              <li key={data.id}>
                {data.name} - £{data.price.toFixed(2)}
              </li>
            );
          })}
        </ol>
      );
    }
  }

  return (
    <div className="block cart">
      <h2>Your Cart</h2>
      <div className="sum-total">
        <List />
        <SumTotal />
      </div>
    </div>
  );
}

export default Cart;
