import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchFilter, setSearchFilter] = useState("")
  const [allItems, setAllItems] = useState(items)
  const [formState, setFormState] = useState({
    name: "",
    category: ""
  })

  function handleFormChange(e) {
    const name = e.target.name
    let value = e.target.value
    setFormState({
      ...formState,
      [name]: value
    })
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchFilter(event) {
    console.log(event.target.value)
    setSearchFilter(event.target.value)
  }

  function addNewItem(e) {
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name: e.target.name.value,
      category: e.target.category.value
    }
    setAllItems([
      ...allItems,
      newItem
    ])
    setFormState({
      name: "",
      category: ""
    })
  }

  const itemsToDisplay = allItems
    .filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  })
    .filter(item => item.name.toLowerCase().includes(searchFilter))
  
  const mapped = itemsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  return (
    <div className="ShoppingList">
      <ItemForm handleFormChange={handleFormChange} addNewItem={addNewItem} {...formState}/>
      <Filter handleSearchFilter={handleSearchFilter} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {mapped}
      </ul>
    </div>
  );
}

export default ShoppingList;
