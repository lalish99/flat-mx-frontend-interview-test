import { useState, useEffect } from "react"
import useCommits from "../../utils/hooks/useCommits"
import { CommitDocument } from "../../interfaces/git/commit";
import useConvertISOStringToMonthDay from "../../utils/hooks/useConvertISOStringToMonthDay";
import StatsList from "../StatsList";

type CommitDetailProps = {
  hexsha: string
}

const CommitDetail = ({hexsha}: CommitDetailProps) => {

  const [commit, setCommit] = useState<CommitDocument | undefined>(undefined)
  const {getCommitFromHexsha} = useCommits()

  const getAndSetcommites = async () => {
    const commit = await getCommitFromHexsha(hexsha)
    setCommit(commit)
  }

  useEffect(()=>{
    const cancel = setCommit === undefined || hexsha === undefined || hexsha === ""
    if (cancel === true) { return }
    getAndSetcommites()
  }, [setCommit, hexsha])

  return (
    <div>
      <div className="flex flex-row justify-between">
        <p><b>Summary:</b> {commit?.summary}</p>        
      </div>
      <div className="flex flex-row justify-between">
        <p><b>Message:</b> {commit?.message}</p>
      </div>
      <div className="flex flex-row justify-between">
        <p><b>Commit hexsha:</b> {commit?.hexsha}</p>
      </div>
      <div className="flex flex-row justify-between">
        <p><b>Commited on date:</b> {useConvertISOStringToMonthDay(commit?.committed_datetime)}</p>        
      </div>
      <br/>
      <h4>Overall Changes:</h4>
      <div className="flex flex-row justify-between w-1/2">
        <p><b>Deletions:</b> {commit?.total_stats.deletions}</p>
        <p><b>Insertions:</b> {commit?.total_stats.insertions}</p>
        <p><b>Files changed:</b> {commit?.total_stats.files}</p>
      </div>
      <br/>
      <h4>Changes Perf File Changes:</h4>
      <StatsList stats={commit?.file_stats}/>
    </div>
  );
}

export default CommitDetail;