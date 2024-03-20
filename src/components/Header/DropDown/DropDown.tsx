import {FC} from 'react';
import type {MenuProps} from 'antd';
import {Dropdown} from 'antd';
import DownOutlined from './../../../assets/icons/downOutlined.png'
import s from './DropDown.module.css'
import UserIcon from "../../../assets/icons/user.png";

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="http://localhost:5173/">
                Профиль
            </a>
        ),

    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="http://localhost:5173/">
                Выйти
            </a>
        ),
    }
];

const DropDown: FC = () => {
    return (
        <Dropdown menu={{items}} placement={'bottomLeft'}>
            <a onClick={(e) => e.preventDefault()}>
                    <div className={s.user}>
                        <div className={s.userInfo}>
                            <img src={UserIcon} alt={'User'} className={s.userIcon}/>
                            <p className={s.userName}>Алексей</p>
                        </div>
                        <div>
                            <img src={DownOutlined} alt={'DownOutlined'}/>
                        </div>
                    </div>
            </a>
        </Dropdown>
    )
}

export default DropDown