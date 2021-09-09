import React from "react";
import items from "./mock";

type Item = typeof items[number];

interface SearchProps {
  value: string;
  onlyProduct: boolean;
}
const Search: React.FC<SearchProps> = (props) => {
  return (
    <div className="search">
      <input type="text" value={props.value} />
      <input
        type="radio"
        name="Only show products in stock"
        checked={props.onlyProduct}
      />
    </div>
  );
};

interface StockCategoryProps {
  category: string;
}
const StockCategory: React.FC<StockCategoryProps> = ({ category }) => (
  <tr>
    <th colSpan={2}>{category}</th>
  </tr>
);

interface StockRowProps {
  item: Item;
}
const StockRow: React.FC<StockRowProps> = ({ item }) => (
  <tr>
    <td style={{ color: item.stocked ? "red" : "inherit" }}>{item.name}</td>
    <td>{item.price}</td>
  </tr>
);

interface StockListProps {
  items: Item[];
}
const StockList: React.FC<StockListProps> = ({ items }) => {
  const rows: any[] = [];
  let lastCategory = "";
  items.forEach((item) => {
    if (item.category !== lastCategory) {
      rows.push(<StockCategory category={item.category} key={item.category} />);
    }
    rows.push(<StockRow item={item} key={item.name} />);
    lastCategory = item.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

const Form = () => {
  const [state, setState] = React.useState({
    value: "",
    onlyProduct: false,
  });
  return (
    <div>
      <Search {...state} />
      <StockList items={items} />
    </div>
  );
};
