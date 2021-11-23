import Head from "next/head"
import Link from "next/link"
import PullRequestList from "../../components/PullRequestList";

const PullRequestsPage = () => {

  return (
    <>
      <Head>
        <title>Pull Requests</title>
      </Head>
      <div className="w-full flex flex-row">
        <Link href="/pull_requests/create">
          <a className="bg-ruby-400 text-white rounded-sm hover:bg-ruby-500 px-3 py-2 my-2">
            Create Pull Request
          </a>
        </Link>
      </div>
      <PullRequestList />
    </>
  );
}

export default PullRequestsPage;