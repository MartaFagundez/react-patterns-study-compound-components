import {createContext, useContext, useState} from "react";

// Creamos un contexto para compartir el estado
const AccordionContext = createContext();

function Accordion({children, isExclusive=false}) {
    const [openIndexes, setOpenIndexes] = useState([]);

    function toggleIndex(index) {
        setOpenIndexes((prevIndexes) => {
            if (isExclusive) {
                return prevIndexes.includes(index) ? [] : [index]; // sólo uno abierto
            } else {
                return prevIndexes.includes(index) 
                    ? prevIndexes.filter((i) => i !== index) // cierra el seleccionado
                    : [...prevIndexes, index]; // agrega uno más abierto 
            }
        });
    };


  return (
    <AccordionContext.Provider value={{openIndexes, toggleIndex, isExclusive}}>
        <div className="w-80 space-y-2">{children}</div>
    </AccordionContext.Provider>
  )
}

function AccordionItem({children, index}) {
    const {openIndexes, toggleIndex} = useContext(AccordionContext);
    const isOpen = openIndexes.includes(index);

    return (
        <div className="border rounded-lg shadow-md overflow-hidden bg-white">
            <AccordionContext.Provider value={{isOpen, toggle: () => toggleIndex(index)}} >
                {children}
            </AccordionContext.Provider>
        </div>
    );
};

function AccordionHeader({children}) {
    const {isOpen, toggle} = useContext(AccordionContext);

    return (
        <div className="bg-gray-200 px-4 py-3 cursor-pointer flex justify-between items-center" on onClick={toggle}>
            <h3 className="font-semibold">{children}</h3>
            <span>{isOpen ? "▲" : "▼"}</span>
        </div>
    );
}

function AccordionBody({children}) {
    const {isOpen} = useContext(AccordionContext);

    return (
        <div className={`px-4 py-3 transition-all ${isOpen ? "block" : "hidden"}`}>
            {children}
        </div>
    );
}

// Asignamos los subcomponentes
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;