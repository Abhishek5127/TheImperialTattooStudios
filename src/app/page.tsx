import {
  About,
  Artists,
  DesignsAndStats,
  FinalCta,
  Footer,
  Gallery,
  Header,
  Hero,
  VisitStudio,
} from "@/components/SiteSections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Artists />
        <DesignsAndStats />
        <VisitStudio />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
