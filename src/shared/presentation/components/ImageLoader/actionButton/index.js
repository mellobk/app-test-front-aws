import React from 'react';
import PropTypes from 'prop-types';
import './ActionButton.scss';
import Button from './StyledComponents';
import { white } from '../../../../application/constants/color';

const ActionButton = ({ icon, text, onClickAction, className = '', type="", bgColor }) => {
	return (
		<Button className={`btn-action ${className}`} onClick={onClickAction} type={type} textColor={white} bgColor={bgColor}>
			{icon}
			{text}
		</Button>
	);
};

ActionButton.propTypes = {
	icon: PropTypes.node,
	text: PropTypes.string,
	bgColor: PropTypes.string,
	onClickAction: PropTypes.func,
	className: PropTypes.string,
	type: PropTypes.string,
};

export default ActionButton;