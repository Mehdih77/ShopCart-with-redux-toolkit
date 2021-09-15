import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addShopItem, fetchProduct } from "../redux/shopSlice";

export default function Home() {

    const products = useSelector(state => state.shop.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch])

    // add items To basket shop
    const addToShop = (produc) => {
        dispatch(addShopItem(produc))
    };


    return (
        <section className='container'>
            <div className="row m-3">
            {products.map(item => (
                    <div className="custom-card card m-3" style={{width: '18rem'}}>
                        <img style={{width: "130px"}} src={item.image} className="card-img-top" alt="products shop"/>
                        <div className="card-body custom-card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">${item.price}</p>
                          <button onClick={() => addToShop(item)} className="btn btn-primary">Add To Basket</button>
                        </div>
                     </div>
            ))}
            </div>
        </section>
    )
}