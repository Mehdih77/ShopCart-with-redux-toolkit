import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTotal, removeShopItem} from "../redux/shopSlice";

export default function Basket() {

    const dispatch = useDispatch();

    const getCurrentShopItems = useSelector(state => state.shop.currentShopItems);
    const totalPrice = useSelector(state => state.shop.cartTotalPrice);

    useEffect(() => {
        dispatch(getTotal())
    }, [getCurrentShopItems, dispatch])

    const removeFromShop = (produc) => {
        dispatch(removeShopItem(produc))
    }

    return (
        <div>
            
        </div>
    )
}
