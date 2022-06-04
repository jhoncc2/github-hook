export interface Commit {
  node_id?: string;
  commit: CommitInfo;
}

export interface CommitInfo {
  author?: Author;
  message?: string;
  url?: string;
}

export interface Author {
  name?: string;
  email?: string;
  date?: string;
}
