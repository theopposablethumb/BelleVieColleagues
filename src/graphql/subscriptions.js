/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
      id
      title
      question
      checks
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
      id
      title
      question
      checks
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
      id
      title
      question
      checks
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAnswers = /* GraphQL */ `
  subscription OnCreateAnswers {
    onCreateAnswers {
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
export const onUpdateAnswers = /* GraphQL */ `
  subscription OnUpdateAnswers {
    onUpdateAnswers {
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
export const onDeleteAnswers = /* GraphQL */ `
  subscription OnDeleteAnswers {
    onDeleteAnswers {
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
