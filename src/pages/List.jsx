import CuratedSection from "../components/sections/CuratedSection";
import { useEffect, useState } from "react";
import { getNewReleases } from "../services/spotify";

const List = () => {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNewReleases();
      setReleases(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return <CuratedSection releases={releases} loading={loading} />;
};

export default List;