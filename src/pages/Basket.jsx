import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addShopItem, getTotal, removeShopItem, clearAll} from "../redux/shopSlice";

export default function Basket() {

    const dispatch = useDispatch();
    const getCurrentShopItems = useSelector(state => state.shop.currentShopItems);
    const totalPrice = useSelector(state => state.shop.cartTotalPrice);

    useEffect(() => {
        dispatch(getTotal())
    }, [getCurrentShopItems, dispatch])

    // add item To shop basket 1 by 1
    const addToShop = (produc) => {
        dispatch(addShopItem(produc))
    };

    // remove items from shop basket 1 by 1
    const removeFromShop = (produc) => {
        dispatch(removeShopItem(produc))
    }

    // clear all items from shop basket
    const clearAllItemsFromBasket = () => {
        dispatch(clearAll());
    }

    const basketItems = getCurrentShopItems && getCurrentShopItems.map(item => (
        <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img style={{width: "130px"}} src={item.image} className="img-fluid rounded-start" alt="product basket shop"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">
                                <button onClick={() => addToShop(item)} className="btn btn-success">+</button>
                                <span className='mx-2'>{item.qty}</span>
                                <button onClick={() => removeFromShop(item)}  className="btn btn-danger">-</button>
                                </p>
                                <p className="card-text">
                                    <strong className="text-muted">${item.price}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
    ))

    return (
        <section className='container my-2'>
            <div className="row col-12">
                {getCurrentShopItems.length > 0 ? basketItems : <h3>Your basket is empty</h3>}
                <button className="btn btn-danger my-3" onClick={clearAllItemsFromBasket}>Clear All</button>
            </div>
            <div className="row col-12 text-center">
                <h2>Total Price: $ {totalPrice}</h2>
                <button className='btn btn-primary'>Check Out</button>
            </div>
        </section>
    )
}