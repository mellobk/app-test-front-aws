import * as yup from 'yup';
import {creationInventoryFields} from '../constants/creationTaskFields';
import { EMPTY_FIELD } from '../../../../shared/application/constants/messages/error-messages';

export const inventoryCreateValidations = {};
inventoryCreateValidations[creationInventoryFields.QUANTITY] = yup.string().required(EMPTY_FIELD);
inventoryCreateValidations[creationInventoryFields.ARTICLE] = yup.string().required(EMPTY_FIELD);

export const creationInventoryValidationSchema = yup.object().shape(inventoryCreateValidations);
