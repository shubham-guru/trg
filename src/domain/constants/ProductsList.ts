import { Earrings, Gemstones, Pearl, Statement, Studs } from "./ProductsContent";
import gemStone from '../../presentation/assets/images/gemstoneCollBg.png';
import statement from '../../presentation/assets/images/stateCollBg.jpg';
import pearl from '../../presentation/assets/images/pearlCollBg.jpg';
import earring from '../../presentation/assets/images/earringCollBg.jpg';
import studs from '../../presentation/assets/images/studsColl.jpg';

export const ProductList = [
  {
    name: "Gemstones Collection",
    data: Gemstones,
    src: gemStone
  },
  {
    name: "Studs Collection",
    data: Studs,
    src: studs
  },
  {
    name: "Statement Collection",
    data: Statement,
    src: statement
  },
  {
    name: "Pearl Collection",
    data: Pearl,
    src: pearl
  },
  {
    name: "Earrings Collection",
    data: Earrings,
    src: earring
  } 
];
