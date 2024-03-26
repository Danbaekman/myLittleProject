import { useStore } from "../../store";
import { Link } from "react-router-dom";


export default function Main() {
  const { bears, increasePopulation, removeAllBears } = useStore();
  return (
    <div className="text-3xl font-bold underline bg-red-50">
      main
      <h1>{bears}</h1>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={removeAllBears}>remove</button>
      <nav>
        <Link to="/trade">Trade</Link>
      </nav>
      
    </div>
  );
}
