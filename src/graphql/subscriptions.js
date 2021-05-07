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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
      id
      question
      score
      reason
      improvement
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
      id
      question
      score
      reason
      improvement
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
      id
      question
      score
      reason
      improvement
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAnswers = /* GraphQL */ `
  subscription OnCreateAnswers {
    onCreateAnswers {
      id
      answers
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
      answers
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
      answers
      colleague
      team
      createdAt
      updatedAt
    }
  }
`;
