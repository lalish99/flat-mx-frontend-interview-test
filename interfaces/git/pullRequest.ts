export const STATUS_OPTIONS = [
  "OPEN",
  "CLOSED",
  "MERGED"
] as const

export interface PullRequestDocument {
  id?: number
  pk?: number
  status: typeof STATUS_OPTIONS[number]
  author: string
  title: string
  description: string
  base_branch: string
  rebase_branch: string
}