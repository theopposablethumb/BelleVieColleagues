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

export const createQuestion = (id, title, question, checks) => {
    return client.mutate({ 
        mutation: gql(mutations.createQuestion), 
        variables: {input: {id: id, title: title, question: question, checks: checks }
    }})
}

export const updateQuestion = (id, title, question, checks) => {
    return client.mutate({ 
        mutation: gql(mutations.updateQuestion), 
        variables: {input: {id: id, title: title, question: question, checks: checks }
    }})
}

export const getQuestions = async () => {
    return await API.graphql({ query: queries.listQuestions }).then(res => {return(res)});
}

export const createAnswers = (colleague, answers, team) => {
    console.log(answers);
    return client.mutate({ 
        mutation: gql(mutations.createAnswers), 
        variables: {input: {colleague: colleague, answers: JSON.stringify(answers), team: team }
    }})
}
 
export const colleagueAnswers = async (colleague) => {
    return await API.graphql({query: queries.listAnswers, variables: { colleague: colleague }}).then(res => {return(res)});
};

export const teamAnswers = async (team) => {
    let filter = {
        team: {
            eq: team
        } 
    };
    return await API.graphql({query: queries.listAnswers, variables: { filter: filter }}).then(res => {return(res)});
};

export const colleagueAnswer = async (id) => {
    return await API.graphql({query: queries.getAnswers, variables: { id: id } }).then(res => {return(res)});
};
