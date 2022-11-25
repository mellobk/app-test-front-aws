import * as yup from 'yup';
import authFields from '../constants/authenticationFields';
import { EMPTY_FIELD } from '../../../../shared/application/constants/messages/error-messages';

export const authValidation = {};
authValidation[authFields.USER_NAME] = yup.string().email().required(EMPTY_FIELD);
authValidation[authFields.USER_PASSWORD] = yup.string().required(EMPTY_FIELD);

export const authValidationSchema = yup.object().shape(authValidation);
