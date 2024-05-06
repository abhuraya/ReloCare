const { Comment } = require('../models');

const commentData = [
    {
        content: "Used this service on multiple occassions. Typically on time. Can't complain about a free ride!",
        user_id: 2,
        post_id: 1
    },
    {
        content: "Very interesting and timely topic. I'll attend if I can find childcare. ",
        user_id: 4,
        post_id: 2
    },
    {
        content: "Get there early or the good stuff will be gone!",
        user_id: 4,
        post_id: 3
    },
    {
        content: "My family will be there. We've had challenges finding a spot for our elementary school aged child. Plus, free food.",
        user_id: 5,
        post_id: 4
    },
    {
        content: "Can't get over the name of this program. I'm surprised Silicon Valley hasn't scooped and and purchased it",
        user_id: 6,
        post_id: 5
    },
    {
        content: "Great opportunity to get connect with legal experts in Vermont",
        user_id: 2,
        post_id: 6
    },
    {
        content: "Awesome opportunity to connect with local arts while supporting a great cause!",
        user_id: 3,
        post_id: 7
    },
    {
        content: "Parent Child Centers are already doing amazing work for families with young children in VT. I'm so excited about this collaboration with UVM pediatrics. Great service for the community",
        user_id: 4,
        post_id: 8
    },
    {
        content: "I have a valid license. I'm going to check this out. Would be great to give back if I can.",
        user_id: 5,
        post_id: 9
    },
    {
        content: "I've seen so many individuals and families struggle with the asylum seeking process. What a great chance to get some help from experts. Hopefully, it makes things easier for those in need",
        user_id: 6,
        post_id: 10
    },
    {
        content: "I'm giving them a call tomorrow. Sounds like they should have Urdu speakers available",
        user_id: 5,
        post_id: 11
    },
    {
        content: "Free mental health services for all!",
        user_id: 6,
        post_id: 12
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;