"use client";

import { useState } from "react";
import Link from "next/link";
import { getAllBlogPosts, getCategories } from "@/lib/blog-data";
import { ArrowRight, Calendar, Clock } from "lucide-react";

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
      {/* HERO — COMPACT */}
      <section className="min-h-[45vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-blue-300 pt-20 pb-10">
        <div className="max-w-3xl mx-auto text-center px-4 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Insights for <span className="text-yellow-300">SME Founders</span>
          </h1>

          <p className="text-base md:text-lg text-blue-50 font-light">
            Learn proven strategies to build predictable revenue and scale your sales function.
          </p>

          <div className="h-1 w-16 bg-yellow-300 mx-auto rounded-full" />
        </div>
      </section>

      {/* CATEGORY FILTER — COMPACT */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-sm scale-[1.03]"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG GRID — SUPER CLEAN, COMPACT */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-20 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="
                rounded-xl overflow-hidden bg-white 
                border border-slate-200
                hover:border-blue-400
                transition-all duration-300
                hover:shadow-md
                flex flex-col h-full
              ">
                
                {/* Image */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  <span className="
                    absolute top-3 right-3 text-xs font-bold 
                    bg-blue-600 text-white px-3 py-1.5 rounded-full shadow-sm
                  ">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="
                    text-lg font-bold text-slate-900 mb-2 line-clamp-2
                    group-hover:text-blue-600 transition-colors
                  ">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm line-clamp-2 mb-4 font-light">
                    {post.excerpt}
                  </p>

                  {/* Meta + CTA */}
                  <div className="mt-auto pt-4 border-t border-slate-200 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={15} className="text-blue-600" />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Clock size={15} className="text-blue-600" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="
                      inline-flex items-center gap-2 
                      text-blue-600 font-semibold text-sm
                      group-hover:gap-3 transition-all
                    ">
                      Read Article
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* NO POSTS STATE */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-14">
            <h3 className="text-xl font-bold text-slate-900 mb-1">No posts found</h3>
            <p className="text-sm text-slate-600">
              Try selecting a different category.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
