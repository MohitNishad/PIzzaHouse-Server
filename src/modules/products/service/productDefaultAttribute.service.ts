import {
    TProductDefaultPriceAttribute,
    ProductDefaultPriceAttributModel,
} from "../models/productDefaultAttribute.model";

type opts = Partial<TProductDefaultPriceAttribute>;

class ProductDefaultPriceAttributeService {
    static async findOne(obj: opts) {
        return await ProductDefaultPriceAttributModel.findOne(obj);
    }
    static getInstance(opts: opts) {
        return new ProductDefaultPriceAttributModel(opts);
    }
    static async create(opts: opts) {
        return await ProductDefaultPriceAttributModel.create(opts);
    }
    static async deleteOne(opts: opts) {
        return await ProductDefaultPriceAttributModel.deleteOne(opts);
    }
}
export default ProductDefaultPriceAttributeService;
