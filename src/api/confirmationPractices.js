import Amplify, { Auth, API } from 'aws-amplify';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import gql from 'graphql-tag';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
});

export const createQuestion = (id) => {
    return client.mutate({ 
        mutation: gql(mutations.createQuestion), 
        variables: {input: {id: id, title: this.state.title, question: this.state.question, checks: this.state.checks }
    }})
}

export const updateQuestion = (id) => {
    return client.mutate({ 
        mutation: gql(mutations.updateQuestion), 
        variables: {input: {id: id, title: this.state.title, question: this.state.question, checks: this.state.checks }
    }})
}

export const getQuestions = async () => {
    return await API.graphql({ query: queries.listQuestions }).then(res => {return(res)});
}

export const createAnswers = (colleague, answers) => {
    return client.mutate({ 
        mutation: gql(mutations.createAnswers), 
        variables: {input: {colleague: colleague, answers: answers }
    }})
}
