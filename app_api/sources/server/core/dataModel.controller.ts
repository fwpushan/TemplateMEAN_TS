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

    // Fetching all modles
    async all(): Promise<any> {
        try {
            //
            let models = await this.Model.find().exec()
            return models
        } catch (err) {
            throw err
        }
    }

    // Finding and fetching model
    async find(inputParam: any): Promise<any> {
        try {
            // Finding object/ Document in db
            let models = await this.Model.find(inputParam).exec()
            return models
        } catch (err) {
            throw err
        }
    }

    // Creating 
    async create(input: IModel): Promise<any> {
        try {
            // Creating New model object in db
            let models = new this.Model(input)
            return await models.save()
        } catch (err) {
            throw err
        }
    }

    async createUniqe(input: IModel): Promise<any> {
        try {
            // Find the existing model object
            let model = await this.Model.findOne(input).exec()
            if (model) {
                // Returning Existing Model
                return model
            } else {
                // Creating New model object in db
                let models = new this.Model(input)
                return await models.save()
            }

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
