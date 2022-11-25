import * as yup from 'yup';
import creationModelFields from '../constants/creationModelFields';
import { EMPTY_FIELD } from '../../../../shared/application/constants/messages/error-messages';

export const emailCreationModelValidation = {};
emailCreationModelValidation[creationModelFields.EMAIL] = yup.string().required(EMPTY_FIELD);
emailCreationModelValidation[creationModelFields.EMAIL_PASSWORD] = yup.string().required(EMPTY_FIELD);


export const emailCreationModelsValidationSchema = yup.object().shape(emailCreationModelValidation);
