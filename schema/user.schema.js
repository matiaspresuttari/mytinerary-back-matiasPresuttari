import Joi from "joi";

const email = Joi.string()
    .required()
    .email({
        minDomainSegments: 2
    })
    .messages({
        'any.required':'Email required'
    })

const password = Joi.string()
    .required()
    .min(6)
    .max(20)
    .alphanum()
    //.regex() para agregar caracteres especiales

export const createUserSchema = Joi.object({
    email,
    password,
    name: Joi.string()
        .min(2)
        .max(30),
        //.regex()
    image: Joi.string()
        .required()
        .uri(),
})