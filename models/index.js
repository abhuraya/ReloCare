const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Post, {
    foreignKey: 'user_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Post.hasMany(Comment, {
    foreignKey: 'post_id'
})



module.exports = { User, Post, Comment };