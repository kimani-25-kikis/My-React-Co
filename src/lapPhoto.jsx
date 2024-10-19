
function LapPhoto(){

    const imageU ='./src/assets/download.jfif';

    const handleClick = (e) => e.target.style.display= none;

    return(<img onClick={(e)=> handleClick(e)} src={imageU}></img>);
}
export default LapPhoto