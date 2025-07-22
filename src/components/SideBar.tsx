import Logo from "../icons/Logo"
import TwitterIcon from "../icons/TwitterIcon"
import YoutubeIcon from "../icons/YoutubeIcon"
import SideBarItem from "./SideBarItem"


const SideBar = () => {
  return (
    <div className="w-64 bg-white shadow-md rounded-md p-4 w-64 h-screen ">
         <div className="ml-2 gap-2 text-xl font-bold flex p-2">
            {<Logo></Logo>}
            Brainly
        </div>
        <div className="pt-4 ">
            <SideBarItem text="Twitter" icon={<TwitterIcon></TwitterIcon>}></SideBarItem>
            <SideBarItem text="Youtube" icon={<YoutubeIcon></YoutubeIcon>}></SideBarItem>
        </div>
    </div>
  )
}

export default SideBar