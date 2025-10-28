"use client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setBlogs(data.slice(0, 9)); // show first 9 blogs
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center py-10">Loading blogs...</p>;

  return (
    <div className="pb-20 pt-36 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
        Our Latest Blogs
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Explore inspiring stories, tips, and creative adventures from
        SketchVenture.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blogs/${blog.id}`}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <img
              src={`https://picsum.photos/400/200?random=${blog.id}`}
              alt={blog.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-3">{blog.body}</p>
              <span className="text-[var(--primary)] text-sm font-medium mt-3 inline-block">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
