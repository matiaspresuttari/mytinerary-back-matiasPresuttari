import Joi from "joi";

export const createUserSchema = Joi.object({
    email: Joi.string()
        .required()
        .email({
            minDomainSegments: 2
        })
        .messages({
            'any.required':'Email required'
        }),
    password: Joi.string()
        .required()
        .min(6)
        .max(20)
        .alphanum(),
        //.regex() para agregar caracteres especiales
    name: Joi.string()
        .min(2)
        .max(30),
        //.regex()
    image: Joi.string()
        .required()
        .uri(),
})