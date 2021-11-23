import { useRouter } from "next/dist/client/router";
import Head from "next/head"
import { useMemo } from "react";
import CommitDetail from "../../components/CommitDetail";

const CommitDetailPage = () => {

  const router = useRouter()
  const { hexsha } = useMemo(()=>{
    return router.query
  }, [router, router.query])

  return (
    <>
      <Head>
        <title>Commit Detail</title>
      </Head>
      <CommitDetail hexsha={`${hexsha}`}/>
    </>
  );
}

export default CommitDetailPage;