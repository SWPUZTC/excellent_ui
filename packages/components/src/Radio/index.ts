import InternalRadio from './radio';
import Group from './group';

type RadioType = typeof InternalRadio & {
    Group: typeof Group;
};

const Radio = InternalRadio as RadioType;
Radio.Group = Group;

export default Radio;
export { Group };
export type { RadioProps, RadioGroupProps } from './type';