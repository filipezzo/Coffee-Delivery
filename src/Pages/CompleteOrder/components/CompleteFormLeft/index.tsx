import { useTheme } from 'styled-components'
import { TitleText } from '../../../../components/Typography'
import { AddressForm } from './AddressForm'
import { SectionTitle } from '../SectionTitle'
import { FormSectionContainer, CompleteOrderFormContainer } from './styles'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { PaymentMethodOptions } from './PaymentOptions'
export function CompleteFormLeft() {
  const { colors } = useTheme()
  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete your order
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Delivery Address"
          subtitle="Provide the address where you want to receive your order"
          icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
        />
        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          title="Payment"
          subtitle="The payment is made upon delivery. Please choose the payment method you prefer"
          icon={<CurrencyDollar color={colors['brand-purple']} size={22} />}
        />

        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
