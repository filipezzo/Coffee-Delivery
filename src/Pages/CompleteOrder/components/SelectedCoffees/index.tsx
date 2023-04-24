import { TitleText } from '../../../../components/Typography'
import { CoffeeCartCard } from '../CoffeeCartCard'

import { DetailsContainer, SelectedCoffeesContainer } from './styles'
import { ConfirmationSection } from './ConfirmationSection'
import { useCart } from '../../../../hooks/useCart'
export function SelectedCoffees() {
  const { cartItems } = useCart()
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Selected Coffees
      </TitleText>
      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
