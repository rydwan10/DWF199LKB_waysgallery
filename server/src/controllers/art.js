const { Art, User } = require("../../models");
const Joi = require("joi");

exports.uploadArts = async (req, res) => {
  try {
    const { files, userId } = req;
    const { images } = files;

    let uploadedImages = [];
    images.forEach((image) => {
      uploadedImages.push(image.filename);
    });

    const data = {
      createdBy: userId.id.toString(),
    };

    const validationSchema = Joi.object({
      createdBy: Joi.string().required(),
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

    const insertArts = async () => {
      return Promise.all(
        uploadedImages.map(async (image) => {
          await Art.create({
            createdBy: userId.id,
            image,
          });
        })
      );
    };

    insertArts().then(async (response) => {
      const arts = await Art.findAll({
        where: {
          createdBy: userId.id,
        },
        attributes: {
          exclude: ["createdBy", "createdBy", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: User,
            as: "user",
            attributes: {
              exclude: [
                "password",
                "id",
                "createdBy",
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
        message: "Your arts is successfully uploaded!",
        data: {
          arts,
        },
      });
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
