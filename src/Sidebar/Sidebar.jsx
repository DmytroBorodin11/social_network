import React from "react";
import '../css/Sidebar.css';
import MenuItem from "./MenuItem";
import { connect } from 'react-redux';

const Sidebar = (props) => {

    let menuItemsComponentsArr = props.sidebar.menuItems.map(menuLink => <MenuItem id={menuLink.id} key={menuLink.id} path={menuLink.path} iconName={menuLink.iconName} itemName={menuLink.itemName}/>)

    return (
        <aside className={"sidebar" + ' ' + (props.sidebar.mini ? 'mini' : '')}>
            {menuItemsComponentsArr}
        </aside>
    )
}

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
    }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;