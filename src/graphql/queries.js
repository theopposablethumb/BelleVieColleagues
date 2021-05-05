/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      title
      question
      checks
      createdAt
      updatedAt
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        question
        checks
        # createdAt
        # updatedAt
      }
      nextToken
    }
  }
`;
export const getAnswers = /* GraphQL */ `
  query GetAnswers($id: ID!) {
    getAnswers(id: $id) {
      id
      answers {
        id
        title
        question
        checks
        createdAt
        updatedAt
      }
      colleague
      team
      createdAt
      updatedAt
    }
  }
`;
export const listAnswerss = /* GraphQL */ `
  query ListAnswerss(
    $filter: ModelAnswersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswerss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        answers {
          id
          title
          question
          checks
          createdAt
          updatedAt
        }
        colleague
        team
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;