import Slider from "./Slider/Slider.tsx";
import {FC} from "react";
import Promotions from "./Promotions/Promotions.tsx";
import s from './MainPage.module.css'

const MainPage:FC = () => {
    return (
        <div>
            <Slider />
            <div className={s.content}>
            <Promotions />
            </div>
        </div>

    )
}

export default MainPage