const Ajv = require("jsonschema").Validator;
const ajv = new Ajv();

module.exports = async (toValidate) => {

    const schema = {
        type: "object",
        properties: {
            order: {
                type: "object",
                properties: {
                    id: {
                        type: "object",
                        properties: {
                            number: { type: "string" }
                        },
                        required: ["number"]
                    },
                    pizza: {
                        type: "array",
                        maxItems: 24,
                        items: {
                            type: "object",
                            properties: {
                                id: {
                                    type: "object",
                                    properties: {
                                        number: { type: "string" }
                                    }
                                },
                                size: {
                                    type: "array",
                                    items: {
                                        type : "string",
                                        enum: ["small", "medium", "large"]
                                    }
                                },
                                crust: {
                                    type: "array",
                                    items: {
                                        type : "string"
                                    }
                                },
                                toppings: {
                                    type: "array",
                                    items: {
                                        type : "object",
                                        properties: {
                                            id: {
                                                type : "object",
                                                properties: {
                                                    area: {
                                                        type : "string",
                                                        enum: ["0", "1", "2"]
                                                    }
                                                },
                                                required: ["area"],
                                            },
                                            item: {
                                                type: "array",
                                                maxItems: 12,
                                                items: {
                                                    type : "string"
                                                }
                                            }
                                        },
                                        required: ["id", "item"],
                                    }
                                },
                                type: {
                                    type: "array",
                                    items: {
                                        type : "string"
                                    }
                                }
                            },
                            required: ["id", "size", "crust", "type"],
                            dependencies: {
                                toppings: {
                                    properties:{
                                        type: {
                                            type: "array",
                                            items: {
                                                type : "string",
                                                enum: ["custom"]
                                            }
                                        }
                                    }
                                }
                            },
                            
                        }
                    }
                },
                required: ["id", "pizza"]
            },
        },
        required: ["order"],
        additionalProperties: false
    }

    const valid = ajv.validate(toValidate, schema)
    return valid;

}