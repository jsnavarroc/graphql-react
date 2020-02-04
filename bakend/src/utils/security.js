import crypto from 'crypto';

/* Configuration */
import { $security } from '../../config';

export const encrypt = (str) => {
    return crypto
           .createHash('sha1')
           .update(`${$security().secretKey}${str.toString}`)
           .digest('hex')
}