type BranchRowProps = {
  index: number
  name: string
  path: string
  commit: string
}

const BranchRow = ({
  index,
  name,
  path,
  commit,
}: BranchRowProps) => {
  
  return (
    <tr className="h-12">
      <td className="w-10 text-center">{index}</td>
      <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{name}</td>
      <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{path}</td>
      <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{commit}</td>
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

export default BranchRow;