import { RegularText, TitleText } from '../../components/Typography'

import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'
import illustration from '../../assets/Illustration.png'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../CompleteOrder'
import { paymentMethods } from '../CompleteOrder/components/CompleteFormLeft/PaymentOptions'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}
export function OrderConfirmedPage() {
  const { colors } = useTheme()
  const { state } = useLocation() as unknown as LocationType
  const nav = useNavigate()

  useEffect(() => {
    if (!state) {
      nav('/')
    }
  }, [])

  if (!state) return <></>

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Woohoo! Order confirmed</TitleText>
        <RegularText size="l" color="subtitle">
          Now you just have to wait and soon the coffee will be delivered to you
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin />}
            iconBg={colors['brand-purple']}
            text={
              <RegularText>
                Deliver at {state.street}, {state.number}
                <br></br>
                {state.district}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Delivery estimate
                <br></br>
                <strong>20min-30min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar />}
            iconBg={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Payment on delivery
                <br></br>
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={illustration} alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}
