import { Schema, Model, model} from "mongoose";
import IMongoModel from '../../../core/mongo.model'

export interface IUserModel extends IMongoModel {
    firstName: string
    lastName?: string
    email: string
    password: string
}

export var UserSchema: Schema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  password: String
}, {
    timestamps: true
});

export const User: Model<IUserModel> = model<IUserModel>("User", UserSchema);
