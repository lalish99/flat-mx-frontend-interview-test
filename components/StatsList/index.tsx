import { CommitFileStats } from '../../interfaces/git/commit';
import styles from './StatsList.module.scss'
import StatsListRow from './Row';

type StatsListProps = {
  stats: CommitFileStats[] | undefined

}
const StatsList = ({stats}: StatsListProps) => {

  return (
    <table className={styles['commit_list']}>
      <thead className="table w-full table-fixed table-fixed text-left text-black-300 bg-white tracking-widest rounded-t-md uppercase text-sm">
        <tr className="h-10 w-full">
          <th className="border-gray-200 border-2 w-10 text-center">#</th>
          <th className="border-gray-200 border-2">File</th>
          <th className="border-gray-200 border-2">Insertions</th>
          <th className="border-gray-200 border-2">Deletions</th>
          <th className="border-gray-200 border-2">Lines</th>
        </tr>
      </thead>
      <tbody className="table w-full overflow-hidden overflow-y-scroll h-full">
        {stats?.map((stat, index)=>{
          return (
            <StatsListRow 
              key={index}
              index={index} 
              name={stat.file_name} 
              insertions={stat.stats.insertions} 
              deletions={stat.stats.deletions} 
              lines={stat.stats.lines}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default StatsList;