import { ApolloServer } from "apollo-server";

// 1
import { schema } from "./schema";
//ApolloServerとは、GraphQLのサーバーを立ち上げるためのクラス
//schemaという引数には、GraphQLのスキーマを指定する

export const server = new ApolloServer({
  schema,
});

const port = 3000;
// 2
//
//listenとは、サーバーを起動するためのメソッド
//listenメソッドの第一引数には、ポート番号を指定する

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


