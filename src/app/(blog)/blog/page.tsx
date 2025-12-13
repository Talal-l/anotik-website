import { Metadata } from "next";
import MainWrapper from "@/components/wrapper/main-wrapper";
import FooterInner from "@/layout/footer/footer-inner";
import PageTitle from "@/components/common/page-title";
import BlogAreaTwo from "@/components/blog/blog-area-2";
import BlogWrapper from "./_components/blog-wrapper";
import HeaderOne from "@/layout/header/header-one";

export const metadata: Metadata = {
  title: "Blog - Anotik",
  description:
    "Technical insights, updates, and best practices from Anotik on development, infrastructure, DevOps, and automation.",
};

export default function BlogPage() {
  return (
    <>
      {/* Main wrapper start */}
      <MainWrapper
        bodyCls={[
          "body-wrapper",
          "body-page-inner",
          "font-heading-sequelsans-romanbody",
        ]}
      >
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
      </MainWrapper>
      {/* Main wrapper end */}
    </>
  );
}
