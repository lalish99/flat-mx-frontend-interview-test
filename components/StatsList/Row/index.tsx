type StatsListRowProps = {
  index: number
  name: string
  insertions: number
  deletions: number
  lines: number
}

const StatsListRow = ({
  index,
  name,
  insertions,
  deletions,
  lines,
}: StatsListRowProps) => {

  return (
    <tr className="h-12">
      <td className="w-10 text-center">{index}</td>
      <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{name}</td>
      <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{insertions}</td>
      <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{deletions}</td>
      <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{lines}</td>
    </tr>
  );
}

export default StatsListRow;