import { useState } from "react";
import { data } from "./data";
import "./accordian.css";
export const Accordian = () => {
  // const [questions, setQuestion]=useState([...data])
  const [single, setSingle] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const handleSingleSelection = (getCurrentId) => {
    setSingle(getCurrentId === single ? null : getCurrentId);
  };
  console.log(single, multiple);
  const handleMultiSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    const findIndexOfMultiple = copyMultiple.indexOf(getCurrentId);
    if (findIndexOfMultiple === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfMultiple, 1);
    }
    setMultiple(copyMultiple);
    console.log(findIndexOfMultiple);
  };
  return (
    <div className="wrapper">
      <button
        className="button"
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
        }}
      >
        Enable Multi-Selection
      </button>
      <div className="accordian">
        {data && data.length > 0
          ? data.map((dataItem) => (
              <div className={`${enableMultiSelection?"multiSelection":"singleSelection"}`} key={dataItem.id}>
                <div
                  className="title"
                  onClick={() => {
                    enableMultiSelection ? handleMultiSelection(dataItem.id) : handleSingleSelection(dataItem.id);
                  }}
                >
                  <h3>{dataItem.question}</h3>
                  {enableMultiSelection
                    ? multiple.indexOf(dataItem.id) !== -1 && <div className="content">{dataItem.answer}</div>
                    : single === dataItem.id && <div className="content">{dataItem.answer}</div>}
                  {/* {single === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                    <div className="content">{dataItem.answer}</div>
                  ) : null} */}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
