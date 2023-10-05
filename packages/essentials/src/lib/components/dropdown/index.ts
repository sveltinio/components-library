import BaseDropdown from './Dropdown.svelte';
import { BaseDropdownButton, BaseDropdownItems, BaseDropdownItem } from './partials/index.js';

export interface DropdownButtonStatic {
	new (...args: ConstructorParameters<typeof BaseDropdownButton>): BaseDropdownButton;
	Button: DropdownButtonStatic;
}

export interface DropdownItemStatic {
	new (...args: ConstructorParameters<typeof BaseDropdownItem>): BaseDropdownItem;
	Item: DropdownItemStatic;
}

export interface DropdownItemsStatic {
	new (...args: ConstructorParameters<typeof BaseDropdownItems>): BaseDropdownItems;
	Item: DropdownItemStatic;
}

export interface DropdownStatic {
	new (...args: ConstructorParameters<typeof BaseDropdown>): BaseDropdown;
	Button: DropdownButtonStatic;
	Items: DropdownItemsStatic;
}

const Dropdown = BaseDropdown as DropdownStatic;
Dropdown.Button = BaseDropdownButton as DropdownButtonStatic;
Dropdown.Items = BaseDropdownItems as DropdownItemsStatic;
Dropdown.Items.Item = BaseDropdownItem as DropdownItemStatic;

export default Dropdown;
