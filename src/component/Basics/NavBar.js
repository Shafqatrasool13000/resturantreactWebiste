import React from 'react'

const NavBar = ({ filterItem, categories }) => {

    return <>
        <nav className="navbar">
            <div className="btn-group">
                {categories.map((curElement) => {

                    return <button className="btn-group__item" onClick={() => filterItem(curElement)}>{curElement}</button>
                })
                }



            </div>
        </nav>
    </>


}

export default NavBar
