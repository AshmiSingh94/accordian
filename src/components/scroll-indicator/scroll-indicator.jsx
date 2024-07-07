import { useEffect, useState } from "react";
import "./scroll.css";
export const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollpercentage] = useState(0);

  const fetchUrl = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleScroll = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );
    const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrollpercentage((scrolled / height) * 100);
  };

  useEffect(() => {
    fetchUrl(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return window.removeEventListener("scroll", () => {});
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-track">
          <div className="current-progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0 ? data.map((item) => <div key={item.id}>{item.title}</div>) : null}
      </div>
    </div>
  );
};
