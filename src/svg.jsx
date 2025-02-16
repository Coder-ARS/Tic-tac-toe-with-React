export default function Svg({val}){
    return <>
    <svg width="90" height="90">
        <text x="12" y="78" font-size="90" font-family="Arial" fill="black">{val===0?"":val===-1?"O":"X"}</text>
    </svg>
    </>
}