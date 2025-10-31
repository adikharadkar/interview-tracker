import "../styles/Tile.css";

interface IProps {
  tileName: string;
  applicationCount: number;
  icon: React.ReactNode;
}

const Tile = ({ tileName, applicationCount, icon: Icon }: IProps) => {
  return (
    <div className="tile">
      <div className="tile__info">
        <p className="tile__name">{tileName}</p>
        <h3 className="tile__application_count">{applicationCount}</h3>
      </div>
      <div className="tile__icon">{Icon}</div>
    </div>
  );
};

export default Tile;
