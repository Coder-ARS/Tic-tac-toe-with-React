
let arr=[ <line x1="10" y1="10" x2="90" y2="90" stroke="red" strokeWidth="2" />,
        <line x1="10" y1="50" x2="90" y2="50" stroke="red" strokeWidth="2" />,
        <line x1="50" y1="10" x2="50" y2="90" stroke="red" strokeWidth="2" />,
        <line x1="90" y1="10" x2="10" y2="90" stroke="red" strokeWidth="2" /> ]

let offset={
    "0":-100,
    "1":0,
    "2":100
}




function SvgType({config}) {
   

    let Answer=[]
    console.log("gaf");
    
    let style= {
            position: 'relative',
            top: 0,
            left: 0,
            width: '100%',
            height: '50%',
            // backgroundColor: 'rgba(255, 0, 0, 0.5)', // Optional background overlay
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2, // Ensure it's on top of other elements
            //asgafg
    }
    
    if(config[1]=='V'){
        style.left += offset[config[0]]
        Answer.push(arr[2])
    }
    if(config[1]=='H'){
        style.top += offset[config[0]]
        Answer.push(arr[1])
    }
    if(config.length===1)
    {if(config[0]=='0'){
        // style.top += offset[config[0]]
        Answer.push(arr[0])
    }
    if(config[0]=='1'){
        // style.top += offset[config[0]]
        Answer.push(arr[3])
    }}

    Answer.push(style) 
    console.log(Answer);
    

    return <>
      <svg style={Answer[1]} width="100%" height="100%" viewBox="0 0 100 100">
        {Answer[0]}
      </svg>
   </>
   

}


export default SvgType