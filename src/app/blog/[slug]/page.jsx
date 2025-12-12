import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data";
import Link from "next/link";
import { Calendar, User, Clock, ArrowLeft, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import HomepageCTA from "@/components/homepage/HomepageCTA";

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

// ===================== STATIC PARAMS =====================
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
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">Back to Blog</Link>
      </div>
    );
  }

  // Logic to get related posts or fallback to recent posts
  let relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug);

  if (relatedPosts.length < 3) {
    const additionalPosts = allPosts
      .filter((p) => p.slug !== post.slug && !relatedPosts.find((rp) => rp.slug === p.slug))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts = [...relatedPosts, ...additionalPosts];
  }

  // Helper to render inline markdown (bolding)
  const renderText = (text) => {
    // Split by **bold** pattern
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <main className="bg-white min-h-screen text-slate-900">

      {/* GLOBAL NAV & BREADCRUMB ROW */}
      <div className="border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/blog"
            className="group flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {post.category}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">

          {/* LEFT COLUMN: CONTENT (8 cols) */}
          <article className="lg:col-span-8">

            {/* Header (Title & Meta) - Now Aligned with Content */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 mb-6">
                <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                  <User className="w-3.5 h-3.5 text-blue-500" />
                  <span className="text-slate-700">{post.author}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                  <Calendar className="w-3.5 h-3.5 text-blue-500" />
                  <span>{new Date(post.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-12 border border-slate-200 shadow-sm">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Markdown Content */}
            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-8 prose-li:text-slate-600 prose-strong:text-slate-900 prose-a:text-blue-600 hover:prose-a:underline">
              {post.content.split("\n").map((line, idx) => {
                // Headings
                if (line.startsWith("# ")) return <h1 key={idx} className="mt-12 mb-6 text-3xl">{renderText(line.replace("# ", ""))}</h1>;
                if (line.startsWith("## ")) return <h2 key={idx} className="mt-10 mb-5 text-2xl border-l-4 border-blue-500 pl-4">{renderText(line.replace("## ", ""))}</h2>;
                if (line.startsWith("### ")) return <h3 key={idx} className="mt-8 mb-4 text-xl">{renderText(line.replace("### ", ""))}</h3>;

                // Lists
                if (line.startsWith("- ")) return <li key={idx} className="ml-4 list-disc pl-2">{renderText(line.replace("- ", ""))}</li>;

                // Bold Callouts
                if (line.trim().startsWith("**") && line.trim().endsWith("**")) {
                  return (
                    <div key={idx} className="bg-blue-50 border border-blue-100 rounded-xl p-6 my-8 text-blue-900 font-medium leading-relaxed">
                      {line.replace(/\*\*/g, "")}
                    </div>
                  );
                }

                // Empty lines
                if (line.trim() === "") return <div key={idx} className="h-4"></div>;

                // Paragraphs
                return <p key={idx}>{renderText(line)}</p>;
              })}
            </div>
          </article>

          {/* RIGHT COLUMN: SIDEBAR (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-8 space-y-8">

              {/* Author Widget */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 border border-slate-200">
                    <User className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{post.author}</h3>
                    <p className="text-xs text-slate-500 font-medium">Sales System Architect</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <a href="#" className="flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-50 text-slate-600 hover:bg-[#0077b5] hover:text-white transition-colors text-xs font-bold border border-slate-100">
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                  <a href="#" className="flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-50 text-slate-600 hover:bg-black hover:text-white transition-colors text-xs font-bold border border-slate-100">
                    <Twitter className="w-3.5 h-3.5" /> Twitter
                  </a>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Helping B2B founders scale revenue through predictable sales systems.
                </p>
              </div>

              {/* Related Articles Widget */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 pl-1">Related Articles</h3>
                  <div className="flex flex-col gap-4">
                    {relatedPosts.map((rpost, i) => (
                      <Link key={i} href={`/blog/${rpost.slug}`} className="group block bg-slate-50 hover:bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                        <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-2">{rpost.category}</div>
                        <h4 className="font-bold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors mb-2">
                          {rpost.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400">
                          <Clock className="w-3 h-3" />
                          <span>{rpost.readTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </aside>

        </div>
      </div>

      <HomepageCTA />
    </main>
  );
}
