```Javascript
import React, { useState } from 'react';

const CyberSteffie = () => {
  const birthplace = 'Albuquerque, New Mexico, USA';
  const name = 'Steffie'
  const [location, setLocation] = useState('San Francisco, CA, USA');
  const [disiplinary, setDisciplinary] = useState(['💻 developer', '💃 model', '🤳 creator']);
  const [likes, setLikes] = useState(['👾', '🥷⚔️', '📸', '👅💦']);

return(
    <div>
      <h1>I'm {name}, {disiplinary.map((item,i) => <span key={i}>{ (i && ', ') + item }</span>)}.</h1>
      <p>Born in {birthplace}. Worked in digital marketing for 5+ years {location} in 2009.</p>
      <p>Teleported to {setLocation('Neo-Tokyo, Japan')} in 2018.</p>
      <p className="strong">I 🖤 {likes.map((item,i) => <span key={i}>{ (i && ', ') + item }</span>)}.</p>
    </div>
  );
}
```
