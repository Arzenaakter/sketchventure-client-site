import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto pb-20 pt-36 px-4">
      <img
        src={`https://picsum.photos/800/400?random=${blog.id}`}
        alt={blog.title}
        className="rounded-2xl shadow-md mb-6 w-full"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
      <p className="text-gray-600 leading-relaxed">{blog.body}</p>
    </div>
  );
}
