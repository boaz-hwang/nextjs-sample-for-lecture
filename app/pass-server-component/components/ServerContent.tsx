export default async function ServerContent() {
  const res = await fetch("https://api.vercel.app/blog");
  const posts = await res.json();

  return (
    <div>
      <p>This is Server Fetched Content</p>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
