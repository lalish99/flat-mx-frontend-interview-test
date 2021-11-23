import { useState, useEffect } from "react"
import { BranchDocument } from "../../interfaces/git/branch"
import useBranches from "../../utils/hooks/useBranches"
import styles from "./BranchList.module.scss"

const BranchList = () => {
  const [branches, setBranches] = useState<BranchDocument[]>([])
  const {getAllBranches} = useBranches()

  const getAndSetBranches = async () => {
    const branches = await getAllBranches()
    setBranches(branches)
  }

  useEffect(()=>{
    const cancel = setBranches === undefined
    if (cancel === true) { return }
    getAndSetBranches()
  }, [setBranches])

  return (
    <table className={styles['branch_list']}>
      <thead className="table w-full table-fixed table-fixed text-left text-black-300 bg-white tracking-widest rounded-t-md uppercase text-sm">
        <tr className="h-10 w-full">
          <th className="border-gray-200 border-2 w-10 text-center">#</th>
          <th className="border-gray-200 border-2">Name</th>
          <th className="border-gray-200 border-2">Path</th>
          <th className="border-gray-200 border-2">Commit Hexsha</th>
          <th className="border-gray-200 border-2 text-center w-40">Detail</th>
        </tr>
      </thead>
      <tbody className="table w-full overflow-hidden overflow-y-scroll h-full">
        {branches.map((branch, index)=>{
          return (
            <tr className="h-12">
              <td className="w-10 text-center">{index}</td>
              <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{branch.name}</td>
              <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{branch.path}</td>
              <td style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth:"1px"}} className="truncate">{branch.commit}</td>
              <td className="w-40">
                <div className="flex flex-row justify-center">
                  <button className="rounded bg-ruby-400 text-white px-2 py-1 mx-auto">
                    View Details
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default BranchList;