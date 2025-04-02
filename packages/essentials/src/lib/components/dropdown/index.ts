import BaseDropdown from './Dropdown.svelte';
import BaseDropdownButton from './Button.svelte';
import BaseDropdownList from './List.svelte';
import BaseDropdownItem from './ListItem.svelte';

export interface DropdownButtonStatic {
	new (...args: ConstructorParameters<typeof BaseDropdownButton>): BaseDropdownButton;
}

export interface DropdownItemStatic {
	new (...args: ConstructorParameters<typeof BaseDropdownItem>): BaseDropdownItem;
}

export interface DropdownItemsStatic {
	new (...args: ConstructorParameters<typeof BaseDropdownList>): BaseDropdownList;
	Item: DropdownItemStatic;
}

export interface DropdownStatic {
	new (...args: ConstructorParameters<typeof BaseDropdown>): BaseDropdown;
	Button: DropdownButtonStatic;
	Items: DropdownItemsStatic;
}

const Dropdown = BaseDropdown as DropdownStatic;
Dropdown.Button = BaseDropdownButton as DropdownButtonStatic;
Dropdown.Items = BaseDropdownList as DropdownItemsStatic;
Dropdown.Items.Item = BaseDropdownItem as DropdownItemStatic;

export default Dropdown;
