import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data";
import Link from "next/link";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import ButtonCTA from "@/components/shared/ButtonCTA";

// ===================== META TAGS =====================
export async function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | 3x Growth Blog",
      description: "This blog post does not exist.",
    };
  }

  return {
    title: `${post.title} | 3x Growth Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

// ===================== STATIC PARAMS (SERVER ONLY) =====================
export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

// ===================== PAGE COMPONENT =====================
export default function BlogPost({ params }) {
  const post = getBlogPost(params.slug);
  const allPosts = getAllBlogPosts();

  if (!post) {
    return (
      <section className="py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-slate-600 mb-6">This article does not exist.</p>

        <Link
          href="/blog"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
        >
          Back to Blog
        </Link>
      </section>
    );
  }

  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      {/* HEADER */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-100 pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white font-semibold mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft size={18} /> Back to Blog
          </Link>

          <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
            {post.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>

          {/* META DATA */}
          <div className="flex flex-wrap gap-6 text-white/80 text-sm mt-6 pt-6 border-t border-white/20">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="max-w-4xl mx-auto px-4 -mt-12 mb-12">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-80 md:h-96 object-cover"
          />
        </div>
      </section>

      {/* CONTENT */}
      <article className="max-w-4xl mx-auto px-4">
        <div className="prose prose-lg max-w-none mb-16">
          {post.content.split("\n").map((line, idx) => {
            if (line.startsWith("# ")) {
              return (
                <h1 key={idx} className="text-3xl font-bold mt-10 mb-4">
                  {line.replace("# ", "")}
                </h1>
              );
            }

            if (line.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-2xl font-bold mt-8 mb-3">
                  {line.replace("## ", "")}
                </h2>
              );
            }

            if (line.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-xl font-bold mt-6 mb-3">
                  {line.replace("### ", "")}
                </h3>
              );
            }

            if (line.startsWith("- ")) {
              return (
                <li key={idx} className="ml-6 leading-relaxed text-slate-700">
                  {line.replace("- ", "")}
                </li>
              );
            }

            if (line.trim().startsWith("**") && line.trim().endsWith("**")) {
              return (
                <p
                  key={idx}
                  className="font-semibold text-slate-900 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600 my-4"
                >
                  {line.replace(/\*\*/g, "")}
                </p>
              );
            }

            if (line.trim() === "") return <div key={idx} className="my-4" />;

            return (
              <p key={idx} className="leading-relaxed text-slate-700 my-4">
                {line}
              </p>
            );
          })}
        </div>

        {/* CTA BOX */}
        <div className="bg-blue-600 text-white rounded-2xl p-10 text-center space-y-4 mb-16 shadow-lg">
          <h3 className="text-2xl font-bold">Ready to Build Your Sales System?</h3>
          <p className="text-blue-100 max-w-lg mx-auto">
            Get personalized guidance for your business.
          </p>

          <ButtonCTA href="tel:+916200207379" variant="primary">
            Book Your Free Consultation
          </ButtonCTA>
        </div>

        {/* RELATED POSTS */}
        {relatedPosts.length > 0 && (
          <section className="pt-10 border-t border-slate-200">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rpost) => (
                <Link key={rpost.slug} href={`/blog/${rpost.slug}`}>
                  <div className="rounded-xl p-6 bg-white border border-slate-200 hover:shadow-lg transition">
                    <h4 className="font-bold text-slate-900 mb-2 line-clamp-2 hover:text-blue-600">
                      {rpost.title}
                    </h4>
                    <p className="text-sm text-slate-600 line-clamp-2 mb-4">
                      {rpost.excerpt}
                    </p>

                    <div className="text-blue-600 font-semibold inline-flex items-center gap-2">
                      Read More <ArrowLeft className="rotate-180" size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
