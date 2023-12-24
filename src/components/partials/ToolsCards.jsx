/* eslint-disable react/prop-types */

export default function ToolsCards(props) {
  return (
    <div className="hover:p-1 hover:bg-[#303030]  rounded-full">
      <div className="bg-[#202020] rounded-full p-6 flex items-center shadow-xl">
        <img className="h-10 w-10 object-cover" src={props.icon} alt="" />
      </div>
    </div>
  );
}
