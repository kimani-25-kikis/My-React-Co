import laptopPic from './assets/download.jfif'
function Card(){

    return(
        <div className='Card'>
            <img className='Card-image' src={laptopPic}  alt="laptop Photo" />
            <h2 >Kim Josh</h2>
            <p>I enjoy coding as much as many programmers would do</p>
        </div>
    );
}
export default Card