import { useState } from "react";
import "./App.css";

//const [checked, setChecked] = useState(true);

export function Autocomplete({ top, listDivsiones }) {
  return listItems(listDivsiones, top);
}

function listItems(list, top) {
  return (
    <div className="autocomplete-panel" style={{ top }}>
      <ul className="autocomplete-items">
        {list.map((hit) => (
          <li className="autocomplete-item" key={hit.id}>
            <Item hit={hit} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Item({ hit }) {
  return (
    <div className="account-body">
      <div className="account-checkbox">
        <label className="account-checkbox">
          <input
            className="account-checkbox"
            type="checkbox"
            id={hit.idDivision}
            defaultChecked={hit.checkRelation}
            onChange={(e) => hit.handleClick(e, hit.idDivision)}
          />
          {hit.nombreDivision}
        </label>
      </div>
      <div className="account-name">{hit.statusSwitch}</div>
      <div className="account-name">
        <input
          type="date"
          id="start"
          name="trip-start"
          value={hit.fechaInicial}
          // min="2018-01-01"
          // max="2018-12-31"
          onChange={(e) => hit.selectFechaInicial(e, hit.idDivision)}
        />
      </div>
      <div className="account-name">{hit.fechaFinal}</div>
    </div>
  );
}
