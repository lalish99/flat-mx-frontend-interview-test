import { useRouter } from "next/dist/client/router"
import { useState, useCallback, FormEvent, useEffect } from "react"
import { PullRequestDocument, STATUS_OPTIONS } from "../../interfaces/git/pullRequest"
import usePullRequests from "../../utils/hooks/usePullRequests"

type PullRequestFormProps = {
  pullRequest?: PullRequestDocument
  create?: boolean
}

const PullRequestForm = ({pullRequest, create}: PullRequestFormProps) => {

  const router = useRouter();

  const [title, setTitle] = useState<string | undefined>(undefined)
  const [status, setStatus] = useState<typeof STATUS_OPTIONS[number]>("OPEN")
  const [author, setAuthor] = useState<string | undefined>()
  const [description, setDescription] = useState<string | undefined>(undefined)
  const [base, setBase] = useState<string | undefined>(undefined)
  const [rebase, setRebase] = useState<string | undefined>(undefined)
  const [errorDescription, setErrorDescription] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  useEffect(()=>{
    const cancel = pullRequest === undefined || pullRequest === null 
    if (cancel === true) { return }
    setTitle(pullRequest.title)
    setStatus(pullRequest.status)
    setAuthor(pullRequest.author)
    setDescription(pullRequest.description)
    setBase(pullRequest.base_branch)
    setRebase(pullRequest.rebase_branch)
  }, [pullRequest])

  const {createPullRequest, updatePullRequest} = usePullRequests()

  const handleDescriptionChange = useCallback((event: FormEvent<HTMLTextAreaElement>)=>{
    setDescription(event.currentTarget.value)
  }, [])

  const handleStatusChange = useCallback((event: FormEvent<HTMLSelectElement>)=>{
    setStatus(event.currentTarget.value as typeof STATUS_OPTIONS[number])
  }, [])

  const handleTitleChange = useCallback((event: FormEvent<HTMLInputElement>)=>{
    setTitle(event.currentTarget.value)
  }, [])

  const handleAuthorChange = useCallback((event: FormEvent<HTMLInputElement>)=>{
    setAuthor(event.currentTarget.value)
  }, [])

  const handleBaseChange = useCallback((event: FormEvent<HTMLInputElement>)=>{
    setBase(event.currentTarget.value)
  }, [])

  const handleRebaseChange = useCallback((event: FormEvent<HTMLInputElement>)=>{
    setRebase(event.currentTarget.value)
  }, [])

  const submit = useCallback(async () => {
    if (title === undefined || title === "") {
      setErrorDescription("title is required")
      return 
    }
    if (status === undefined) {
      setErrorDescription("status is required")
      return 
    }
    if (author === undefined || author === "") {
      setErrorDescription("author is required")
      return 
    }
    if (description === undefined || description === "") {
      setErrorDescription("description is required")
      return 
    }
    if (base === undefined || base === "") {
      setErrorDescription("base is required")
      return 
    }
    if (rebase === undefined || rebase === "") {
      setErrorDescription("rebase is required")
      return 
    }
    if (pullRequest !== undefined && pullRequest !== null && create === true) {
      console.error("Error: Attempting to update Pull Request with create set to true")
      return 
    }
    if (pullRequest === undefined && pullRequest === null && create !== true) {
      console.error("Error: Attempting to update Pull Request with undefined pullRequest")
      return 
    }
    setErrorDescription(undefined)
    if (loading === true) { return }
    setLoading(true)
    try {
      var pullRequestData: PullRequestDocument | undefined = undefined
      if (create === true){
        pullRequestData = {
          status: status,
          author: author,
          title: title,
          description: description,
          base_branch: base,
          rebase_branch: rebase,
        }
        const r = await createPullRequest(pullRequestData)
        setLoading(false)
        setSuccess(true)
        return
      }
      pullRequestData = {
        ...pullRequest,
        status: status,
        author: author,
        title: title,
        description: description,
        base_branch: base,
        rebase_branch: rebase,
      }
      const r = await updatePullRequest(pullRequestData.id, pullRequestData, false)
      setSuccess(true)
      setLoading(false)
    } catch (err) {
      console.error(`Error creating pull request: ${err}`)
    }
  }, [
    title,
    status,
    author,
    description,
    base,
    rebase
  ])

  const removeErrorDescription = useCallback(()=>{
    setErrorDescription(undefined)
  }, [])

  const hideSuccessAndChangeWindow = useCallback(()=>{
    setSuccess(false)
    router.push('/pull_requests/')
  }, [])

  return (
    <>
      <form>
        <div className="flex flex-row justify-after w-7/12 mb-2">
          <div className="flex flex-col mr-2">
            <label htmlFor="base" >To (Base):</label>
            <input
              className="flex-1 flex border border-2 rounded-md  border-gray-200 focus:outline-none p-2"
              id="base" 
              name="base" 
              type="text" 
              onChange={handleBaseChange} 
              value={base}
            />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-grow-0 mt-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <div className="flex flex-col ml-2">
            <label htmlFor="rebase" >From (Rebase):</label>
            <input
              className="flex-1 flex border border-2 rounded-md  border-gray-200 focus:outline-none p-2"
              id="rebase" 
              name="rebase" 
              type="text" 
              onChange={handleRebaseChange} 
              value={rebase}
            />
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="status" >Status:</label>
          <select 
            id="status" 
            name="status" 
            onChange={handleStatusChange} 
            value={status}
            className="flex-1 flex border border-2 rounded-md  border-gray-200 focus:outline-none p-2"
          >
            {STATUS_OPTIONS.map(value_option=>{
              return (
                <option key={value_option} value={value_option}>{value_option}</option>
              );
            })
            }
          </select>
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="title">Title:</label>
          <input
            className="flex-1 flex border border-2 rounded-md  border-gray-200 focus:outline-none p-2"
            id="title" 
            name="title" 
            type="text" 
            onChange={handleTitleChange} 
            value={title}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="author" >Author:</label>
          <input
            className="flex-1 flex border border-2 rounded-md  border-gray-200 focus:outline-none p-2"
            id="author" 
            name="author" 
            type="text" 
            onChange={handleAuthorChange} 
            value={author}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="description">Description:</label>
          <textarea 
            className="flex-1 flex border border-2 rounded-md  border-gray-200 focus:outline-none p-2"
            id="description"
            name="description"
            onChange={handleDescriptionChange}
            value={description}
            rows={10}
          ></textarea>
        </div>
        <button 
          onClick={submit}
          type="button" 
          className="bg-ruby-400 hover:bg-ruby-500 text-white rounded-sm mr-auto mt-2 px-3 py-2 flex flex-row"
        >
          {loading === true && 
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          }
          <p className="my-auto">{create === true ? "Create" : "Update"}</p>
        </button>
      </form>
      {(errorDescription !== undefined && errorDescription !== "") &&
        <div className="absolute flex flex-col bg-ruby-600 text-white px-4 py-3 rounded-md" style={{top:"2rem", right:"2rem", left:"auto", bottom:"auto"}}>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <p className="text-md"><b>Error on form submit:</b></p>
              <p className="text-sm">{errorDescription}</p>
            </div>
            <svg onClick={removeErrorDescription} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-6 my-auto cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      }
      {success === true && 
        <div className="absolute flex flex-col bg-green-500 text-white px-4 py-3 rounded-md" style={{top:"2rem", right:"2rem", left:"auto", bottom:"auto"}}>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <p className="text-md"><b>Succesfully {create === true ? "created" : "updated"} Pull Request</b></p>
            </div>
            <svg onClick={hideSuccessAndChangeWindow} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-6 my-auto cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      }
    </>
  );
}

export default PullRequestForm;