import { Model } from 'mongoose'
import IMongoModel from './mongo.model'


export default class DataModelController<IModel extends IMongoModel> {
    StoreModel: any
    constructor(InputModel: any) {
        this.StoreModel = InputModel
    }

    get Model(): Model<IModel> {
        return this.StoreModel as Model<IModel>
    }

    async all(): Promise<any> {
        try {
            let models = await this.Model.find().exec()
            return models
        } catch (err) {
            throw err
        }
    }

    async find(inputParam: any): Promise<any> {
        try {
            let models = await this.Model.find(inputParam).exec()
            return models
        } catch (err) {
            throw err
        }
    }

    async create(input: IModel): Promise<any> {
        try {
            let models = new this.Model(input)
            return await models.save()
        } catch (err) {
            throw err
        }
    }

    async update(findCondition: any, update: IModel): Promise<any> {
        try {
            return await this.Model.findOneAndUpdate(findCondition, update).exec()
        } catch (err) {
            throw err
        }
    }

    async remove(cond: any): Promise<any> {
        try {
            return await this.Model.findOneAndRemove(cond).exec()
        } catch (err) {
            throw err
        }
    }

    async fetchById(id: string): Promise<any> {
        try {
            return await this.Model.findById(id).exec()
        } catch (err) {
            throw err
        }
    }


}
