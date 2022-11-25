import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { UploadSimple } from 'phosphor-react';
import ModalCropper from './modalCropper';
import './ImageLoader.scss';
import ButtonApp from '../Button';




const ImageLoader = ({
	setImage,
	image,
	textButton,
	minWidth,
	minHeight,
	aspectRatio,
	fieldName,
	errors,
	isFormField,
	register,
	loaderClassname,
	onClick,
}) => {
	const inputField = useRef();
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [rawImage, setRawImage] = useState(image);

	const handleClick = useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		return inputField.current.click();
	}, []);

	const handleChange = (e) => {
		e.preventDefault();
		let files;
		if (e.dataTransfer) files = e.dataTransfer.files;
		else if (e.target) files = e.target.files;
		if (files.length !== 0) {
			const reader = new FileReader();
			reader.onload = () => {
				setRawImage(reader.result);
			};
			reader.readAsDataURL(files[0]);
			setIsOpenModal(true);
		}
	};

	return (
		<>
			<input type="file" className="hide" ref={inputField} accept=".jpg,.jpeg,.png" onChange={handleChange} />
			<input className="hide" {...register(fieldName)} />
			{isFormField ? (
				<div className={`image_loader ${loaderClassname}`}>
					<ButtonApp type="button" onClick={handleClick}  className="upload-logo-button" textButton={textButton}/>
					<div className="footer">
						<p className="error">{errors[fieldName]?.message}</p>
					</div>
				</div>
			) : (
				<UploadSimple size={32} onClick={handleClick} />
			
			)}

			<ModalCropper
				isOpenModal={isOpenModal}
				minWidth={minWidth}
				minHeight={minHeight}
				setIsOpenModal={setIsOpenModal}
				rawImage={rawImage}
				aspectRatio={aspectRatio}
				addImage={setImage}
				onClick={onClick}
			/>
		</>
	);
};

ImageLoader.propTypes = {
	setImage: PropTypes.func,
	textButton: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	minWidth: PropTypes.number,
	minHeight: PropTypes.number,
	image: PropTypes.string,
	aspectRatio: PropTypes.node,
	fieldName: PropTypes.string,
	errors: PropTypes.object,
	isFormField: PropTypes.bool,
	register: PropTypes.func,
	loaderClassname: PropTypes.string,
	onClick: PropTypes.func,
};

ImageLoader.defaultProps = {
	errors: {},
	isFormField: true,
	register: () => {},
	loaderClassname: '',
	onClick:  () => {},
};

export default ImageLoader;