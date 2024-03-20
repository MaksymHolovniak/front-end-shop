import s from "./Catalog.module.css";
import {Button, Input} from "antd";
import MenuIcon from "../../../assets/icons/menu.png";
import SearchIcon from "../../../assets/icons/search.png";
import {FC} from "react";

const Catalog:FC = () => {
    return (
    <div className={s.catalog}>
        <Button className={s.headerButton}><img src={MenuIcon}/><p className={s.buttonText}>Каталог</p></Button>
        <Input className={s.inputSearch} rootClassName={s.inputSearchRoot} placeholder={'Найти товар'}
               suffix={<img src={SearchIcon} alt={'Search'}/>}/>
    </div>
    )
}

export default Catalog