import Link from "next/link";

type PullRequestRowProps = {
  index: number
  status: string
  author: string
  title: string
  id: number
}

const PullRequestRow = ({
  index,
  status,
  author,
  title,
  id,
}: PullRequestRowProps) => {
  
  return (
    <tr className="h-12">
      <td className="w-10 text-center">{index}</td>
      <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{title}</td>
      <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{author}</td>
      <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{status}</td>
      <td className="w-40">
        <div className="flex flex-row justify-center">
          <Link href={`pull_requests/${id}`}>
            <a  href={`pull_requests/${id}`} className="rounded bg-ruby-400 text-white px-2 py-1 mx-auto">
              View Details
            </a>
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default PullRequestRow;