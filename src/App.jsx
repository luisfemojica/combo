import { useRef, useState } from "react";
import "./App.css";
import { Autocomplete } from "./Autocomplete";

function App() {
  const inputRef = useRef();
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const { top, height } = { top: 0, height: 30 };
  const [textAreaValue, settextAreaValue] = useState("");
  const [SeleccionadosAreaValue, setSeleccionadosArea] = useState("");

  function onSelectTextArea() {
    console.log("Selecciono el textarea");
    setShowAutocomplete(!showAutocomplete);

    let count = listDivsiones
      .map((item) => {
        return item.checkRelation ? 1 : 0;
      })
      .reduce((a, b) => a + b, 0);
    console.log(count);

    let msj =
      count == 0
        ? ""
        : count == 1
        ? count + " seleccionado"
        : count + " seleccionados";

    setSeleccionadosArea(msj);
    settextAreaValue(msj);
  }

  const handleInput = (e) => {
    console.warn("handleInput", e);
    if(e.keyCode == 13){
      console.log("Enter");
      e.preventDefault();
    }else{
      let filtro = textAreaValue.replace(SeleccionadosAreaValue, "");
      settextAreaValue(filtro);
      const { value, selectionEnd = 0 } = inputRef.current;
      console.log(value, selectionEnd);
      const { word } = textAreaValue;
    }

    //const shouldOpenAutocomplete = /^@\w{1,15}$/.test(word)
    //setShowAutocomplete(shouldOpenAutocomplete)
    //shouldOpenAutocomplete && refine(word.slice(1))
  };

  const handleSelection = (listDivsionesSeleccionadas) => {
    const { value, selectionEnd = 0 } = inputRef.current;
    console.log("listDivsionesSeleccionadas");
    console.warn(listDivsionesSeleccionadas);
    let count = listDivsionesSeleccionadas
      .map((item) => {
        return item.checkRelation ? 1 : 0;
      })
      .reduce((a, b) => a + b, 0);
    console.log(count);

    let msj =
      count == 0
        ? ""
        : count == 1
        ? count + " seleccionado"
        : count + " seleccionados";
    settextAreaValue(msj);
    setSeleccionadosArea(msj);
    // const { word, range } = getActiveToken(value, selectionEnd);
    // const [index] = range;

    // const prefix = value.substring(0, index);
    // const suffix = value.substring(index + word.length);

    // const newText = prefix + `@${userHandle}` + suffix;

    // inputRef.current.value = newText;
    // inputRef.current.focus();

    // setShowAutocomplete(false);
  };

  const list = [
    {
      idDivision: "1",
      checkRelation: false,
      nombreDivision: "Personal 1",
      statusSwitch: "Activado",
      fechaInicial: "11/07/2020",
      fechaFinal: "29/07/2020",
      handleClick: (e, idDivision) => {
        console.log(e.target.checked);
        console.log(idDivision);
        let select = e.target.checked;
        setlistDivsiones(
          listDivsiones.map((item) => {
            if (item.idDivision === idDivision) {
              item.checkRelation = select;
            }
            return item;
          })
        );
        handleSelection(listDivsiones);
      },
    },
    {
      idDivision: "2",
      checkRelation: false,
      nombreDivision: "Personales 2",
      statusSwitch: "Desactivado",
      fechaInicial: "Desde",
      fechaFinal: "Hasta",
      handleClick: (e, idDivision) => {
        console.log(e.target.checked);
        console.log(idDivision);
        let select = e.target.checked;
        setlistDivsiones(
          listDivsiones.map((item) => {
            if (item.idDivision === idDivision) {
              item.checkRelation = select;
            }
            return item;
          })
        );
        handleSelection(listDivsiones);
      },
    },
  ];

  const [listDivsiones, setlistDivsiones] = useState(list);

  return (
    <main className="container">
      <section className="box">
        <div className="box-body">
          <div className="box-compose">
            <form>
              <textarea
                // id="SelectDivision"
                placeholder="Seleccione una división"
                className="box-textbox"
                onClick={(e) => {
                  onSelectTextArea(e);
                }}
                onKeyUp={handleInput}
                ref={inputRef}
                value={textAreaValue}
                onChange={(e) => {
                  settextAreaValue(e.target.value);
                }}
              />
            </form>

            {showAutocomplete && (
              <Autocomplete
                handleSelection={handleSelection}
                top={`${top + height}px`}
                listDivsiones={listDivsiones}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
