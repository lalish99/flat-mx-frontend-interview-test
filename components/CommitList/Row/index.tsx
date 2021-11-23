import { AuthorDocument } from "../../../interfaces/git/author";

type CommitListRowProps = {
  index: number
  author: AuthorDocument
  committed_date: Date | string | number
  summary: string
}

const CommitListRow = ({
  index,
  author,
  committed_date,
  summary,
}: CommitListRowProps) => {

  const convertISOStringToMonthDay = (date: Date | string | number) => {
    const tempDate = new Date(date).toString().split(' ');
    const formattedDate = `${tempDate[1]} ${+tempDate[2]}`;
    return formattedDate;
  };

  return (
    <tr className="h-12">
      <td className="w-10 text-center">{index}</td>
      <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{author.name}</td>
      <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{author.email}</td>
      <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{convertISOStringToMonthDay(committed_date)}</td>
      <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{summary}</td>
      <td className="w-40">
        <div className="flex flex-row justify-center">
          <button className="rounded bg-ruby-400 text-white px-2 py-1 mx-auto">
            View Details
          </button>
        </div>
      </td>
    </tr>
  );
}

export default CommitListRow;