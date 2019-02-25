/** Mongo Model **/

import { Document } from 'mongoose'

export default interface IMongoModel extends Document {
    createdAt?: Date,
    updateAt?: Date
}
