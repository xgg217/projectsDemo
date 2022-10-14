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

export type userComm = {
  id: number; // 用户id
  comment: string; // 评论内容
  username: string; // 用户名
  replyText: string; // 回复内容
  isShow: boolean; // 是否展示 评论输入框
  children?: userComm[]; // 子评论
};
