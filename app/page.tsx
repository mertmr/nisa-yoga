import { allPosts } from "@/.contentlayer/generated";
import { Hero } from "@/components/hero-section";
import PricingPage from "@/components/pricing-page";
import Testimonials from "@/components/testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      <Testimonials />
      <PricingPage />
      <div className="prose dark:prose-invert">
      <h2 className="flex mb-12 text-3xl font-bold">
        Blog
      </h2>
        {allPosts.map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
      </div>
    </div>
  );
}
