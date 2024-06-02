import { notFound } from "next/navigation";
import { formatDate, getArticlePosts } from "@/app/case-studies/utils";
import { baseUrl } from "@/app/sitemap";
import { Button, CaseStudyMDX } from "@/components";
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
  let post = getArticlePosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="min-h-screen w-full px-4 lg:px-12 md:px-12 sm:px-8 flex items-center pb-24 pt-20 md:pt-36 bg-white">
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
          {/* <div className="w-full text-sm text-gray-500">Share this Article</div>
          <Button id="pinterset" className="w-auto block text-left">
            Pinterest
          </Button>
          <Button id="facebook" className="w-auto block text-left">
            Facebook
          </Button>
          <Button id="twitter" className="w-auto block text-left">
            Twitter
          </Button>
          <br /> */}
          <div className="w-full text-sm text-gray-500">Try Nasium</div>
          <Link
            target="_blank"
            href="https://play.google.com/store/apps/details?id=coach.nasium.twa"
            className="hover:-translate-y-0.5 duration-300 h-auto"
          >
            <Image
              className="w-24 border shadow-indigo-900 border-gray-700  rounded-lg"
              height={48}
              width={240}
              alt="google-play"
              src="/google-play.webp"
            />
          </Link>
          <Image
            className="w-24 opacity-50 border shadow-indigo-900 border-gray-700  rounded-lg"
            height={48}
            width={240}
            alt="app-store"
            src="/app-store.png"
          />
        </div>
      </div>
    </section>
  );
}
