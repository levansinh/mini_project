import { Input, type InputProps } from '@nextui-org/react';
import { Controller, useFormContext } from 'react-hook-form';
interface ITextInputProps extends InputProps {
  name: string;
  message?: string;
}

export default function TextInput({ name, ...passProps }: ITextInputProps) {
  const {
    control,
    formState: { errors }
  } = useFormContext();
  return (
    <div>
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input
            onBlur={onBlur}
            ref={ref}
            value={value || ''}
            errorMessage={errors[name]?.message as React.ReactNode}
            onChange={(value) => {
              onChange(value);
            }}
            {...passProps}
          />
        )}
      />
    </div>
  );
}
