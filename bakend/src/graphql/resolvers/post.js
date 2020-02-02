export default {
    Query:{
        getPosts:(parent, args, context) => {
            const {models} = context;
            return models.Post.findAll({
                include:[{
                    model:models.Tag,
                    use:"Tag"
                }]
            })
        }
    },

    Mutation:{
        createPost:(parent, args, context) => {
            const {input} = args;
            const {models} = context;
            return models.Post.create({ ...input }, {
                include:[{
                     model: models.Tag,
                     use: "tags"
                }]
            })
        }
    }
}