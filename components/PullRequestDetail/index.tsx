import { useState, useEffect, useMemo } from "react"
import { PullRequestDocument } from "../../interfaces/git/pullRequest"
import usePullRequests from "../../utils/hooks/usePullRequests"
import CommitList from "../CommitList"

type PullRequestDetailProps = {
  id: number | undefined,
}

const PullRequestDetail = ({id}: PullRequestDetailProps) => {

  const [pullRequest, setPullRequest] = useState<PullRequestDocument | undefined>(undefined)
  const {retrievePullRequests} = usePullRequests()

  const getAndSetPullRequests = async () => {
    const pullRequest = await retrievePullRequests(id)
    setPullRequest(pullRequest)
  }

  useEffect(()=>{
    const cancel = setPullRequest === undefined || id === undefined || id < 0 || !id
    if (cancel === true) { return }
    getAndSetPullRequests()
  }, [setPullRequest, id])

  const statusColor = useMemo(()=>{
    switch (pullRequest?.status) {
      case "OPEN":
        return "bg-green-200 text-green-500 "
      case "CLOSED":
        return "bg-gray-200 text-gray-500 "
      case "MERGED":
        return "bg-indigo-100 text-indigo-500 "
    }
  }, [pullRequest?.status])

  return (
    <div>
      <div className="flex flex-row justify-between mb-2">
        <p><b>ID: </b>{pullRequest?.id}</p>
      </div>
      <div className="flex flex-row justify-after w-7/12 mb-2">
        <p className="flex-grow-0 flex-shrink w-min mr-2"><b>To (base): </b>{pullRequest?.base_branch}</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-grow-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <p className="flex-grow-0 flex-shrink w-min ml-2"><b>From (rebase): </b>{pullRequest?.rebase_branch}</p>
      </div>
      <div className="flex flex-row justify-between mb-2">
        <p><b>Status: </b> <span className={`${statusColor} px-2 py-1 rounded-md`}>{pullRequest?.status}</span></p>
      </div>
      <div className="flex flex-row justify-between mb-2">
        <p><b>Author: </b>{pullRequest?.author}</p>
      </div>
      <div className="flex flex-row justify-between mb-2">
        <p><b>Title: </b>{pullRequest?.title}</p>
      </div>
      <div className="flex flex-row justify-between mb-2">
        <p><b>Description: </b>{pullRequest?.description}</p>
      </div>
    </div>
  );
}

export default PullRequestDetail;