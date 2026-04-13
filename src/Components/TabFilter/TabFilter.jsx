import Style from "./tabfilter.module.css";
import useFetch from "../../Hooks/useFetch";

export default function TabFilter({ tabUrlMain, tab, tabActive }) {
  const { error, tabLoading, tabData } = useFetch({ tabUrl: tabUrlMain });

  if (error) return <p>{error}</p>;
  if (tabLoading) return <p>Loading...</p>;
  if (tabData.length === 0) return <p>No Tab Data</p>;

  const tabList = [{ id: "all", name: "All" }, ...tabData];

  return (
    <div className={Style.tabFlexCenter}>
      {tabList.slice(0, 5).map((tabitem) => {
        return (
          <button
            className={`${Style.tabButton} ${tab === tabitem.id ? Style.tabButtonActive : ""}`}
            onClick={() => tabActive(tabitem.id)}
            key={tabitem.id}
          >
            {tabitem.name}
          </button>
        );
      })}
    </div>
  );
}
