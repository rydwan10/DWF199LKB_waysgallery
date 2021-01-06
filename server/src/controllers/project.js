// const zip = require("express-zip");
const AdmZip = require("adm-zip");
const Joi = require("joi");
const { User, Order, Project, ProjectPhoto } = require("../../models");

exports.addProject = async (req, res) => {
  try {
    const { body, files } = req;
    const { images } = files;

    let uploadedImages = [];
    images.forEach((image) => {
      uploadedImages.push(image.filename);
    });

    const orderId = body.orderId;
    const description = body.description;

    const findOrder = await Order.findOne({
      where: {
        id: orderId,
      },
      include: [
        {
          model: User,
          as: "orderedBy",
          attributes: {
            exclude: [
              // "id",
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

    if (findOrder.orderedBy.id === req.userId.id) {
      return res.status(405).send({
        message: "You're not allowed to do this action",
      });
    } else {
      const data = {
        orderId,
        description,
      };

      const validationSchema = Joi.object({
        orderId: Joi.string().required(),
        description: Joi.string().required(),
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

      const project = await Project.create(data);
      if (!project) {
        return res.status(400).send({
          status: "Bad Request",
          message: "Project failed to be created!",
        });
      }

      const insertImages = async () => {
        return Promise.all(
          uploadedImages.map(async (image) => {
            await ProjectPhoto.create({
              projectId: project.id,
              image,
            });
          })
        );
      };

      insertImages().then(async (response) => {
        const createdProject = await Project.findOne({
          where: {
            id: project.id,
          },
          attributes: {
            exclude: ["createdAt", "updatedAt", "projectId", "ProjectId"],
          },
          include: [
            {
              model: ProjectPhoto,
              as: "photos",
              attributes: {
                exclude: ["createdAt", "updatedAt", "projectId", "ProjectId"],
              },
            },
          ],
        });

        await Order.update(
          { status: "project is complete" },
          {
            where: {
              id: orderId,
            },
          }
        );

        res.status(201).send({
          status: "success",
          message: "New project is successfully created!",
          data: {
            createdProject,
          },
        });
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

exports.viewProject = async (req, res) => {
  try {
    const project = await Project.findOne({
      where: {
        orderId: req.params.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "orderId", "OrderId", "projectId"],
      },
      include: [
        {
          model: ProjectPhoto,
          as: "photos",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });

    if (!project) {
      return res.status(200).send({
        status: "success",
        message: "There is no project yet",
        data: {
          project: [],
        },
      });
    }

    res.status(200).send({
      status: "success",
      message: "Data successfully retrieved!",
      data: {
        project,
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

// TODO download projects endpoint

exports.downloadProject = async (req, res) => {
  const { id: projectId } = req.params;
  try {
    const projectPhoto = await ProjectPhoto.findAll({
      where: {
        projectId: projectId,
      },
    });
    if (!projectPhoto) {
      return res.status(404).send({
        status: "not found",
        message: "Project photos with id: " + projectId + " is not found!",
        data: {
          projectPhoto: [],
        },
      });
    }

    if (projectPhoto) {
      const zip = new AdmZip();
      // projectPhoto.forEach((item) => {
      //   zip.addLocalFile(`../../uploads/${item.image}`);
      // });
      // s
    }

    // const downloadDirectories = projectPhoto.map((photo) => {
    //   return {
    //     path: `http://localhost:5000/uploads/${photo.image}`,
    //     name: photo.image,
    //   };
    // });

    // console.log(downloadDirectories);

    // res.zip(downloadDirectories);

    // res.status(200).send({
    //   status: "success",
    //   message: "Data successfully retrieved!",
    //   data: {
    //     projectPhoto,
    //   },
    // })
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      error: {
        message: "Server Error",
      },
    });
  }
};
