import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";

function List({ posts }) {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="23px">
          {posts.map((post, i) => (
            <Link key={post.id} to={`/post/${post.id}`}>
              <img
                src={`http://localhost:5000/uploads/${post.photos[0].image}`}
                style={{ width: "100%", display: "block" }}
                alt=""
              />
            </Link>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
}

export default List;
