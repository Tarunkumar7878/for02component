import React from 'react'
import Section1 from './component/section1/Section1'
import Section2 from './component/section2/Section2'
import 'remixicon/fonts/remixicon.css'
const user=[
  { img:'https://plus.unsplash.com/premium_photo-1683121489634-5d3f7892a6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D',
    intro :'Satisfied',
    tag:''
  },
  {
    img:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D',
    intro :'Underserved',
    tag:''
  },
  {
    img:'https://images.unsplash.com/photo-1639300505533-9921527d6a50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRhcmslMjB3b3JraW5nJTIwZW52b2lybm1lbnR8ZW58MHx8MHx8fDA%3D',
    intro :'Unerbanked',
    tag:''
  }
]
function App() {
  return (
    <div  >
       <Section1 user={user}/>
       <Section2/> 
       
    </div>
  );
}

export default App;