import { z, TypeOf } from "zod";
import { Id, ProductStatusEnum } from "./main";

export const GetProductsSchema = z.object({
    name:z.string().optional(),
    min: z.number(),
    max: z.number(),
    category: z.string().optional(),
    status: z
        .enum([ProductStatusEnum.DRAFT, ProductStatusEnum.PUBLISHED], {
            errorMap: (issue, ctx) => ({ message: "enum is not valid" }),
        })
        .optional(),
    featured: z.boolean().optional(),
});

export const GetProductAttributes = Id

export type GetProductsSchemaType = TypeOf<typeof GetProductsSchema>;
export type GetProductAttributesType = TypeOf<typeof GetProductAttributes>
