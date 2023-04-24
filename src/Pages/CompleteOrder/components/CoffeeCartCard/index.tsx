import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import { CartItem } from '../../../../contexts/CartContex'
import {
  CoffeeCartCardContainer,
  ActionContainer,
  RemoveButton,
} from './styles'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }
  const coffeeTotal = coffee.price * coffee.quantity
  const formatPrice = formatMoney(coffeeTotal)

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <div>
          <RegularText>{coffee.name}</RegularText>
          <ActionContainer>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              size="small"
              quantity={coffee.quantity}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              Remove
            </RemoveButton>
          </ActionContainer>
        </div>
      </div>
      <p>{formatPrice}</p>
    </CoffeeCartCardContainer>
  )
}
