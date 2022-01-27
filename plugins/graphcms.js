import { GraphQLClient } from 'graphql-request';

const graphcmsClient = new GraphQLClient(
  'https://api-us-east-1.graphcms.com/v2/cktunnv680pby01w52lp7c0xv/master'
);

export default (_, inject) => {
  inject('graphcms', graphcmsClient);
};