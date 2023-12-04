import {Request,Response,NextFunction} from "express"
import TopingService from "../topings.service";
import { ErrorResponse } from "@/utils";
import { ImageService, ResponseService } from "@/services";
import TopingDto from "../topings.dto";
import { CreateTopingSchemaType } from "../schema/create";

class TopingsCreate {
    static async createTopings(
        req: Request<{}, {}, CreateTopingSchemaType>,
        res: Response,
        next: NextFunction
    ) {
        const { name, category, price } = req.body;
        const isExist = await TopingService.findToping({ name }, "FINDONE");

        if (isExist) {
            next(new ErrorResponse("product already exist", 403));
        }

        const toping = TopingService.getInstance({
            category,
            name,
            price,
        });

        const processedImage = await ImageService.compressImageToBuffer(req);

        await ImageService.uploadImageWithBuffer(
            `${process.env.CLOUDINARY_TOPING_FOLDER}`,
            processedImage,
            async (error, result) => {
                if (error) {
                    return next(
                        new ErrorResponse("Error while uploading image", 500)
                    );
                }

                if (result && result.url) {
                    toping.image = result.url;
                }
                const topingResult = await toping.save();

                ResponseService.sendResWithData(
                    res,
                    202,
                    new TopingDto(topingResult)
                );
            }
        );

    }

}
export default TopingsCreate 