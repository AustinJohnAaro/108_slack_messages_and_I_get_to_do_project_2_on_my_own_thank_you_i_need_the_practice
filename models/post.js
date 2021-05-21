const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model {
  static uplove(body, models) {
    return models.Love.create({
      user_id: body.user_id,
      post_id: body.post_id
    })
      .then(() => {
        return Post.findOne({
          where: {
            id: body.post_id
          },
          attributes: ['id', 'content', 'title', 'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM love AS love WHERE love .post_id = post.id)'), 'love_count']
          ],
          include: [
            {
              model: models.Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                model: models.User,
                attributes: ['username']
              }
            }
          ]
        });
      });
  }
}

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post; 
