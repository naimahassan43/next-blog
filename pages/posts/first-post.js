import Head from "next/head";
import { getPost } from "../../lib/posts";

export async function getStaticProps() {
  console.log("first page getStaticProps()");
  const post = await getPost("first-post");
  return {
    props: { post },
  };
}

function FirstPostPage({ post }) {
  console.log("first post page rendered: ", post);
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>
      <main>
        <p>{post.date}</p>

        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default FirstPostPage;
