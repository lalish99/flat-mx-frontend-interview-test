import { CommitDocument } from "../../interfaces/git/commit"
import styles from "./CommitList.module.scss"
import CommitListRow from "./Row"

type CommitListProps = {
  commits: CommitDocument[]
}

const CommitList = ({commits}: CommitListProps) => {
  //with commit messages, authors and timestamps.
  return (
    <table className={styles['branch_list']}>
      <thead className="table w-full table-fixed table-fixed text-left text-black-300 bg-white tracking-widest rounded-t-md uppercase text-sm">
        <tr className="h-10 w-full">
          <th className="border-gray-200 border-2 w-10 text-center">#</th>
          <th className="border-gray-200 border-2">Author Name</th>
          <th className="border-gray-200 border-2">Author Email</th>
          <th className="border-gray-200 border-2">Commited on date</th>
          <th className="border-gray-200 border-2">Summary</th>
          <th className="border-gray-200 border-2 text-center w-40">Detail</th>
        </tr>
      </thead>
      <tbody className="table w-full overflow-hidden overflow-y-scroll h-full">
        {commits?.map((commit, index)=>{
          return (
            <CommitListRow index={index} author={commit.author} committed_date={commit.committed_date} summary={commit.summary}/>
          );
        })}
      </tbody>
    </table>
  );
}

export default CommitList;