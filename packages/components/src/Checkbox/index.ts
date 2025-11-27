import InternalCheckbox from './checkbox';
import Group from './group';
import { CheckboxProps, CheckboxGroupProps } from './type';

type CheckboxType = typeof InternalCheckbox & {
    Group: typeof Group;
};

const Checkbox = InternalCheckbox as CheckboxType;
Checkbox.Group = Group;

export default Checkbox;
export type { CheckboxProps, CheckboxGroupProps };