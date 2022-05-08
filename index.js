const {ApolloServer ,gql} = require("apollo-server");

const posts=[
    {
        title:"post",
        id : "123"
    },
    {
        title: "post 2",
        id : "321"
    }
]

//schema
const typeDefs= gql`
type Post{
    id:String,
    title:String
}

type Query{
  posts:[Post]
}

type Mutation{
    addPost(title:String):Post
}
`;


// resolver
const resolvers = {
    Query:{
        posts:()=> posts
    },
    Mutation:{
        addPost:(parent,{title})=>{
            posts.push({title})
            return posts
        }
    }
}


//server
const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(7080 , ()=>{
    console.log("server stareted")
})

