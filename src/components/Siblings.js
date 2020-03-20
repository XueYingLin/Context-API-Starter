import React from 'react';

import { FamilyContext } from '../App';

const Siblings = () => {
  // render props pattern 🤮
  return (
    <section className="siblings">
      <FamilyContext.Consumer>
        {({ activeFamily }) =>
          activeFamily.siblings.map(s => (
            <div className="person" key={s.name}>
              <img width="150" src={s.img} alt={s.name} />
              <strong>{s.name}</strong>
            </div>
          ))
        }
      </FamilyContext.Consumer>
    </section>
  );
};

export default Siblings;
