interface ICommentItem {
    comment_id: number;
    owner: {
      display_name: string;
    };
    body: string;
};