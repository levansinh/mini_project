import { Checkbox, CheckboxProps } from '@nextui-org/react'

interface ICheckboxProps extends CheckboxProps {
  onCheck: () => void
}

export default function CheckBoxItem({ onCheck, ...passProps }: ICheckboxProps) {
  // const [checked, setChecked] = useState<boolean>(false)
  return <Checkbox {...passProps} onChange={onCheck} />
}
