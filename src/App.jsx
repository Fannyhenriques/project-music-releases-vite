import data from "./data.json";
import { Header } from "./components/Header.jsx"
import { Albums } from "./components/Albums.jsx"

console.log(data);

export const App = () => {
  return (
    <>
      <Header />
      <Albums />
    </>
  );
};