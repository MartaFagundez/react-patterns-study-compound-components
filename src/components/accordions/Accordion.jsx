import {createContext, useContext, useState} from "react";

// 1️⃣ Creamos un contexto para compartir el estado
const AccordionContext = createContext();

function Accordion({children}) {
    const [isOpen, setIsOpen] = useState(false);


  return (
    <AccordionContext.Provider value={{isOpen, setIsOpen}}>
        <div className="w-80 border rounded-lg shadow-mg overflow-hidden bg-white">{children}</div>
    </AccordionContext.Provider>
  )
}

function AccordionHeader({children}) {
    const {isOpen, setIsOpen} = useContext(AccordionContext);

    return (
        <div className="bg-gray-200 px-4 py-3 cursor-pointer flex justify-between items-center" on onClick={() => setIsOpen(!isOpen)}>
            <h3>{children}</h3>
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

Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;