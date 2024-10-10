import { useState } from "react";
import Title from "./Title";
import menu from './data'
import Menu from './Menu';
import Categories from "./Categories";

const allCategories =['all',...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] =useState(allCategories)
  const filterItems =(category) =>{
    if (category === 'all') {
      setMenuItems(menu)
      return
    }
    const newItems= menu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
return <div>
    <h2>Menu Starter</h2>
    <Categories categories={categories} filterItems={filterItems
    }/>

    <Title text="our menu"/>
    <Menu items={menuItems}/>
  </div>
};
export default App;
