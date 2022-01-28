// import { GraphQLClient } from 'graphql-request';

// const graphcmsClient = new GraphQLClient($config.graphcms.app, {
//   headers: {
//     authorization: $config.graphcms.key
//   }
// });

// export default (_, inject) => {
//   inject('graphcms', graphcmsClient);
// };


import { GraphQLClient } from 'graphql-request';

export default ({ $config }, inject) => {
  const graphcmsClient = new GraphQLClient($config.graphcms.app, {
    headers: {
      authorization: `Bearer ${$config.graphcms.key}`
    }
  });

  // console.log($config.graphcms.key)

  inject('graphcms', graphcmsClient);
};