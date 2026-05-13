import { useState, useMemo } from "react";
import CardBlog from "@/components/CardBlog";
import { CATEGORIES, BLOG_DATA } from "@/data/blogs";

export default function Blogs() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  const filteredBlogs = useMemo(() => {
    if (selectedCategoryId === 1) return BLOG_DATA;
    return BLOG_DATA.filter((blog) => blog.category_id === selectedCategoryId);
  }, [selectedCategoryId]);

  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto flex flex-col gap-y-5 justify-center items-center px-12">
        {/* Heading */}
        <div className="w-full h-auto flex">
          <p className="text-[#FFFFFF] text-[24px] font-[600]">
            Discover more topics
          </p>
        </div>

        {/* Category Filter */}
        <div className="w-full h-auto flex flex-row gap-x-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-3">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategoryId === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategoryId(category.id)}
                className={`
                  w-fit h-auto flex shrink-0 justify-center items-center px-5 py-1.5
                  border rounded-full transition-all duration-200 ease-in-out
                  ${
                    isActive
                      ? "bg-[#021D21] border-[#68D0E5] text-[#68D0E5]"
                      : "border-transparent text-[#9CA3AF] hover:bg-[#021D21] hover:border-[#68D0E5] hover:text-[#68D0E5]"
                  }
                `}
              >
                <p className="text-[14px]">{category.label}</p>
              </button>
            );
          })}
        </div>

        {/* Blog Grid */}
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <CardBlog
                key={blog.id}
                image={blog.image}
                tag={
                  CATEGORIES.find((c) => c.id === blog.category_id)?.label ?? ""
                }
                time={`${blog.readTime} min read`}
                title={blog.title}
                description={blog.description}
                author_logo={blog.author.avatar}
                author={blog.author.name}
                category={
                  CATEGORIES.find((c) => c.id === blog.category_id)?.label ?? ""
                }
                created_at={new Date(blog.publishedAt).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    year: "numeric",
                  },
                )}
              />
            ))
          ) : (
            <div className="col-span-3 flex justify-center items-center py-16">
              <p className="text-[#6B7280] text-[14px]">
                No articles in this category yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
