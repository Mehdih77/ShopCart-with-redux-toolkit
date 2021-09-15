import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom"
import { getTotal } from "../redux/shopSlice";

export default function Navbar() {

    const totalQty = useSelector(state => state.shop.cartTotalQty);
    const getCurrentShopItems = useSelector(state => state.shop.currentShopItems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotal())
    }, [dispatch,getCurrentShopItems])

    return (
        <nav className='shop-navbar'>
            <Link to='/'>
                <h1>ShopCart</h1>
            </Link>

            <Link to='/basket'>
                <div className='shop-basket-icon'>
                    <i className="fas fa-shopping-cart"></i>
                    -
                    <span>{totalQty}</span>
                </div>
            </Link>
        </nav>
    )
}
