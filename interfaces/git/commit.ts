import { AuthorDocument } from "./author";

export interface CommitStats {
    insertions: number
    deletions: number
    lines: number
    files: number
}

export interface CommitFileStats {
    file_name: string
    stats: CommitStats
}

export interface CommitDocument {
    author: AuthorDocument
    committed_date: number
    committed_datetime: Date
    message: string
    name_rev: string
    summary: string
    tree: string
    hexsha: string
    total_stats: CommitStats
    file_stats: CommitFileStats[]
}