export const getComments = async () => {
    return [
      {
        id: "1",
        nickname: "Jack",
        review: "4",
        body: "First comment",
        userId: "1",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "5",
        nickname: "John",
        review: "5",
        body: "Second comment",
        userId: "2",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        nickname: "John",
        review: "2",
        body: "First comment first child",
        userId: "2",
        parentId: "1",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        nickname: "John",
        review: "4",
        body: "Second comment second child",
        userId: "2",
        parentId: "2",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
    ];
  };

  export const createComment = async (username, rating, message, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      nickname: username,
      review: rating,
      body: message,
      parentId,
      userId: "1",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (username, rating, message) => {
    return { username, rating, message };
  };
  
  export const deleteComment = async () => {
    return {};
  };