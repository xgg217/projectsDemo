export type user = {
  id: number;
  username: string;
};

export type comment = user & {
  pid: number;
  uid: number;
  comment?: string;
  // children: comment[];
};
