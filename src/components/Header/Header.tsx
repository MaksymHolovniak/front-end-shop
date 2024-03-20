import {FC} from "react";
import s from './Header.module.css'
import Logo from './../../assets/logo.png'
import FavoritesIcon from './../../assets/icons/favorites.png'
import OrdersIcon from './../../assets/icons/orders.png'
import BasketIcon from './../../assets/icons/basket.png'
import DropDown from "./DropDown/DropDown.tsx";
import Catalog from "./Catalog/Catalog.tsx";

const Header: FC = () => {
    return (
        <div className={s.content}>
            <img className={s.logo} src={Logo} alt={Logo} />
            <Catalog />
            <div className={s.profile}>
                <button className={s.profileItem}>
                    <img src={FavoritesIcon} alt={'Favorites'} className={s.profileIcon}/>
                    <p className={s.profileText}>Избранное</p>
                </button>
                <button className={s.profileItem}>
                    <img src={OrdersIcon} alt={'Orders'} className={s.profileIcon}/>
                    <p className={s.profileText}>Заказы</p>
                </button>
                <button className={s.profileItem}>
                    <img src={BasketIcon} alt={'Basket'} className={s.profileIcon}/>
                    <p className={s.profileText}>Корзина</p>
                </button>

                    <div>
                        <DropDown />
                    </div>
            </div>
        </div>
    )
}

export default Header