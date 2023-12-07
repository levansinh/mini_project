import { Control, Controller } from 'react-hook-form'
import { Input } from '@nextui-org/react'
import { SubmitForm } from '../FormProduct/types'

type NameField =
  | 'title'
  | 'thumbnail'
  | 'price'
  | 'discountPercentage'
  | 'rating'
  | 'stock'
  | 'category'
  | 'brand'
  | 'description'
type LabelPlacement = 'outside' | 'outside-left' | 'inside'
interface Props {
  name: NameField
  label?: string
  message?: string
  control: Control<SubmitForm>
  size?: 'md' | 'sm' | 'lg'
  labelPlacement?: LabelPlacement
}

export default function TextInput({
  name,
  label,
  control,
  labelPlacement = 'outside',
  size = 'sm',
  message,
  ...passPort
}: Props) {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input
            label={label}
            labelPlacement={labelPlacement}
            size={size}
            onBlur={onBlur}
            ref={ref}
            value={value}
            errorMessage={message}
            onChange={(value) => {
              onChange(value)
            }}
          />
        )}
        {...passPort}
      />
    </div>
  )
}
