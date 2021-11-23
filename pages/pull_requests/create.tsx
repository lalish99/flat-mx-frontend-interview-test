import Head from "next/head"
import PullRequestForm from "../../components/PullRequestForm";

const PullRequestsPage = () => {

  return (
    <>
      <Head>
        <title>Create Pull Requests</title>
      </Head>
      <PullRequestForm create/>
    </>
  );
}

export default PullRequestsPage;