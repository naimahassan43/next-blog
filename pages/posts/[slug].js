import Head from "next/head";
import { getPost, getSlugs } from "../../lib/posts";

export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),

    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log("post page getStaticProps()", slug);
  const post = await getPost(slug);
  return {
    props: { post },
  };
}

function PostPage({ post }) {
  console.log(" post page rendered: ", post);
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

export default PostPage;
