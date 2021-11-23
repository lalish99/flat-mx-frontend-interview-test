import { useRouter } from "next/dist/client/router";
import Head from "next/head"
import Link from "next/link"
import { useMemo } from "react";
import PullRequestDetail from "../../components/PullRequestDetail";

const PullRequestDetailPage = () => {

  const router = useRouter()
  const { id } = useMemo(()=>{
    return router.query
  }, [router, router.query])

  return (
    <>
      <Head>
        <title>Pull Request Detail</title>
      </Head>
      <div className="w-full flex flex-row">
        <Link href={`/pull_requests/edit/${id}`}>
          <a className="bg-gray-400 text-white rounded-sm hover:bg-gray-500 px-3 py-2 my-2">
            Edit Pull Request
          </a>
        </Link>
      </div>
      <PullRequestDetail id={parseInt(`${id}`)}/>
    </>
  );
}

export default PullRequestDetailPage;