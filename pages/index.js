import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/posts";

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}

export default function Home({ posts }) {
  console.log("HomePage render:", posts);
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="This is my blog" />
      </Head>
      <main>
        <h1>My blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
