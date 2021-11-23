import { useState, useEffect } from "react"
import { BranchDocument } from "../../interfaces/git/branch"
import useBranches from "../../utils/hooks/useBranches"
import CommitList from "../CommitList"

type BranchDetailProps = {
  commitHexsha: string | undefined,
}

const BranchDetail = ({commitHexsha}: BranchDetailProps) => {

  const [branch, setBranch] = useState<BranchDocument | undefined>(undefined)
  const {getBranchFromCommit} = useBranches()

  const getAndSetBranches = async () => {
    const branch = await getBranchFromCommit(commitHexsha)
    setBranch(branch)
  }

  useEffect(()=>{
    const cancel = setBranch === undefined || commitHexsha === undefined || commitHexsha === ""
    if (cancel === true) { return }
    getAndSetBranches()
  }, [setBranch, commitHexsha])

  return (
    <div>
      <div className="flex flex-row justify-between">
        <p><b>Name:</b> {branch?.name}</p>        
      </div>
      <div className="flex flex-row justify-between">
        <p><b>Path:</b> {branch?.path}</p>
      </div>
      <div className="flex flex-row justify-between">
        <p><b>Commit hexsha:</b> {branch?.commit}</p>
      </div>
      <br/>
      <h4>Commit List:</h4>
      <CommitList commits={branch?.commits}/>
    </div>
  );
}

export default BranchDetail;