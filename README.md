```Javascript

import React, { useState } from 'react';

//           __          _____  _____.__        
//   _______/  |_  _____/ ____\/ ____\__| ____  
//  /  ___/\   __\/ __ \   __\\   __\|  |/ __ \ 
//  \___ \  |  | \  ___/|  |   |  |  |  \  ___/ 
// /____  > |__|  \___  >__|   |__|  |__|\___  >
//      \/            \/                     \/ 

const CyberSteffie = () => {
  const birthplace = 'Albuquerque, New Mexico, USA';
  const name = 'Steffie'
  const [location, setLocation] = useState('San Francisco, CA, USA');
  const [disiplinary, setDisciplinary] = useState(['💻 developer', '💃 model', '🤳 creator']);
  const [likes, setLikes] = useState(['👾', '🥷🗡', '📸', '👅💦']);

return(
    <div>
      <h1>I'm {name}, {disiplinary.map((item,i) => <span key={i}>{ (i && ', ') + item }</span>)}.</h1>
      <p>1991 - Born in {birthplace}.</p>
      <p>2013 - Worked in ux/digital marketing for 5+ years in {location}.</p>
      <p>2016 - Teleported to {setLocation('Neo-Tokyo, Japan')} to fufill childhood dreams.</p>
      <p>2018 - Founded @startupladyjp - a community for female & non-binary entreprenuers & freelancers.</p>
      <p className="strong">I 🖤 {likes.map((item,i) => <span key={i}>{ (i && ', ') + item }</span>)}.</p>
    </div>
  );
}
```
