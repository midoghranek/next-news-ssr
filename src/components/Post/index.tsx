import { memo } from "react";
import RSS from "SVG/RSS";
import type { PostType } from "types";
import { NOT_FOUND_IMAGE } from "config";

interface PostProps {
  data: PostType;
}

const Post: React.FC<PostProps> = ({ data }) => {
  const date = new Date(data?.created_at);
  return (
    <article>
      <div className="header">
        <div className="source">
          {data?.source?.url ? (
            <img
              className="image"
              src={data?.source?.url}
              width={30}
              height={30}
              onError={(e) => (e.target.src = NOT_FOUND_IMAGE)}
            />
          ) : null}
          <h5>{data?.source?.title?.replaceAll("amp;", "")}</h5>
        </div>
        <div className="icon">
          <RSS color="#0aa47b" width={25} height={25} />
        </div>
      </div>
      <h2>{data?.title}</h2>
      <p className="time">{date.toUTCString()}</p>
      <div className="keywords">
        {data?.keywords?.map((keyword, index) => (
          <span key={`${keyword?._id}--keyword--${index}`}>
            {keyword?.name}
          </span>
        ))}
      </div>
      <style jsx>{`
        article {
          background-color: #fff;
          margin-bottom: 30px;
          padding: 20px;
          border-radius: 20px;
        }
        .header {
          display: flex;
          justify-content: space-between;
        }
        .source {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .source h5 {
          margin: 0;
          margin-left: 10px;
        }
        .keywords {
          display: flex;
          flex-wrap: wrap;
        }
        .keywords span {
          color: #0aa47b;
          border: 1px solid;
          border-radius: 50px;
          padding: 10px 15px;
          margin-right: 5px;
          font-size: 12px;
          margin-bottom: 5px;
          font-weight: bold;
        }
        .time {
          color: #888;
        }
      `}</style>
    </article>
  );
};

const areEqual = (prevProps: PostProps, nextProps: PostProps): boolean => {
  return prevProps.data._id === nextProps.data._id;
};
export default memo(Post, areEqual);
