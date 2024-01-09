export default function ToolsCards(props) {
  return (
    <div className="tool-cards">
      <div className="tool-cards-background">
        <img className="h-10 w-10 object-cover" src={props.icon} alt="" />
      </div>
    </div>
  );
}
