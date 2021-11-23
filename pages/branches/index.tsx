import Head from "next/head"
import BranchList from "../../components/BranchList";

const BranchesPage = () => {

  return (
    <>
      <Head>
        <title>Branches</title>
      </Head>
      <BranchList />
    </>
  );
}

export default BranchesPage;