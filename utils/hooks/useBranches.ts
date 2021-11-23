import { BranchDocument } from "../../interfaces/git/branch"
import axios from 'axios'
import { BranchDetailURL, BranchListURL } from "../../store/api/endpoints/branch"

/**
 * Set of hooks for Branch api access and management.
 * @returns Branch api CRUD hooks
 */
const useBranches = () => {
  
  /**
   * Retrieve branches from api endpoint
   * @returns List of Branches found on server
   */
  const getAllBranches = async (): Promise<BranchDocument[]> => {
    const url = BranchListURL()
    try {
      const rawResponse = await axios.get(url)
      const list = rawResponse.data as BranchDocument[]
      return list
    } catch (err) {
      console.error(`Error Getting list of branches: ${err}`)
      return []
    }
  }
  
  /**
   * Retrieve branch detail information from api endpoint
   * @param commit hexsha from branch head commit used for branch lookup
   * @returns Branch if it exists, else undefined
   */
  const getBranchFromCommit = async (commit: string): Promise<BranchDocument | undefined> => {
    const url = BranchDetailURL(commit)
    try {
      const rawResponse = await axios.get(url)
      const document = rawResponse.data as BranchDocument ?? undefined
      return document
    } catch (err) {
      console.error(`Error Getting branch detail: ${err}`)
      return undefined
    }
  }
  
  return {
    getAllBranches,
    getBranchFromCommit,
  }
}

export default useBranches