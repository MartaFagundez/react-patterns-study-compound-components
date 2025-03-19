import { createContext, useContext, useState } from "react";

const TabsContext = createContext();

function Tabs({ children, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="w-80">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div className="flex border-b">{children}</div>;
}

function Tab({ index, children }) {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = activeIndex === index;

  return (
    <button
      onClick={() => setActiveIndex(index)}
      className={`flex-1 py-2 px-4 text-center ${
        isActive
          ? "border-b-2 border-blue-500 font-semibold text-blue-600"
          : "text-gray-500"
      }`}
    >
      {children}
    </button>
  );
}

function TabPanels({ children }) {
  const { activeIndex } = useContext(TabsContext);
    
  return <div className="p-4">{children[activeIndex]}</div>;
}

function TabPanel({ children }) {
  return <div>{children}</div>;
}

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;

export default Tabs;
