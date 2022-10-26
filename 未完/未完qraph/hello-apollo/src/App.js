import React, { Component } from 'react';
//Queryとは、GraphQLのクエリを実行するためのコンポーネントです。
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

//GraphQLのクエリを定義する
//GraphQLのクエリは、gqlというテンプレートリテラルタグを使って定義します。
//gqlというテンプレートリテラルタグは、GraphQLのクエリをパースして、
//GraphQLのクエリを実行するためのオブジェクトを生成します。

const query = gql`
  {
    
    organization(login: "apollographql") {
      repositories(first: 5, isFork: false) {
        nodes {
          id
          name
          url
          viewerHasStarred
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

const App = () => (
  <Query query={query}>
    {({ loading, data }) => {
      if (loading) return <p>Loading...</p>;
      //dataとは、GraphQLのクエリの結果を格納するオブジェクトです。

      const repositories = data.organization.repositories.nodes;

      return (
        <ul>
         { /*map関数を使って、配列の要素を順番に処理します。
        //map関数の第一引数には、配列の要素を順番に処理する関数を渡します。
        //map関数の第二引数には、配列の要素を順番に処理する関数の第一引数に渡すインデックスを渡します。*/}
          {repositories.map(repo => (
            <li key={repo.id}>
              <a href={repo.url}>{repo.name}</a>
              <button>{repo.stargazers.totalCount} Star</button>
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default App;