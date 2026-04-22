import CuratedHeader from "../curated/CuratedHeader";
import CuratedGrid from "../curated/CuratedGrid";
const CuratedSection = ({ releases, loading }) => {
  return (
    <section className="px-10 py-16">
      <CuratedHeader />
      <CuratedGrid releases={releases} loading={loading} />
    </section>
  );
};

export default CuratedSection;