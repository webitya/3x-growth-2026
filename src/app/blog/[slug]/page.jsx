import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data";
import Link from "next/link";
import { Calendar, User, Clock, ArrowLeft, Sparkles } from "lucide-react";
import ButtonCTA from "@/components/shared/ButtonCTA";

// ===================== META TAGS =====================
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

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
export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const allPosts = getAllBlogPosts();

  if (!post) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
        <div className="text-center px-6">
          <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-12 h-12 text-slate-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-slate-900">Post Not Found</h1>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">
            This article does not exist or has been removed.
          </p>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      {/* HEADER — PREMIUM GRADIENT */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 pt-32 pb-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold mb-8 hover:gap-3 transition-all group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/30">
            <Sparkles className="w-4 h-4" />
            {post.category}
          </span>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
            {post.title}
          </h1>

          {/* META DATA */}
          <div className="flex flex-wrap gap-6 text-white/90 text-sm pt-6 border-t border-white/20">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span className="font-medium">{post.author}</span>
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
      <section className="max-w-5xl mx-auto px-6 -mt-16 mb-16 relative z-10">
        <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 border-8 border-white">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-80 md:h-[28rem] object-cover"
          />
        </div>
      </section>

      {/* CONTENT */}
      <article className="max-w-4xl mx-auto px-6">
        <div className="prose prose-lg max-w-none mb-20">
          {post.content.split("\n").map((line, idx) => {
            if (line.startsWith("# ")) {
              return (
                <h1 key={idx} className="text-4xl font-black mt-12 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {line.replace("# ", "")}
                </h1>
              );
            }

            if (line.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-3xl font-bold mt-10 mb-5 text-slate-900">
                  {line.replace("## ", "")}
                </h2>
              );
            }

            if (line.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-2xl font-bold mt-8 mb-4 text-slate-800">
                  {line.replace("### ", "")}
                </h3>
              );
            }

            if (line.startsWith("- ")) {
              return (
                <li key={idx} className="ml-6 leading-relaxed text-slate-700 text-lg">
                  {line.replace("- ", "")}
                </li>
              );
            }

            if (line.trim().startsWith("**") && line.trim().endsWith("**")) {
              return (
                <p
                  key={idx}
                  className="font-bold text-slate-900 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-l-4 border-blue-600 my-6 shadow-sm"
                >
                  {line.replace(/\*\*/g, "")}
                </p>
              );
            }

            if (line.trim() === "") return <div key={idx} className="my-5" />;

            return (
              <p key={idx} className="leading-relaxed text-slate-700 my-5 text-lg">
                {line}
              </p>
            );
          })}
        </div>

        {/* CTA BOX — PREMIUM */}
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white rounded-3xl p-12 text-center space-y-6 mb-20 shadow-2xl shadow-blue-500/20 overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Ready to Build Your Sales System?
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
              Get personalized guidance for your business. Let's transform your sales process together.
            </p>

            <Link
              href="https://calendly.com/salessyllabus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all hover:scale-105"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>

        {/* RELATED POSTS — ENHANCED */}
        {relatedPosts.length > 0 && (
          <section className="pt-12 border-t-2 border-slate-200 mb-20">
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Related Articles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((rpost) => (
                <Link
                  key={rpost.slug}
                  href={`/blog/${rpost.slug}`}
                  className="group"
                >
                  <div className="rounded-2xl p-8 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1 h-full">
                    <span className="inline-block text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 rounded-full mb-4">
                      {rpost.category}
                    </span>

                    <h4 className="font-bold text-xl text-slate-900 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                      {rpost.title}
                    </h4>

                    <p className="text-sm text-slate-600 line-clamp-3 mb-5 leading-relaxed">
                      {rpost.excerpt}
                    </p>

                    <div className="inline-flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all">
                      Read More
                      <ArrowLeft className="rotate-180 group-hover:translate-x-1 transition-transform" size={16} />
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
