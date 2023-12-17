import { Textarea, TextAreaProps } from '@nextui-org/react'
import { Controller, useFormContext } from 'react-hook-form'
interface ITextareaProps extends TextAreaProps {
  name: string
  message?: string
}

export default function Textareas({ name, ...passProps }: ITextareaProps) {
  const {
    control,
    formState: { errors }
  } = useFormContext()
  return (
    <div>
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Textarea
            onBlur={onBlur}
            ref={ref}
            value={value || ''}
            errorMessage={errors[name]?.message as React.ReactNode}
            onChange={(value) => {
              onChange(value)
            }}
            {...passProps}
          />
        )}
      />
    </div>
  )
}
