import "./name-list.css";

interface NameListProps {
  name: string;
}

const NameList = ({ name }: NameListProps) => {
  return <div className="name-list">{name}</div>;
};

export default NameList;
