import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { colorsApp } from '../../../../authentication/application/selectors/user';
import { getDashboardMenu } from '../../../application/selectors/home';
import './DashBoardMenu.scss';
import {Item} from './StyledComponents';


const DashBoardMenu = ({id}) => {

	const menu = useSelector(getDashboardMenu);
	const colors = useSelector(colorsApp);
	const { secundaryColor } = colors;


	return (
		<div className="dashboard-menu-container">
           <div className="items-container">
		   {menu?.map((menuItem, key) =>{
			 const active = menuItem.id===id
				return  <div className="dashboard-item" key={key}>
				<Link to={menuItem.link}>
				<Item className="items"
				 borderColor={active ? secundaryColor || "#7D81E0" : 'transparent'}
				 fontWeight={active ? "bold" : 'normal'}>
				{menuItem.icon}
				{menuItem.title}
				</Item>
				</Link>
				</div>
			})}
		   </div>
		
		
		</div>
	);
};

DashBoardMenu.propTypes = {
	id: PropTypes.number,
  };

  
export default DashBoardMenu;
