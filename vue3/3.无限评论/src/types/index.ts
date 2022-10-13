export type user = {
  id: number; // 用户id
  username: string; // 用户名称
};

export type comment = user & {
  pid: number;
  uid: number;
  comment?: string;
  // children: comment[];
};

export type commentState = {
  commentText: string;
  commentTree: comment[];
};
