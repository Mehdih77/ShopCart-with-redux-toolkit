import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchProduct, getTotal, addShopItem, removeShopItem } from './redux/shopSlice';

function App() {

  const dispatch = useDispatch();
  
  const products = useSelector(state => state.shop.products);

  const getCurrentShopItems = useSelector(state => state.shop.currentShopItems);
  const totalPrice = useSelector(state => state.shop.cartTotalPrice);
  const totalQty = useSelector(state => state.shop.cartTotalQty);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch])

  useEffect(() => {
    dispatch(getTotal())
  }, [getCurrentShopItems,dispatch]) 

  const addToShop = (produc) => {
    dispatch(addShopItem(produc))
  };

  const removeFromShop = (produc) => {
    dispatch(removeShopItem(produc))
  }

  return (
    <div className="App">
    <p>qty: {totalQty}</p>
    <p>price: {totalPrice}</p>
      <div>{products.map(item => (
        <div key={item.id}>
        <p>{item.title} ${item.price}</p>
        <button onClick={() => addToShop(item)}>add</button>
        </div>
      ))}
      </div>
      <hr />
      <div>
        {getCurrentShopItems.map(item => (
          <>
            <p key={item.id}>{item.title} -- {item.price} -- {item.qty}</p>
            <button onClick={() => removeFromShop(item)}>remove</button>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
