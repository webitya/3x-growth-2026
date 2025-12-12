"use client";

import { useState } from "react";
import Link from "next/link";
import { getAllBlogPosts, getCategories } from "@/lib/blog-data";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";

export default function BlogClientPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const posts = getAllBlogPosts();
  const categories = ["All", ...getCategories()];

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <>
      {/* HERO - Compact & Premium */}
      <section className="relative py-16 flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/40">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl animate-blob animation-delay-1000"></div>

          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(to right, rgb(59, 130, 246) 1px, transparent 1px), linear-gradient(to bottom, rgb(59, 130, 246) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 rounded-full mb-6 shadow-lg shadow-blue-500/10">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-blue-700 tracking-wide">SALES GROWTH INSIGHTS</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
            Insights for{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Founders
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Learn proven strategies to build predictable revenue and scale your sales function.
          </p>
        </div>

        {/* Bottom Separator */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-50/40 to-transparent"></div>
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path
              d="M0,30 Q300,15 600,30 T1200,30"
              stroke="rgb(96, 165, 250)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.2"
            />
          </svg>
        </div>
      </section>

      {/* CATEGORY FILTER - Compact */}
      <section className="sticky top-16 z-40 backdrop-blur-xl bg-white/90 border-b border-blue-200/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300
                  ${selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                    : "bg-blue-50/80 text-slate-700 hover:bg-blue-100 hover:scale-105 border border-blue-200/50"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG GRID - Compact Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <article className="
                relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm
                border border-blue-200/40
                hover:border-blue-300/60
                transition-all duration-500
                hover:shadow-xl hover:shadow-blue-500/10
                hover:-translate-y-2
                flex flex-col h-full
              ">

                {/* Image - Compact */}
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge - Compact */}
                  <span className="
                    absolute top-3 right-3 text-[10px] font-bold 
                    bg-gradient-to-r from-blue-600 to-cyan-600 text-white 
                    px-3 py-1 rounded-full shadow-lg
                    backdrop-blur-sm
                  ">
                    {post.category}
                  </span>
                </div>

                {/* Content - Compact */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="
                    text-lg font-bold text-slate-900 mb-2 line-clamp-2
                    group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text
                    transition-all duration-300
                  ">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm line-clamp-2 mb-4 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Meta + CTA - Compact */}
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-blue-600" />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Clock size={12} className="text-blue-600" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="
                      inline-flex items-center gap-2 
                      text-blue-600 font-bold text-sm
                      group-hover:gap-3 transition-all duration-300
                    ">
                      Read Article
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* NO POSTS STATE */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No posts found</h3>
            <p className="text-sm text-slate-600">
              Try selecting a different category.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
