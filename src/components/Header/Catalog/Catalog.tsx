import React from 'react';
import s from "./Catalog.module.css";
import {AutoComplete, Button} from "antd";
import MenuIcon from "../../../assets/icons/menu.png";
import SearchIcon from "../../../assets/icons/search.png";
import {FC} from "react";
import type { DefaultOptionType } from 'antd/es/select';

const Catalog:FC = () => {
    const [options, setOptions] = React.useState<DefaultOptionType[]>([]);
    const handleSearch = (value: string) => {
        setOptions(() => {
            if (!value || value.includes('@')) {
                return [];
            }
            return ['Молоко', 'Коктейль молочный', 'Йогурт молочный'].map<DefaultOptionType>((domain) => ({
                label: `${domain}`,
                value: `${domain}`,
            }));
        });
    };
    return (
    <div className={s.catalog}>
        <Button className={s.headerButton}><img src={MenuIcon}/><p className={s.buttonText}>Каталог</p></Button>
        <AutoComplete
            suffixIcon={<img src={SearchIcon} alt={'Search'} /> }
            className={s.inputSearch}
            onSearch={handleSearch}
            placeholder="Найти товар"
            options={options}
        />
    </div>
    )
}

export default Catalog