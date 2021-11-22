import { CommitDocument } from "./commit";

export interface BranchDocument {
    name: string
    repo: string
    path: string
    commit: string
    remote_name: string
    commits: CommitDocument[]
}