import * as yup from 'yup';
import creationModelFields from '../constants/creationModelFields';
import { EMPTY_FIELD } from '../../../../shared/application/constants/messages/error-messages';

export const creationModelValidation = {};
creationModelValidation[creationModelFields.IDENTITY] = yup.number(EMPTY_FIELD).typeError(EMPTY_FIELD).required(EMPTY_FIELD);
creationModelValidation[creationModelFields.NAME] = yup.string().required(EMPTY_FIELD);
creationModelValidation[creationModelFields.LAST_NAME] = yup.string().required(EMPTY_FIELD);
creationModelValidation[creationModelFields.PHONE] = yup.string().required(EMPTY_FIELD);
creationModelValidation[creationModelFields.NICK] = yup.string().required(EMPTY_FIELD);
creationModelValidation[creationModelFields.MODEL_PASSWORD] = yup.string().required(EMPTY_FIELD);
creationModelValidation[creationModelFields.CAMPUS] = yup.string().required(EMPTY_FIELD);
creationModelValidation[creationModelFields.TURNS] = yup.string().required(EMPTY_FIELD);

export const creationModelsValidationSchema = yup.object().shape(creationModelValidation);
