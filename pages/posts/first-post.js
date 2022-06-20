import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {
      post: {
        title: "First Post",
        body: "First post, as static props",
      },
    },
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
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </>
  );
}

export default FirstPostPage;
