interface SideBarItemProps {
    icon: React.ReactElement;
    text: string;
}
const SideBarItem = ({icon, text}:SideBarItemProps) => {
  return (
    <div className="m-1">
       
        <div className="flex items-center p-2 hover:bg-gray-200 rounded-md cursor-pointer border-2 pl-7 w-full">
            <div className="text-gray-600 pr-2">
            {icon}
            </div>
            <span className="text-gray-800">{text}</span>
        </div>
    </div>
  )
}

export default SideBarItem