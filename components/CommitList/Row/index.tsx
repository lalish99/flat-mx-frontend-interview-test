import { AuthorDocument } from "../../../interfaces/git/author";
import useConvertISOStringToMonthDay from "../../../utils/hooks/useConvertISOStringToMonthDay";
import Link from "next/link"

type CommitListRowProps = {
  index: number
  author: AuthorDocument
  committed_date: Date | string | number
  summary: string
  hexsha: string
}

const CommitListRow = ({
  index,
  author,
  committed_date,
  summary,
  hexsha
}: CommitListRowProps) => {

  return (
    <tr className="h-12">
      <td className="w-10 text-center">{index}</td>
      <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{author.name}</td>
      <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{author.email}</td>
      <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{useConvertISOStringToMonthDay(committed_date)}</td>
      <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{summary}</td>
      <td className="w-40">
        <div className="flex flex-row justify-center">
          <Link href={`/commits/${hexsha}`}>
            <a href={`/commits/${hexsha}`} className="rounded bg-ruby-400 text-white px-2 py-1 mx-auto">
              View Details
            </a>
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default CommitListRow;