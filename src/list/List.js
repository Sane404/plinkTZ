import React, { useState } from "react";
import { list_h } from "./list_header";
import "./List.css";
const List = ({ items, selectedProduct, stateChanger, stateChanger_two }) => {
  const [item_list, setItemList] = useState(items);
  const [sortedBy, setSortedBy] = useState("");
  const [tableFadeOut, setTableFadeOut] = useState(false);
  const sort = (e) => {
    let v = e.target.dataset.val;
    let sortedList;
    if (!sortedBy || sortedBy !== v) {
      setSortedBy(v);
      if (v === "RAM" || v === "HDD" || v === "price") {
        sortedList = item_list.sort((a, b) => +a[v] - +b[v]);
      } else {
        sortedList = item_list.sort((a, b) => a[v].localeCompare(b[v]));
      }
      setItemList([...sortedList]);
    }
    if (sortedBy && sortedBy === v) {
      let reversed = item_list.reverse();
      setItemList([...reversed]);
    }
  };
  return (
    <table className={tableFadeOut ? "table fade" : "table"}>
      <thead>
        <tr>
          {list_h.map((item) => {
            const { value, text } = item;
            return (
              <td onClick={sort} key={value} data-val={value}>
                {text}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {item_list.map((item) => {
          const { name, price, HDD, RAM, SKU } = item;
          return (
            <tr key={SKU}>
              <td>{name}</td>
              <td>{SKU}</td>
              <td>{RAM}</td>
              <td>{HDD}</td>
              <td>{price}</td>
              <td>
                <button
                  onClick={() => {
                    setTableFadeOut(true);
                    setTimeout(() => {
                      stateChanger(true);
                      stateChanger_two(false);
                    }, 500);
                    selectedProduct({ item });
                  }}
                >
                  Buy
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
