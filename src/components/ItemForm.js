import React from "react";
// import { v4 as uuid } from "uuid";

function ItemForm({addNewItem, handleFormChange, name, category}) {
  return (
    <form onSubmit={addNewItem} className="NewItem">
      <label>
        Name:
        <input value={name} onChange={handleFormChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFormChange} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
