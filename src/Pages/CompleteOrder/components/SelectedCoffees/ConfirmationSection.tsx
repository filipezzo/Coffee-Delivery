import { RegularText } from '../../../../components/Typography'
import { ConfirmationSectionContainer } from './styles'

import { Button } from '../../../../components/Button'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()

  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formated = formatMoney(cartItemsTotal)
  const formatedCartTotal = formatMoney(cartTotal)
  const formatedDeleivery = formatMoney(DELIVERY_PRICE)
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total itens</RegularText>
        <RegularText>{formated}</RegularText>
      </div>

      <div>
        <RegularText size="s">Delivery</RegularText>
        <RegularText>{formatedDeleivery}</RegularText>
      </div>

      <div>
        <RegularText weight={700} color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight={700} color="subtitle" size="l">
          {formatedCartTotal}
        </RegularText>
      </div>

      <Button
        text={'Confirm Order'}
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}
