import CuratedHeader from "../curated/CuratedHeader";
import CuratedGrid from "../curated/CuratedGrid";
const CuratedSection = ({ releases, loading }) => {
  return (
    <section className="px-4 md:px-8 lg:px-12
  py-10 md:py-16
  max-w-7xl mx-auto">
      <CuratedHeader />
      <CuratedGrid releases={releases} loading={loading} />
    </section>
  );
};

export default CuratedSection;