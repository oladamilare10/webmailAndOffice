import { CiSearch, CiViewColumn, CiZoomIn, CiZoomOut } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineLocalPrintshop, MdOutlineZoomOutMap } from "react-icons/md";
import { LiaFileDownloadSolid, LiaFileUploadSolid } from "react-icons/lia";
const Header = () => {
    return(
        <div className="header">
            <div className="sideOne">
                <CiViewColumn className="icons" size={23} color="#3d3d3d" />
                <CiSearch className="icons" size={23} color="#3d3d3d" />
                <IoIosArrowUp className="icons" size={23} color="#3d3d3d" />
                <span>1 / 17</span>
                <IoIosArrowDown className="icons" size={23} color="#3d3d3d" />
            </div>
            <div className="sideMid">
                <CiZoomOut className="icons" size={23} color="#3d3d3d" />
                <div>100%</div>
                <CiZoomIn className="icons" size={23} color="#3d3d3d" />
            </div>
            <div className="sideOne">
                <MdOutlineZoomOutMap className="icons" size={23} color="#3d3d3d" />
                <LiaFileUploadSolid className="icons" size={23} color="#3d3d3d" />
                <LiaFileDownloadSolid className="icons" size={23} color="#3d3d3d" />
                <MdOutlineLocalPrintshop className="icons" size={23} color="#3d3d3d" />
            </div>
        </div>
    )
}
export default Header