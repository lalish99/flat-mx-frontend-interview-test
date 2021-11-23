import { useState, useEffect } from "react"
import { PullRequestDocument } from "../../interfaces/git/pullRequest"
import usePullRequestes from "../../utils/hooks/usePullRequests"
import styles from "./PullRequestList.module.scss"
import PullRequestRow from "./Row"

const PullRequestList = () => {
  const [pullRequests, setPullRequestes] = useState<PullRequestDocument[]>([])
  const {listPullRequests} = usePullRequestes()

  const getAndSetPullRequestes = async () => {
    const pullRequests = await listPullRequests()
    setPullRequestes(pullRequests)
  }

  useEffect(()=>{
    const cancel = setPullRequestes === undefined
    if (cancel === true) { return }
    getAndSetPullRequestes()
  }, [setPullRequestes])

  return (
    <table className={styles['pull_request_list']}>
      <thead className="table w-full table-fixed table-fixed text-left text-black-300 bg-white tracking-widest rounded-t-md uppercase text-sm">
        <tr className="h-10 w-full">
          <th className="border-gray-200 border-2 w-10 text-center">#</th>
          <th className="border-gray-200 border-2">Title</th>
          <th className="border-gray-200 border-2">Author</th>
          <th className="border-gray-200 border-2">Status</th>
          <th className="border-gray-200 border-2 text-center w-40">Detail</th>
        </tr>
      </thead>
      <tbody className="table w-full overflow-hidden overflow-y-scroll h-full">
        {pullRequests.map((branch, index)=>{
          return (
            <PullRequestRow 
              key={index} 
              index={index} 
              status={branch.status}
              author={branch.author}
              title={branch.title}
              id={branch.id}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default PullRequestList;