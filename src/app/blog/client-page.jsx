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
      {/* HERO — ULTRA COMPACT & PREMIUM */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative max-w-4xl mx-auto text-center px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            Sales Growth Insights
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Insights for{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
              SME Founders
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-50/90 font-light max-w-2xl mx-auto leading-relaxed">
            Learn proven strategies to build predictable revenue and scale your sales function.
          </p>

          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-8 bg-gradient-to-r from-transparent to-yellow-300 rounded-full" />
            <div className="h-1 w-16 bg-yellow-300 rounded-full" />
            <div className="h-1 w-8 bg-gradient-to-l from-transparent to-yellow-300 rounded-full" />
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER — GLASSMORPHISM */}
      <section className="sticky top-16 z-40 backdrop-blur-xl bg-white/80 border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300
                  ${selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG GRID — PREMIUM CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <article className="
                relative rounded-2xl overflow-hidden bg-white 
                border border-slate-200/60
                hover:border-blue-400
                transition-all duration-500
                hover:shadow-2xl hover:shadow-blue-500/10
                hover:-translate-y-2
                flex flex-col h-full
              ">

                {/* Image with Overlay */}
                <div className="relative h-56 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <span className="
                    absolute top-4 right-4 text-xs font-bold 
                    bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                    px-4 py-2 rounded-full shadow-lg
                    backdrop-blur-sm
                  ">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="
                    text-xl font-bold text-slate-900 mb-3 line-clamp-2
                    group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text
                    transition-all duration-300
                  ">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm line-clamp-3 mb-5 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Meta + CTA */}
                  <div className="mt-auto space-y-4">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-blue-600" />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Clock size={14} className="text-blue-600" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="
                      inline-flex items-center gap-2 
                      text-blue-600 font-bold text-sm
                      group-hover:gap-4 transition-all duration-300
                    ">
                      Read Article
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
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
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-10 h-10 text-slate-400" />
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
