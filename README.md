```Javascript

import React, { useState } from 'react';

//           __          _____  _____.__        
//   _______/  |_  _____/ ____\/ ____\__| ____  
//  /  ___/\   __\/ __ \   __\\   __\|  |/ __ \ 
//  \___ \  |  | \  ___/|  |   |  |  |  \  ___/ 
// /____  > |__|  \___  >__|   |__|  |__|\___  >
//      \/            \/                     \/ 

const CyberSteffie = () => {
  const [name, setName] = useState('Steffie Harner');
  const hometown = 'Albuquerque, USA';
  const [location, setLocation] = useState(hometown);
  const [disiplinary, setDisciplinary] = useState(['💻 developer', '💃 model', '🤳 creator']);
  const [likes, setLikes] = useState(['👾', '🥷🗡', '📸', '👅💦']);

return(
    <div>
      <p>1991 - Born in {location} as {name}.</p>
      <p>1998 - Rebranded as {setName('Steffie')}.</p>
      <p>2012 - Worked for a wellness tech startup for 3 years in {setLocation('San Francisco, USA')}.</p>
      <p>2013 - Graduated University of San Francisco with a B.S. in Kinesiology, Minor Psychology/Neuroscience.</p>
      <p>2016 - Teleported to {setLocation('Neo-Tokyo, Japan')} to fufill childhood dreams.</p>
      <p>2018 - Founded <a href="https://instagram.com/startupladyjp">@startupladyjp</a> - a community for womxn entreprenuers & freelancers.</p>
      <p className="strong">I 🖤 {likes.map((item,i) => <span key={i}>{ (i && ', ') + item }</span>)}.</p>
    </div>
  );
}
```
