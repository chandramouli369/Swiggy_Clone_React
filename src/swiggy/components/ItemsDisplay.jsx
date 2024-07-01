import React, { useState } from 'react';
import { itemData } from '../data1';

const ItemsDisplay = () => {
  const [displayItem, setDisplayItem] = useState(itemData);
  console.log(displayItem);

  return (
    <div className="itemSection">
      {displayItem.map((item, index) => {
        return (
          <div className="gallery" key={index}>
            <img src={item.item_img} alt={`item-${index}`} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemsDisplay;
