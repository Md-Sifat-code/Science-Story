import React, { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa"; // Import React icon

import {
  FaHeart,
  FaComment,
  FaShare,
  FaUserCircle,
  FaPaperPlane,
} from "react-icons/fa";
// import { formatDistanceToNow } from "date-fns";

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [commentInputs, setCommentInputs] = useState({});
  const [replyInputs, setReplyInputs] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://biggangolpo.onrender.com/posts/recent"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchPosts();
  }, []);

  const handleLike = (postId) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              reactions: [...post.reactions, { id: Date.now(), type: "love" }], // Handle the like logic
            }
          : post
      )
    );
  };

  const handleAddComment = (postId, commentText) => {
    if (!commentText.trim()) return;

    const newComment = {
      id: Date.now(),
      content: commentText,
      username: "current_user", // Replace with real user if available
      createdAt: new Date().toISOString(),
      reactions: [],
      replies: [],
    };

    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );

    // Clear the input after adding the comment
    setCommentInputs((prev) => ({
      ...prev,
      [postId]: "", // Reset input for the specific post
    }));
  };

  const handleAddReply = (postId, commentId, replyText) => {
    if (!replyText.trim()) return;

    const newReply = {
      id: Date.now(),
      content: replyText,
      username: "current_user", // Replace with real user if available
      createdAt: new Date().toISOString(),
    };

    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId
                  ? { ...comment, replies: [...comment.replies, newReply] }
                  : comment
              ),
            }
          : post
      )
    );

    // Clear the input after adding the reply
    setReplyInputs((prev) => ({
      ...prev,
      [`${postId}-${commentId}`]: "", // Reset input for the specific comment's reply
    }));
  };

  const handleCommentInputChange = (postId, value) => {
    setCommentInputs((prev) => ({
      ...prev,
      [postId]: value,
    }));
  };

  const handleReplyInputChange = (postId, commentId, value) => {
    setReplyInputs((prev) => ({
      ...prev,
      [`${postId}-${commentId}`]: value,
    }));
  };
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <FaReact className="animate-spin text-6xl text-blue-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[url('/blbg.jpg')] bg-cover bg-center bg-no-repeat flex flex-col">
      <div className="bg-white/80 flex-1 flex flex-col">
        {/* Make the container for posts scrollable */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 mt-24 max-h-screen mb-4">
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md p-4 max-w-2xl mx-auto mb-3"
              >
                {/* Post Header */}
                <div className="flex items-center space-x-3">
                  <FaUserCircle size={40} className="text-gray-500" />
                  <div>
                    <p className="font-semibold text-[15px]">{post.username}</p>
                    <p className="text-xs text-gray-500">
                      {formatDistanceToNow(new Date(post.createdAt))} ago
                    </p>
                  </div>
                </div>

                {/* Post Content */}
                <p className="mt-4 text-[15px] text-gray-800 whitespace-pre-wrap">
                  {post.content.replaceAll('"', "")}
                </p>

                {/* Reactions */}
                <div className="mt-4 flex items-center justify-between text-gray-500 text-sm border-t pt-2">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleLike(post.id)}
                      className="flex items-center gap-1 hover:text-red-500"
                    >
                      <FaHeart />
                      <span>{post.reactions.length}</span>
                    </button>
                    <div className="flex items-center gap-1">
                      <FaComment />
                      <span>{post.comments.length}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer hover:underline">
                    <FaShare />
                    <span>Share</span>
                  </div>
                </div>

                {/* Comment Input */}
                <div className="mt-3 flex items-center gap-2">
                  <input
                    type="text"
                    value={commentInputs[post.id] || ""}
                    onChange={(e) =>
                      handleCommentInputChange(post.id, e.target.value)
                    }
                    placeholder="Write a comment..."
                    className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    onClick={() => {
                      handleAddComment(post.id, commentInputs[post.id]);
                    }}
                    className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
                  >
                    <FaPaperPlane />
                  </button>
                </div>

                {/* Comments */}
                {post.comments.length > 0 && (
                  <div className="mt-4 space-y-4">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="flex space-x-3">
                        <FaUserCircle size={30} className="text-gray-400" />
                        <div className="bg-gray-100 rounded-lg px-3 py-2 w-full">
                          <p className="text-sm font-semibold">
                            {comment.username}
                          </p>
                          <p className="text-sm text-gray-700">
                            {comment.content.replaceAll('"', "")}
                          </p>

                          {/* Reply Input */}
                          <div className="mt-3 flex items-center gap-2">
                            <input
                              type="text"
                              value={
                                replyInputs[`${post.id}-${comment.id}`] || ""
                              }
                              onChange={(e) =>
                                handleReplyInputChange(
                                  post.id,
                                  comment.id,
                                  e.target.value
                                )
                              }
                              placeholder="Write a reply..."
                              className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <button
                              onClick={() => {
                                handleAddReply(
                                  post.id,
                                  comment.id,
                                  replyInputs[`${post.id}-${comment.id}`]
                                );
                              }}
                              className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
                            >
                              <FaPaperPlane />
                            </button>
                          </div>

                          {/* Replies */}
                          {comment.replies.length > 0 && (
                            <div className="mt-2 space-y-2 pl-4 border-l border-gray-200">
                              {comment.replies.map((reply) => (
                                <div key={reply.id} className="flex space-x-2">
                                  <FaUserCircle
                                    size={25}
                                    className="text-gray-400"
                                  />
                                  <div className="bg-gray-50 rounded-md px-2 py-1">
                                    <p className="text-xs font-semibold">
                                      {reply.username}
                                    </p>
                                    <p className="text-xs text-gray-700">
                                      {reply.content.replaceAll('"', "")}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
