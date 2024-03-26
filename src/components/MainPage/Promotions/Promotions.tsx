import {FC} from "react";
import s from './Promotions.module.css'
import arrowRight from './../../../assets/icons/arrowRight.png'
import PromotionItem from "./PromotionItem/PromotionItem.tsx";
const Promotions:FC = () => {
    return (
    <div className={s.content}>
        <div className={s.header}>
        <h2 className={s.title}>Акции</h2>
         <a href='#' className={s.allPromotionsLink}>Все акции<img src={arrowRight} alt='arrowRight' /> </a>
        </div>
        <PromotionItem />
    </div>
    )
}

export default Promotions