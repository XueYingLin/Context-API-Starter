import React, { useState, createContext } from 'react';

import FamilyTree from './components/FamilyTree';
import './styles.scss';

import { data } from './data';

export const FamilyContext = createContext();
console.log(FamilyContext);

export default function App() {
  // const { Provider } = FamilyContext
  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);

  return (
    <div className="App">
      <section className="header">
        <h1>Family Trees</h1>
        {families.map(d => (
          <button
            className={`family-button ${d.familyName ===
              activeFamily.familyName && 'active'}`}
            key={d.familyName}
            onClick={() => setActiveFamily(d)}
          >
            {d.familyName}
          </button>
        ))}
      </section>
      <FamilyContext.Provider
        value={{ activeFamily, setActiveFamily, families }}
      >
        {activeFamily && <FamilyTree />}
      </FamilyContext.Provider>
    </div>
  );
}
