import { useRouter } from "next/dist/client/router";
import Head from "next/head"
import { useEffect, useMemo, useState } from "react";
import PullRequestForm from "../../../components/PullRequestForm";
import { PullRequestDocument } from "../../../interfaces/git/pullRequest";
import usePullRequests from "../../../utils/hooks/usePullRequests";

const PullRequestDetailPage = () => {
  
  const [pullRequest, setPullRequest] = useState<PullRequestDocument | undefined>(undefined)
  const {retrievePullRequests} = usePullRequests()
  
  const router = useRouter()
  const id = useMemo(()=>{
    if (!parseInt(`${router.query["id"]}`)) { return undefined }
    return parseInt(`${router.query["id"]}`)
  }, [router, router.query])


  const getAndSetPullRequests = async () => {
    const pullRequest = await retrievePullRequests(id)
    setPullRequest(pullRequest)
  }

  useEffect(()=>{
    const cancel = setPullRequest === undefined || id === undefined || id < 0 || id === NaN
    if (cancel === true) { return }
    getAndSetPullRequests()
  }, [setPullRequest, id])

  return (
    <>
      <Head>
        <title>Pull Request Detail</title>
      </Head>
      <PullRequestForm pullRequest={pullRequest} create={false}/>
    </>
  );
}

export default PullRequestDetailPage;