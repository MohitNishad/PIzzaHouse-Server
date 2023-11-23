import { ProductDefaultPriceType } from "../models/productDefaultPrice.model";

class ProductDefaultPriceDto {
    default_prices;
    constructor(dprice: ProductDefaultPriceType ) {
        this.default_prices = dprice.default_prices;
    }
}
export default ProductDefaultPriceDto;
