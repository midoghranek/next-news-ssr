import { API, numberPerPage } from "config";
import { PostsList } from "containers";
import { useScrolling } from "hooks";
import { GetServerSideProps } from "next";
import { useSelector } from "react-redux";
import { Store } from "states/store";

export default function Home({ posts, page }) {
  const { loading } = useScrolling({ postsData: posts, page });
  const newPosts = useSelector((state: Store) => state.posts);
  return (
    <div className="container">
      <div className="sidebar"></div>
      <div className="content">
        <PostsList posts={newPosts} />
        {loading && <h3>Loading ...</h3>}
      </div>
      <div className="sidebar"></div>
      <style jsx>{`
        .container {
          max-width: 1140px;
          margin: 20px auto;
          display: flex;
          justify-content: space-between;
        }
        .content {
          width: 50%;
        }
        .sidebar {
          width: 22%;
          background-color: #fff;
          height: calc(100vh - 40px);
          position: sticky;
          top: 20px;
        }
        @media screen and (max-width: 768px) {
          .sidebar {
            display: none;
          }
          .content {
            width: calc(100% - 40px);
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = Number(query.page) || 1;
  const skip = page * numberPerPage - numberPerPage;
  const getNews = await fetch(`${API}?skip=${skip}&limit=${numberPerPage}`);
  const news = await getNews.json();

  return {
    props: {
      posts: news.news,
      page,
    },
  };
};
