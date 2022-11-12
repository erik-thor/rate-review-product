export const getComments = async () => {
    return [
      {
        id: "1",
        review: "4",
        body: "First comment",
        nickname: "Jack",
        userId: "1",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "5",
        review: "5",
        body: "Second comment",
        nickname: "John",
        userId: "2",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        review: "2",
        body: "First comment first child",
        nickname: "John",
        userId: "2",
        parentId: "1",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        review: "4",
        body: "Second comment second child",
        nickname: "John",
        userId: "2",
        parentId: "2",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (message, rating, username, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: message,
      review: rating,
      parentId,
      userId: "1",
      nickname: username,
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (message, rating, username) => {
    return { message, rating, username };
  };
  
  export const deleteComment = async () => {
    return {};
  };