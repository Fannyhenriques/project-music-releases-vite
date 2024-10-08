import data from "./data.json";
import { Header } from "./components/Header.jsx"

console.log(data);

export const App = () => {
  return (
    <>
      <Header />
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <p>Hello hello</p>
    </>

  );
};