import BaseButtonGroup from './ButtonGroup.svelte';
import BaseButton from './ButtonGroupButton.svelte';

export interface ButtonGroupStatic {
	new (...args: ConstructorParameters<typeof BaseButtonGroup>): BaseButtonGroup;
	Button: ButtonStatic;
}

export interface ButtonStatic {
	new (...args: ConstructorParameters<typeof BaseButton>): BaseButton;
}

const ButtonGroup = BaseButtonGroup as ButtonGroupStatic;
ButtonGroup.Button = BaseButton as ButtonStatic;

export default ButtonGroup;
