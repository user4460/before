import { AiOutlineHome, AiOutlineBell, AiOutlineMail } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="col-span-2 items-center lg:items-start top-0 left-0 sticky overflow-auto">
      <div className="px-4 lg:w-full">
        <img
          src="/twitterLogo.svg"
          alt="twitter logo"
          className="m-3 h-10 w-10"
        />
        <div className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100 relative">
          <AiOutlineHome className="h-6 w-6" />
          <span
            className="lg:hidden invisible w-[74px] rounded text-[12px] 
          font-bold text-white py-1 bg-slate-400 top-11 -left-3
           group-hover:visible opacity-100 absolute text-center"
          >
            ホーム
          </span>
          <p className="hidden text-base font-light group-hover:text-twitter lg:inline-flex lg:text-xl">
            ホーム
          </p>
        </div>
        <div className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100 relative">
          <AiOutlineBell className="h-6 w-6" />
          <span
            className="lg:hidden invisible w-[74px] rounded text-[12px] 
          font-bold text-white py-1 bg-slate-400 top-11 -left-3
           group-hover:visible opacity-100 absolute text-center"
          >
            通知
          </span>
          <p className="hidden text-base font-light group-hover:text-twitter lg:inline-flex lg:text-xl">
            通知
          </p>
        </div>
        <div className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100 relative">
          <AiOutlineMail className="h-6 w-6" />
          <span
            className="lg:hidden invisible w-[74px] rounded text-[12px] 
          font-bold text-white py-1 bg-slate-400 top-11 -left-3
           group-hover:visible opacity-100 absolute text-center"
          >
            メッセージ
          </span>
          <p className="hidden text-base font-light group-hover:text-twitter lg:inline-flex lg:text-xl">
            メッセージ
          </p>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
