import * as yup from 'yup';
import {sendEmailFields} from '../constants/creationTaskFields';
import { EMPTY_FIELD } from '../../../../shared/application/constants/messages/error-messages';

export const sendEmailValidations = {};
sendEmailValidations[sendEmailFields.EMAIL] = yup.string().email().required(EMPTY_FIELD);


export const sendEmailValidationSchema = yup.object().shape(sendEmailValidations);
