import { useRouter } from "next/dist/client/router";
import Head from "next/head"
import BranchDetail from "../../components/BranchDetail";

const BranchDetailPage = () => {

  const router = useRouter()
  const { commit } = router.query

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