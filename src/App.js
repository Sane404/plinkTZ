import "./App.css";
import List from "./list/List";
import Form from "./form/Form";
import Final from "./final/Final";
import { items } from "./item_list";
import { useState } from "react";
function App() {
  const [toList, setToList] = useState(true);
  const [toForm, setToForm] = useState(false);
  const [toFinal, setToFinal] = useState(false);
  const [userData, setUserData] = useState("");
  const [productSelected, setProductSelected] = useState("");
  return (
    <div className="app">
      {toList && (
        <List
          items={items}
          stateChanger={setToForm}
          stateChanger_two={setToList}
          selectedProduct={setProductSelected}
        />
      )}

      {toForm && (
        <Form
          stateChanger={setToFinal}
          stateChanger_two={setToForm}
          userData={setUserData}
        />
      )}
      {toFinal && (
        <Final
          user_data={userData}
          product={productSelected}
          stateChanger={setToList}
          stateChanger_two={setToFinal}
        />
      )}
    </div>
  );
}

export default App;
