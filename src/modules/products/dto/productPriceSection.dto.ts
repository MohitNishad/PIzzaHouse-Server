import { TProductPriceSection } from "../models/productPriceSection.model.ts.js";

class ProductPriceSectionDto {
    id;
    name;
    attributes;
    constructor(attribute: TProductPriceSection) {
        this.id = attribute._id  
        this.name = attribute.title;
        this.attributes = attribute.attributes;
    }
}
export default ProductPriceSectionDto ;
