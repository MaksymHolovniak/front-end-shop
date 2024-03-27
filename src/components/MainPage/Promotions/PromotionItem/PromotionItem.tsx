import s from './PromotionItem.module.css'
import PromotionProductImg1 from './../../../../assets/PromotionProductImg1.png'
import {Rate} from "antd";
import starRatting from './../../../../assets/icons/starRatting.png'
const PromotionItem = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={PromotionProductImg1} alt='ProductImg'/>
            </div>
            <div className={s.description}>
                <div className={s.price}>
                    <div className={s.priceNumber}><p className={s.priceNumberCard}>44,50 ₽</p><p className={s.priceNumberStandart}>50,50 ₽ </p></div>
                    <div className={s.priceText}><p>С картой</p><p>Обычная</p></div>
                </div>
                <div className={s.descriptionText}>
                    <p>Г/Ц Блинчики с мясом вес, Россия</p>
                    <Rate disabled defaultValue={2} character={<img src={starRatting} alt={'starRatting'} />} className={s.ratting} />
                </div>
                <button className={s.basketButton}>В корзину</button>
                </div>
            </div>
    )
}

export default PromotionItem