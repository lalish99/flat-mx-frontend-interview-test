import axios from 'axios'
import { CommitDocument } from '../../interfaces/git/commit'
import { CommitDetailURL } from '../../store/api/endpoints/commit'

/**
 * Set of hooks for Commit api access and management.
 * @returns Commit api access and management hooks
 */
const useCommits = () => {

  /**
   * Get the details of a commit from its hexsha
   * @param hexsha hexsha of commit from which detail is wanted
   * @returns CommitDocument if it exists, else undefined
   */
  const getCommitFromHexsha = async (hexsha: string): Promise<CommitDocument> => {
    const url = CommitDetailURL(hexsha)
    try {
      const rawResponse = await axios.get(url)
      const document = rawResponse.data as CommitDocument ?? undefined
      return document
    } catch (err) {
      console.error(`Error Getting branch detail: ${err}`)
      return undefined
    }
  }

  return {
    getCommitFromHexsha
  }
}

export default useCommits;