import * as yup from 'yup';
import {projectFields} from '../constants/form';

import { EMPTY_FIELD } from '../constants/messages/error-messages';


export const projectValidation = {};
projectValidation[projectFields.LOGO] = yup.string().required(EMPTY_FIELD);
export const projectSchema = yup.object().shape(projectValidation);


export const SET_VALUE_OPTIONS = {
	shouldValidate: true,
	shouldDirty: true,
};

