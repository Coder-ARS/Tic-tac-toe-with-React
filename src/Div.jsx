import './Div.css';
import Svg from './svg';

function Div({val}) {
    // console.log(`called : ${val}`);
    
    
    return (
        <>
        <div className="div">
            <Svg val={val}/>
        </div>
        
        </>
    )
}

export default Div