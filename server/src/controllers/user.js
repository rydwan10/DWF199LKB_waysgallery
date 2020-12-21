const { User, Post, PostPhoto, Art } = require("../../models");
const Joi = require("joi");
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
    });

    if (!users) {
      return res.res.status(400).send({
        message: "There is no Users",
        data: [],
      });
    }

    res.status(200).send({
      data: {
        message: "success",
        users,
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

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Post,
          as: "posts",
          include: [
            {
              model: PostPhoto,
              as: "photos",
              attributes: {
                exclude: ["createdAt", "updatedAt", "PostId", "postId"],
              },
            },
          ],
        },
        {
          model: Art,
          as: "arts",
          attributes: {
            exclude: ["createdAt", "updatedAt", "createdBy", "CretedBy"],
          },
        },
      ],
      order: [["posts", "createdAt", "DESC"]],
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    });

    if (!user) {
      return res.status(404).send({
        message: `There is no user with id: ${id}`,
        data: [],
      });
    }

    res.status(200).send({
      data: {
        message: "success",
        user,
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

// Update Profile
exports.updateUserById = async (req, res) => {
  try {
    const id = req.userId.id;
    const { body, file } = req;

    const findUser = await User.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["password"],
      },
    });

    if (!findUser) {
      return res.status(404).send({
        status: "Not Found",
        message: `User with id: ${id} is not found!`,
        data: {
          artist: null,
        },
      });
    }

    let avatar;
    if (!file) {
      avatar = findUser.avatar;
    } else {
      avatar = file.filename;
    }

    const data = {
      avatar,
      greeting: body.greeting,
      fullName: body.fullName,
    };

    const validationSchema = Joi.object({
      avatar: Joi.string(),
      greeting: Joi.string(),
      fullName: Joi.string(),
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

    await User.update(data, {
      where: {
        id,
      },
    });

    const updatedUser = await User.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["password"],
      },
    });

    res.status(200).send({
      status: "success",
      message: `User with id: ${id} successfully updated!`,
      data: {
        updatedUserData: updatedUser,
        oldUserData: findUser,
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

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const getUserById = await User.findOne({
      where: {
        id,
      },
    });

    if (!getUserById) {
      return res.status(404).send({
        status: "User not found!",
        message: `User with id: ${id} is not found!`,
        data: {
          user: null,
        },
      });
    }

    await User.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      message: `User with id: ${id} is successfully deleted!`,
      data: {
        user: null,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: {
        message: "Server Error",
      },
    });
  }
};
