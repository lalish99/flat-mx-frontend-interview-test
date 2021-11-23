import { useRouter } from "next/dist/client/router";
import Head from "next/head"
import { useMemo } from "react";
import BranchDetail from "../../components/BranchDetail";

const BranchDetailPage = () => {

  const router = useRouter()
  const { commit } = useMemo(()=>{
    return router.query
  }, [router, router.query])

  return (
    <>
      <Head>
        <title>Branch Detail</title>
      </Head>
      <BranchDetail commitHexsha={`${commit}`}/>
    </>
  );
}

export default BranchDetailPage;