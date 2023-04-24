import { AddressFormContainer } from './styles'
import { Input } from '../../../../components/Input'
import { useFormContext } from 'react-hook-form'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}
export function AddressForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType
  return (
    <AddressFormContainer>
      <Input
        placeholder="Zip Code"
        className="zipCode"
        type="number"
        {...register('zipCode')}
        error={errors.zipCode?.message}
      />

      <Input
        placeholder="Street"
        className="street"
        type="text"
        {...register('street')}
        error={errors.street?.message}
      />

      <Input
        placeholder="Number"
        type="number"
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complement"
        className="complement"
        {...register('complement')}
        error={errors.complement?.message}
        rightText="Optional"
      />
      <Input
        placeholder="District"
        {...register('district')}
        error={errors.district?.message}
      />
      <Input
        placeholder="City"
        {...register('city')}
        error={errors.city?.message}
      />
      <Input
        placeholder="State"
        {...register('state')}
        error={errors.state?.message}
      />
    </AddressFormContainer>
  )
}
