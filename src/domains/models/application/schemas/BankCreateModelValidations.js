import * as yup from 'yup';
import creationModelFields from '../constants/creationModelFields';
import { EMPTY_FIELD } from '../../../../shared/application/constants/messages/error-messages';

export const BankCreateModelValidation = {};
BankCreateModelValidation[creationModelFields.IDENTITY_BANK] = yup.string().required(EMPTY_FIELD);
BankCreateModelValidation[creationModelFields.BANK_NAME] = yup.string().required(EMPTY_FIELD);
BankCreateModelValidation[creationModelFields.LAST_NAME_BANK] = yup.string().required(EMPTY_FIELD);
BankCreateModelValidation[creationModelFields.ADRESS_BANK] = yup.string().required(EMPTY_FIELD);


export const BankCreateModelValidationSchema = yup.object().shape(BankCreateModelValidation);
