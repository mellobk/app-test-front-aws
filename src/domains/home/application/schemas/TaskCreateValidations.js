import * as yup from 'yup';
import creationTaskFields from '../constants/creationTaskFields';
import { EMPTY_FIELD } from '../../../../shared/application/constants/messages/error-messages';

export const TaskCreateValidations = {};
TaskCreateValidations[creationTaskFields.NAME] = yup.string().required(EMPTY_FIELD);
TaskCreateValidations[creationTaskFields.ADDRESS] = yup.string().required(EMPTY_FIELD);
TaskCreateValidations[creationTaskFields.NIT] = yup.string().required(EMPTY_FIELD);
TaskCreateValidations[creationTaskFields.PHONE] = yup.string().required(EMPTY_FIELD);

export const TaskCreationValidationSchema = yup.object().shape(TaskCreateValidations);
