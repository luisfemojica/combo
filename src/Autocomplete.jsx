import { useState } from "react";
import "./App.css";

//const [checked, setChecked] = useState(true);

export function Autocomplete({ handleSelection, top, listDivsiones }) {
  return listItems(listDivsiones, top, handleSelection);
}

function listItems(list, top, handleSelection) {
  return (
    <div className="autocomplete-panel" style={{ top }}>
      <ul className="autocomplete-items">
        {list.map((hit) => (
          <li className="autocomplete-item" key={hit.id}>
            <Item hit={hit} handleSelection={handleSelection} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Item({ hit, handleSelection }) {
  return (
    <div className="account-body">
      <div className="account-name">
        <label>
          <input
            type="checkbox"
            id={hit.idDivision}
            defaultChecked={hit.checkRelation}
            onChange={(e) => hit.handleClick(e, hit.idDivision)}
          />
          {hit.nombreDivision}
        </label>
      </div>
      <div className="account-name">{hit.statusSwitch}</div>
      <div className="account-name">{hit.fechaInicial}</div>
      <div className="account-name">{hit.fechaFinal}</div>
    </div>
  );
}
