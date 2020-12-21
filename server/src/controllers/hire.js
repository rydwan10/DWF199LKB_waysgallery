const Joi = require("joi");
const { User, Order } = require("../../models");

exports.createOrder = async (req, res) => {
  try {
    const { body } = req;
    const id = req.userId.id;
    const stringId = id.toString();

    const data = {
      ...body,
      orderBy: stringId,
      status: "waiting accept",
    };

    const validationSchema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      startDate: Joi.date().required(),
      endDate: Joi.date().required(),
      price: Joi.string().required(),
      orderTo: Joi.string().required(),
      orderBy: Joi.string().required(),
      status: Joi.string().required(),
    });

    const { error } = validationSchema.validate(data, { abortEarly: false });
    if (error) {
      return res.status(400).send({
        status: "Validation Error",
        error: {
          message: error.details.map((error) => error.message),
        },
      });
    }

    if (stringId === data.orderTo) {
      return res.status(403).send({
        status: "Forbidden",
        message: "You can't order to your own account!",
      });
    }

    const newOrder = await Order.create(data);

    const newOrderData = await Order.findOne({
      where: {
        id: newOrder.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "orderBy", "orderTo"],
      },
      include: [
        {
          model: User,
          as: "orderedBy",
          attributes: {
            exclude: [
              "id",
              "password",
              "createdAt",
              "updatedAt",
              "greeting",
              "avatar",
            ],
          },
        },
        {
          model: User,
          as: "orderedTo",
          attributes: {
            exclude: [
              "id",
              "password",
              "createdAt",
              "updatedAt",
              "greeting",
              "avatar",
            ],
          },
        },
      ],
    });

    res.status(201).send({
      status: "success",
      message: "New order is successfully created!",
      hired: {
        newOrderData,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      error: {
        message: "Server Error",
      },
    });
  }
};
