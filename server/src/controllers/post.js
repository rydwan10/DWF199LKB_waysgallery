const Joi = require("joi");
const { User, Post, PostPhoto } = require("../../models");

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId", "UserId"],
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: [
              "userId",
              "UserId",
              "password",
              "avatar",
              "greeting",
              "createdAt",
              "updatedAt",
            ],
          },
        },
        {
          model: PostPhoto,
          as: "photos",
          attributes: {
            exclude: ["createdAt", "updatedAt", "postId", "PostId"],
          },
        },
      ],
    });

    if (posts.length === 0) {
      return res.status(200).send({
        status: "success",
        message: "There is no post yet",
        data: {
          posts: [],
        },
      });
    }

    res.status(200).send({
      status: "success",
      message: "Data successfully retrieved!",
      data: {
        posts,
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

exports.getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId", "UserId"],
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: [
              "userId",
              "UserId",
              "password",
              "greeting",
              "createdAt",
              "updatedAt",
            ],
          },
        },
        {
          model: PostPhoto,
          as: "photos",
          attributes: {
            exclude: ["createdAt", "updatedAt", "postId", "PostId"],
          },
        },
      ],
    });

    if (!post) {
      return res.status(404).send({
        status: "Not Found",
        message: `Post with id: ${id} is not found!`,
        data: {
          post: null,
        },
      });
    }

    res.status(200).send({
      status: "success",
      message: "Post successfully retrieved!",
      data: {
        post,
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

exports.addPost = async (req, res) => {
  try {
    const { body, files, userId } = req;
    const { images } = files;
    console.log(body, req.files);

    let uploadedImages = [];
    images.forEach((image) => {
      uploadedImages.push(image.filename);
    });

    const data = {
      title: body.title,
      description: body.description,
      // userId.id didapatkan dari auth
      userId: userId.id,
    };

    const validationSchema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      userId: Joi.required(),
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

    const post = await Post.create(data);

    if (!post) {
      return res.status(400).send({
        status: "Bad Request",
        message: "Post failed to be created",
      });
    }

    const insertImages = async () => {
      return Promise.all(
        uploadedImages.map(async (image) => {
          await PostPhoto.create({
            postId: post.id,
            image,
          });
        })
      );
    };

    insertImages().then(async (response) => {
      const createdPost = await Post.findOne({
        where: {
          id: post.id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "userId", "UserId"],
        },
        include: [
          {
            model: User,
            as: "user",
            attributes: {
              exclude: [
                "userId",
                "UserId",
                "password",
                "avatar",
                "greeting",
                "createdAt",
                "updatedAt",
              ],
            },
          },
          {
            model: PostPhoto,
            as: "photos",
            attributes: {
              exclude: ["createdAt", "updatedAt", "postId", "PostId"],
            },
          },
        ],
      });

      res.status(201).send({
        status: "success",
        message: "New post is successfully created!",
        data: {
          createdPost,
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

exports.deletePostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findOne({
      where: {
        id,
      },
    });

    if (!post) {
      return res.status(404).send({
        status: "Not Found",
        message: `Post with id: ${id} is not found!`,
        data: {
          post: null,
        },
      });
    }

    if (req.userId.id !== post.userId) {
      res.status(403).send({
        status: "Forbidden",
        message: `You're not the owner of the post!`,
      });
    } else {
      await Post.destroy({
        where: {
          id,
        },
      });
    }

    res.status(200).send({
      status: "success",
      message: `Post with id: ${id} successfully deleted!`,
      data: {
        deletedPost: post,
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

exports.getLatestPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId", "UserId"],
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: [
              "userId",
              "UserId",
              "password",
              "avatar",
              "greeting",
              "createdAt",
              "updatedAt",
            ],
          },
        },
        {
          model: PostPhoto,
          as: "photos",
          attributes: {
            exclude: ["createdAt", "updatedAt", "postId", "PostId"],
          },
        },
      ],
      order: [["updatedAt", "DESC"]],
    });

    if (posts.length === 0) {
      return res.status(200).send({
        status: "success",
        message: "There is no post yet",
        data: {
          posts: [],
        },
      });
    }

    res.status(200).send({
      status: "success",
      message: "Data successfully retrieved!",
      data: {
        posts,
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

// TODO Update Later cause it's complex
exports.updatePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { body, file } = req;

    const artist = await Artist.findOne({
      where: {
        id,
      },
    });

    if (!artist) {
      return res.status(404).send({
        status: "Not Found",
        message: `Artist with id: ${id} is not found!`,
        data: {
          artist: null,
        },
      });
    }

    let thumbnail;
    if (!file) {
      thumbnail = artist.thumbnail;
    } else {
      thumbnail = file.filename;
    }

    const data = {
      ...body,
      thumbnail,
    };

    const validationSchema = Joi.object({
      name: Joi.string(),
      old: Joi.string(),
      category: Joi.string(),
      startCareer: Joi.date(),
      thumbnail: Joi.string(),
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

    await Artist.update(data, {
      where: {
        id,
      },
    });

    const updatedArtist = await Artist.findOne({
      where: {
        id,
      },
    });

    res.status(200).send({
      status: "success",
      message: `Artist with id: ${id} successfully updated!`,
      data: {
        updatedArtistData: updatedArtist,
        oldArtistData: artist,
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
