import axios from 'axios'
import { PullRequestDocument } from "../../interfaces/git/pullRequest"
import { PullRequestListURL, PullRequestDetailURL } from "../../store/api/endpoints/pullRequest";

const usePullRequest = () => {

  const retrievePullRequests = async (id:number): Promise<PullRequestDocument> => {
    const url = PullRequestDetailURL(id)
    try {
      const rawResponse = await axios.get(url)
      const document = rawResponse.data as PullRequestDocument ?? undefined
      return document
    } catch (err) {
      const message = `Error Retrieving Pull Request: ${err}`
      console.error(message)
      throw new Error(`Error Retrieving Pull Request: ${err}`)
    }
  }

  const listPullRequests = async (): Promise<PullRequestDocument[]> => {
    const url = PullRequestListURL()
    try {
      const rawResponse = await axios.get(url)
      const document = rawResponse.data as PullRequestDocument[] ?? undefined
      return document
    } catch (err) {
      const message = `Error Listing Pull Requests: ${err}`
      console.error(message)
      throw new Error(`Error Listing Pull Requests: ${err}`)
    }
  }

  const createPullRequest = async (data: PullRequestDocument): Promise<PullRequestDocument> => {
    const url = PullRequestListURL()
    try {
      const rawResponse = await axios.post(url, data)
      const document = rawResponse.data as PullRequestDocument ?? undefined
      return document
    } catch (err) {
      const message = `Error Creating Pull Request: ${err}`
      console.error(message)
      throw new Error(`Error Creating Pull Request: ${err}`)
    }
  }

  const updatePullRequest = async (id: number, data: PullRequestDocument, partial: boolean = false): Promise<PullRequestDocument | undefined> => {
    if (id !== data.id) {
      console.error(`Trying to update a pull request with missmatching ids ${id}: ${data.id}`)
      return undefined
    }
    const url = PullRequestDetailURL(data.id)
    try {
      const rawResponse = async ()=>{
        if (partial === true) {
          return await axios.patch(url, data)
        }
        return await axios.put(url, data)
      }
      const document = (await rawResponse()).data as PullRequestDocument ?? undefined
      return document
    } catch (err) {
      const message = `Error Updating Pull Request: ${err}`
      console.error(message)
      throw new Error(`Error Updating Pull Request: ${err}`)
    }
  }

  return {
    retrievePullRequests,
    listPullRequests,
    createPullRequest,
    updatePullRequest,
  }
}

export default usePullRequest;