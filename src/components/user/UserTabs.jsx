import { useState } from 'react';
import { USER_TABS } from '../../utils/constans'
import  LockIcon  from "@mui/icons-material/Lock"
import { Alert } from '@mui/material';

export const UserTabs = ({ openFavorite }) => {
    const [activeTab, setActiveTab] = useState(USER_TABS[0])
return (
<div className="user-tabs">
    <ul className="user-tabs__items">
        {USER_TABS.map((tab) => {
            const { slug, title } = tab

            return (
                <li 
                key={slug}
                onClick={() => setActiveTab(tab)}
                className={`${activeTab.slug === slug ? 'active' : ''}`} 
                >
                    {!openFavorite && slug === 'liked' && <LockIcon />}
                    <span>{title}</span>
                </li>
            )
        })}
    </ul>
    <div className="user-tabs__content">
        { !openFavorite && activeTab.slug === 'liked' 
        ? <Alert severity='info'>This user`s liked videos are privates</Alert> 
        : activeTab.content
        }
    </div>
</div>
);
}