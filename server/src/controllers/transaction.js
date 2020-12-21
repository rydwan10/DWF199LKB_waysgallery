const Joi = require("joi");
const { User, Order } = require("../../models");

exports.getTransactions = async (req, res) => {
  try {
    if (req.query.status === "my-order") {
      const myId = req.userId.id;
      const myOrder = await Order.findAll({
        where: {
          orderBy: myId,
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

      if (myOrder.length === 0) {
        return res.status(200).send({
          status: "success",
          message: "You don't have any order right now",
          data: {
            myOrder: [],
          },
        });
      }

      res.status(200).send({
        status: "success",
        message: "Data successfully retrieved!",
        data: {
          myOrder,
        },
      });
    } else if (req.query.status === "my-offer") {
      const myId = req.userId.id;
      const myOffer = await Order.findAll({
        where: {
          orderTo: myId,
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

      if (myOffer.length === 0) {
        return res.status(200).send({
          status: "success",
          message: "You don't have any offer right now",
          data: {
            myOffer: [],
          },
        });
      }

      res.status(200).send({
        status: "success",
        message: "Data successfully retrieved!",
        data: {
          myOffer,
        },
      });
    } else {
      return res.status(404).send({
        status: "Not Found",
        message: "Route not found",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      error: {
        message: "Server Error",
      },
    });
  }
};

exports.approveOrderTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findOne({
      where: {
        id,
      },
    });

    if (!order) {
      return res.status(404).send({
        status: "Not Found",
        message: `Order with id: ${id} is not found!`,
        data: {
          myOrder: null,
        },
      });
    }

    if (req.userId.id !== order.orderTo) {
      return res.status(403).send({
        status: "Forbidden",
        message: "You're not the owner of this transaction",
      });
    } else {
      await Order.update(
        { status: "approved" },
        {
          where: {
            id,
          },
        }
      );
      const updatedOrder = await Order.findOne({
        where: {
          id,
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
      res.status(200).send({
        status: "success",
        message: `Order with id: ${id} is approved!`,
        data: {
          updatedOrder: updatedOrder,
        },
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      error: {
        message: "Server Error",
      },
    });
  }
};

exports.cancelOrderTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findOne({
      where: {
        id,
      },
    });

    if (!order) {
      return res.status(404).send({
        status: "Not Found",
        message: `Order with id: ${id} is not found!`,
        data: {
          myOrder: null,
        },
      });
    }

    if (req.userId.id !== order.orderTo) {
      return res.status(403).send({
        status: "Forbidden",
        message: "You're not the owner of this transaction",
      });
    } else {
      await Order.update(
        { status: "canceled" },
        {
          where: {
            id,
          },
        }
      );
      const updatedOrder = await Order.findOne({
        where: {
          id,
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
      res.status(200).send({
        status: "success",
        message: `Order with id: ${id} is canceled!`,
        data: {
          updatedOrder: updatedOrder,
        },
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      error: {
        message: "Server Error",
      },
    });
  }
};
