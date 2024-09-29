import { notFound } from "next/navigation";
import { formatDate, getArticlePosts } from "@/app/[locale]/case-studies/utils";
import { baseUrl } from "@/app/[locale]/sitemap";
import { Button, Card, CaseStudyMDX } from "@/components";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  let posts = getArticlePosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  let post = getArticlePosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/case-studies/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Article({ params }: { params: { slug: string } }) {
  const posts = getArticlePosts();
  let post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="min-h-screen w-full px-2 lg:px-12 md:px-12 sm:px-8 flex items-center pb-24 pt-20 md:pt-36 bg-white">
      <div className="flex gap-12 flex-col sm:flex-row mx-auto">
        <div className="max-w-2xl w-full">
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.metadata.title,
                datePublished: post.metadata.publishedAt,
                dateModified: post.metadata.publishedAt,
                description: post.metadata.summary,
                image: post.metadata.image
                  ? `${baseUrl}${post.metadata.image}`
                  : `/og?title=${encodeURIComponent(post.metadata.title)}`,
                url: `${baseUrl}/blog/${post.slug}`,
                author: {
                  "@type": "Person",
                  name: "My Portfolio",
                },
              }),
            }}
          />
          <h1 className="title font-display font-black text-2xl tracking-tighter">
            {post.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-8 text-sm">
            <p className="text-sm text-neutral-400">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
          <article className="prose">
            <CaseStudyMDX source={post.content} />
          </article>
        </div>
        <div className="flex flex-col gap-4 w-64 h-96">
          
        <span className="opacity-60 text-md font-black font-display">
                   Case Studies
                  </span>
          {posts.slice(0, 6).map(
            (_post) =>
              post.slug !== _post.slug && (
                <Link
                  key={_post.slug}
                  className="transition-transform duration-150 hover:-translate-y-0.5 hover:underline no-underline flex flex-col gap-1"
                  href={_post.slug}
                >
                  <span className="text-sm font-black font-display">
                    {_post.metadata.title}
                  </span>
                  <p className="opacity-60 text-xs font-semibold">
                    {formatDate(_post.metadata.publishedAt)}
                  </p>
                </Link>
              )
          )}
          <Link
            className="transition-transform duration-150 hover:-translate-y-0.5 hover:underline no-underline flex flex-col gap-1"
            href="/case-studies/"
          >
            <p className="opacity-60 text-sm font-semibold">
              {"More..."}
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
