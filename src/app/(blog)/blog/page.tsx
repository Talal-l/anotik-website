import { Metadata } from "next";
import FooterInner from "@/layout/footer/footer-inner";
import PageTitle from "@/components/common/page-title";
import BlogAreaTwo from "@/components/blog/blog-area-2";
import BlogWrapper from "./_components/blog-wrapper";

export const metadata: Metadata = {
  title: "Blog - Anotik",
  description:
    "Technical insights, updates, and best practices from Anotik on development, infrastructure, DevOps, and automation.",
};

export default function BlogPage() {
  return (
    <>
      <BlogWrapper>
        <main>
          {/* page title area start */}
          <PageTitle title="Journals" />
          {/* page title area end */}

          {/* blog area start */}
          <BlogAreaTwo />
          {/* blog area end */}
        </main>

        {/* Footer area start */}
        <FooterInner />
        {/* Footer area end */}
      </BlogWrapper>
    </>
  );
}
