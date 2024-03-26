import s from './PromotionItem.module.css'
import PromotionProductImg1 from './../../../../assets/PromotionProductImg1.png'

const PromotionItem = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={PromotionProductImg1} alt='ProductImg'/>
            </div>
            <div className={s.description}>
                <div className={s.price}>
                    <div className={s.priceNumber}><p>44,50 ₽</p><p>50,50 ₽ </p></div>
                    <div className={s.priceText}><p>С картой</p><p>Обычная</p></div>
                </div>
            </div>
        </div>
    )
}

export default PromotionItem