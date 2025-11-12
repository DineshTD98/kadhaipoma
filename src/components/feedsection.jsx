import { useState } from "react";
import "./homepage.css";

function Feedsection({ user, handlestory, darkmode,setSettings, settings,feed,showcomment,setShowcomment}) {
   const [comment, setComment] = useState("");
   const newFeed = user.filter((u) => u.feed);
   const [likecount, setLikecount] = useState(newFeed.map(() => 0));
   const [feedcomment, setFeedComment] = useState(newFeed.map(() => []));

  const increment = (index) => {
    setLikecount((prev) => {
      const updated = [...prev];
      updated[index] += 1;
      return updated;
    });
  };

  const handlesubmit = (e, index) => {
    e.preventDefault();
    if (comment.trim() === "") return;
    setFeedComment((prev) => {
      const updated = [...prev];
      updated[index] = [...updated[index], comment];
      return updated;
    });
    setComment("");
  };

  return (
    <div
      className="Home d-flex"
      style={{
        backgroundColor: darkmode ? "grey" : "white",
        transition: "all 0.3s ease",
      }}
    >
      {/* LEFT: Feed Section */}
      <div
        className="feed-section d-flex flex-column gap-3"
        style={{
          width: showcomment !== null || settings ? "65%" : "100%",
          transition: "width 0.3s ease",
          padding: "10px",
        }}
      >
        {newFeed.length > 0 && feed &&
          newFeed.map((users, index) => (
            <div className="card" key={index}>
              <div className="card-body">
                <button
                  onClick={() => handlestory(users)}
                  className="border-0 bg-white"
                >
                  <img
                    src={users.dp}
                    alt="dp"
                    width={50}
                    height={50}
                    className="rounded-circle"
                    style={{
                      border: users.story ? "2px solid red" : "none",
                    }}
                  />
                </button>
                <h2 className="card-text">{users.name}</h2>
                <p className="card-text">{users.message}</p>
                <img
                  src={users.feed}
                  alt="feedphoto"
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                  }}
                />

                <div className="d-flex gap-3 mt-3">
                  <button onClick={() => increment(index)}>
                    ❤️ {likecount[index]}
                  </button>
                  <button
                    onClick={() =>{
                      setShowcomment(showcomment === index ? null  : index)
                      setSettings(false)
                    }}
                  >
                    💬
                  </button>
                  <button>➤</button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* RIGHT: Comment Panel */}
      {showcomment !== null &&  (
        <div
          className="comment-panel"
          style={{
            width: "35%",
            padding: "20px",
            borderLeft: "1px solid lightgray",
            backgroundColor: darkmode ? "#222" : "#f9f9f9",
            transition: "all 0.3s ease",
            marginTop:'40px'
          }}
        >
          <h4 className="mb-3">
            Comments for: {newFeed[showcomment]?.name}
          </h4>

          <form
            onSubmit={(e) => handlesubmit(e, showcomment)}
            className="mb-3"
          >
            <textarea
              cols={40}
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "6px",
              }}
            />
            <button
              type="submit"
              style={{
                marginTop: "8px",
                display: "block",
                background: "dodgerblue",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "6px",
              }}
            >
              Post
            </button>
          </form>

          <ul>
            { feedcomment[showcomment].map((li, i) => (
              <li key={i} style={{ marginBottom: "6px" }}>
                {li}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Feedsection;