import { NODE_ENV, URL_PROD } from '../../application/constants/env';

const urlBase = NODE_ENV === 'development' ? 'http://localhost:3000/API' : URL_PROD;

export default { urlBase };
