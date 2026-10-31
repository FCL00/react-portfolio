export default function ToolsCards({ icon }) {
  return (
    <div className="transition-all hover:p-1 hover:bg-[#303030] rounded-full">
      <div className="bg-[#202020] rounded-full p-6 flex items-center shadow-xl">
        <img
          className="object-contain w-10 h-10"
          src={icon}
          alt="tools and technologies"
          loading="lazy"
        />
      </div>
    </div>
  );
}

