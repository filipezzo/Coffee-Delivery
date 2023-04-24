import { TitleText } from '../../../../components/Typography'
import { coffees } from '../../../../data/coffees'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeesList, OurCoffeesContainer } from './styles'
export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Our Coffees
      </TitleText>
      <CoffeesList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeesList>
    </OurCoffeesContainer>
  )
}
