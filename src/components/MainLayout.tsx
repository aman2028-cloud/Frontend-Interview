// import { useState, useEffect } from "react"
// import { useQuery } from "@tanstack/react-query"
// import BlogDetailHeader from "@/components/BlogDetailHeader"
// import { getBlogs } from "@/api/blogs"
// import type { Blog } from "@/api/blogs"

// export default function MainLayout() {
//   const { data: articles, isLoading, isError } = useQuery<Blog[], Error>({
//     queryKey: ["blogs"],
//     queryFn: getBlogs,
//   })

//   const [activeArticle, setActiveArticle] = useState<Blog | null>(null)

//   // Initialize first article
//   useEffect(() => {
//     if (articles && articles.length && !activeArticle) {
//       setActiveArticle(articles[0])
//     }
//   }, [articles, activeArticle])

//   if (isLoading) {
//     return (
//       <div className="h-screen flex items-center justify-center text-sm text-muted-foreground">
//         Loading articles...
//       </div>
//     )
//   }

//   if (isError || !articles) {
//     return (
//       <div className="h-screen flex items-center justify-center text-sm text-destructive">
//         Failed to load articles.
//       </div>
//     )
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* MAIN  */}
//       <div className="grid grid-cols-3 gap-4 p-4">
//         {/* LEFT SIDEBAR */}
//         <aside className="space-y-2">
//           {articles.map((article) => (
//             <div
//               key={article.id}
//               onClick={() => setActiveArticle(article)}
//               className={`border rounded-lg p-3 cursor-pointer transition-all duration-200 hover:shadow-lg ${activeArticle?.id === article.id ? "bg-muted shadow" : "bg-background"
//                 }`}
//             >
//               {article.coverImage && (
//                 <img
//                   src={article.coverImage}
//                   alt={article.title}
//                   className="w-full h-24 object-cover rounded-md mb-2"
//                 />
//               )}
//               <h3 className="font-semibold text-sm">{article.title}</h3>
//               <p className="text-xs text-muted-foreground">
//                 {article.category.join(", ")} •{" "}
//                 {new Date(article.date).toLocaleDateString()}
//               </p>
//             </div>
//           ))}
//         </aside>

//         {/* RIGHT */}
//         <section className="col-span-2 flex flex-col">
//           {activeArticle && (
//             <>
//               <BlogDetailHeader title={activeArticle.title} />

//               <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
//                 <span>By Aman</span>
//                 <span>•</span>
//                 <span>{new Date(activeArticle.date).toLocaleDateString()}</span>
//                 {activeArticle.category.length > 0 && (
//                   <>
//                     <span>•</span>
//                     <span>{activeArticle.category.join(", ")}</span>
//                   </>
//                 )}
//               </div>

//               {activeArticle.coverImage && (
//                 <img
//                   src={activeArticle.coverImage}
//                   alt={activeArticle.title}
//                   className="w-full rounded-lg mt-4 object-cover max-h-64"
//                 />
//               )}

//               <div className="mt-6 space-y-4 text-sm leading-6 text-foreground">
//                 {activeArticle.content
//                   .split("\n")
//                   .map((paragraph, index) => (
//                     <p key={index}>{paragraph}</p>
//                   ))}
//               </div>
//             </>
//           )}
//         </section>
//       </div>

//       {/* FOOTER */}
//       <footer className="bg-gray-900 text-gray-200 p-4 text-sm text-center mt-8">
//         <p>© 2026 Aman Blog. All rights reserved.</p>
//         <p>
//           Built with <span className="font-semibold">React, TanStack Query, and Tailwind CSS</span>
//         </p>
//       </footer>
//     </div>
//   )
// }






import { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import BlogDetailHeader from "@/components/BlogDetailHeader"
import { getBlogs } from "@/api/blogs"
import type { Blog } from "@/api/blogs"

export default function MainLayout() {
  const { data: articles, isLoading, isError } = useQuery<Blog[], Error>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })

  const [activeArticle, setActiveArticle] = useState<Blog | null>(null)

  // Initialize first article
  useEffect(() => {
    if (articles && articles.length && !activeArticle) {
      setActiveArticle(articles[0])
    }
  }, [articles, activeArticle])

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center text-sm text-muted-foreground">
        Loading articles...
      </div>
    )
  }

  if (isError || !articles) {
    return (
      <div className="h-screen flex items-center justify-center text-sm text-destructive">
        Failed to load articles.
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* MAIN CONTENT */}
      <div className="p-4 grid gap-4
                      grid-cols-1 
                      md:grid-cols-3">
        {/* LEFT SIDEBAR - CARDS */}
        <aside className="space-y-2 md:col-span-1">
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className={`border rounded-lg p-3 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                activeArticle?.id === article.id ? "bg-muted shadow" : "bg-background"
              }`}
            >
              {article.coverImage && (
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-24 object-cover rounded-md mb-2"
                />
              )}
              <h3 className="font-semibold text-sm">{article.title}</h3>
              <p className="text-xs text-muted-foreground">
                {article.category.join(", ")} •{" "}
                {new Date(article.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </aside>

        {/* RIGHT CONTENT */}
        <section className="md:col-span-2 flex flex-col">
          {activeArticle && (
            <>
              <BlogDetailHeader title={activeArticle.title} />

              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mt-2">
                <span>By Aman</span>
                <span>•</span>
                <span>{new Date(activeArticle.date).toLocaleDateString()}</span>
                {activeArticle.category.length > 0 && (
                  <>
                    <span>•</span>
                    <span>{activeArticle.category.join(", ")}</span>
                  </>
                )}
              </div>

              {activeArticle.coverImage && (
                <img
                  src={activeArticle.coverImage}
                  alt={activeArticle.title}
                  className="w-full rounded-lg mt-4 object-cover max-h-64"
                />
              )}

              <div className="mt-6 space-y-4 text-sm leading-6 text-foreground">
                {activeArticle.content
                  .split("\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </>
          )}
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-200 p-4 text-sm text-center mt-8">
        <p>© 2026 Aman Blog. All rights reserved.</p>
        <p>
          Built with <span className="font-semibold">React, TanStack Query, and Tailwind CSS</span>
        </p>
      </footer>
    </div>
  )
}
