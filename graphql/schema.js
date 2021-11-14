const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type TestData{
    text:String!
    views:Int
}

type RootQuery{
    hello: TestData!
}

schema{
    query: RootQuery
}
`);

// In Line 5, The Exclaimation Mark After Type Represents That It Is A Required Field
