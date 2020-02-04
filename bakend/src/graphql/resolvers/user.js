export default {
    Query:{
        getUsers:(parent, args, context)=>{
            const {models} = context;
            return models.User.findAll({
                include:[
                    {
                        model:models.Post,
                        as:'posts',
                        include:[{
                            model:models.Tag,
                            as:'tags'
                        }]
                    }
                ]
            })
        }
    },
    
    Mutation:{
        createUser:(parent, args, context) =>{
            const {input} = args;
            const {models} = context;
            return models.User.create({...input})
        }
    }
}