import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import NavBar from './NavBar';



const categories =
    [...new Set(Menu.map((curElement) => {
        return curElement.category;
    })
    ), 'All'
    ]



const Resturant = () => {
    const [menuState, setMenustate] = useState(Menu);
    const [categoriesMenu, setcategoriesMenu] = useState(categories)
    const filterItem = (category) => {
        if (category === 'All') {
            setMenustate(Menu);
            return;
        }
        const updateList = Menu.filter((currentValue) => {
            return currentValue.category === category;
        }
        );

        setMenustate(updateList)

    }
    return <>
        <NavBar filterItem={filterItem} categories={categoriesMenu} />
        <MenuCard menuState={menuState} />;
    </>

}

export default Resturant;
