import { FilePlus } from 'phosphor-react';
import React from 'react';
import PropTypes from "prop-types";

import './noImageSelected.scss';

const NoImageSelected = ({Text}) => {
	return (
		<div className="no_image_selected--container">
			<FilePlus size={32} />
			<span>{Text}</span>
		</div>
	);
};

NoImageSelected.propTypes = {
	Text: PropTypes.string,
  };
  
  NoImageSelected.defaultProps = {
	Text: "",

  };

export default NoImageSelected;