import {
  IntroContainer,
  IntroContent,
  IntroTitle,
  BenefitsContainer,
} from './styles'
import coffee from '../../../../assets/coffee.png'
import { RegularText } from '../../../../components/Typography'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'
export function Intro() {
  const { colors } = useTheme()
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Find the perfect coffee for any time of the day.
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              With Coffee Delivery, you receive your coffee wherever you are, at
              any time
            </RegularText>
          </section>
          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight="fill" />}
              text="Simple and secure purchase"
              iconBg={colors['brand-yellow-dark']}
            />
            <InfoWithIcon
              icon={<Package weight="fill" />}
              text="Packaging keeps the coffee intact"
              iconBg={colors['base-text']}
            />
            <InfoWithIcon
              icon={<Timer weight="fill" />}
              text="Fast and tracked delivery"
              iconBg={colors['brand-yellow']}
            />
            <InfoWithIcon
              icon={<Coffee weight="fill" />}
              text="The coffee arrives fresh to you"
              iconBg={colors['brand-purple']}
            />
          </BenefitsContainer>
        </div>

        <img src={coffee} alt="a ilustrative coffee image" />
      </IntroContent>
    </IntroContainer>
  )
}
