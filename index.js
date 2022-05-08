const {ApolloServer ,gql} = require("apollo-server");

//schema
const typeDefs= gql`
type Query{
  posts:[String]
}
`;


// resolver
const resolvers = {
    query:{
        posts:()=>{
         const posts =  [ { id: "1", title: "mohamed" },
                        { id: "2", title: "ahmed" },
                         ];
      return posts;
        }
    }
}


//server
const server = new ApolloServer({
    typeDefs
})

server.listen(7080 , ()=>{
    console.log("server stareted")
})

