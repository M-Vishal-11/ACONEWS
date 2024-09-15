import newsImage from './assets/news.png';

const NavBar = () => {
  return (
    <div className="w-full flex justify-between mt-2 bg-gradient-to-r from-sky-300 to-cyan-300 pb-1">
        <div className="ml-1 flex ">          
            <h1 className=" text-emerald-950 font-serif font-semibold h-6 mt-2">ACONEWS</h1>
            <img src={newsImage} alt="icon" className="h-8 m-1"/>
        </div>
        <div className="mt-2">
            <a href="#" className="a  h-6">Home</a>
            <a href="https://acowale.com/story/" className="a  h-6">About</a>
            <a href="https://acowale.com" className="a  h-6">Main Website</a>
        </div>
    </div>
  )
}

export default NavBar;