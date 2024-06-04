import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

interface Props {
  items: {
    name: string;
    value: string;
    icon?: string;
    code?: string;
  }[];
  onSelected: (value) => void;
  className?: string;
}

export function DropDownMenu({ items, onSelected, className }: Props) {
  // Create a copy of the items array
  const [sortedItems, setSortedItems] = React.useState([...items]);

  const handleSelection = (index: number, item) => {
    const newItems = [...sortedItems];
    const selectedItem = newItems.splice(index, 1)[0];
    newItems.splice(0, 0, selectedItem);
    setSortedItems(newItems);
    onSelected(item);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={className}>
          {sortedItems[0].icon && (
            <span className="mr-2">{sortedItems[0].icon}</span>
          )}
          {sortedItems[0].code}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 h-60 overflow-scroll overflow-x-hidden dropdown-scroll">
        {sortedItems.map((item, index) => {
          return (
            <DropdownMenuCheckboxItem
              key={index}
              checked={index === 0}
              onCheckedChange={() => {
                handleSelection(index, item);
              }}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.name}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
