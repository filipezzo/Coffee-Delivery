import { CompleteOrderContainer } from './styles'
import { CompleteFormLeft } from './components/CompleteFormLeft'
import { SelectedCoffees } from './components/SelectedCoffees'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  zipCode: zod.string().min(1, 'please inform your Zipcode'),
  street: zod.string().min(1, 'please inform your street'),
  number: zod.string().min(1, 'please inform the number'),
  complement: zod.string(),
  district: zod.string().min(1, 'Inform your district'),
  city: zod.string().min(1, 'Inform your city'),
  state: zod.string().min(1, 'Informe your state '),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Please inform the payment method' }
    },
  }),
})
export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>
type confirmOrderFormData = OrderData
export function CompleteOrder() {
  const confirmOrderForm = useForm<confirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const nav = useNavigate()
  const { cleanCart } = useCart()

  function handleConfirmOrder(data: confirmOrderFormData) {
    nav('/orderConfirmed', {
      state: data,
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteFormLeft />
        <SelectedCoffees />
      </CompleteOrderContainer>
    </FormProvider>
  )
}
