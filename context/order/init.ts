import { sample } from 'effector'
import {
  getRostelecomSnackssByCity,
  getRostelecomSnackssByCityFx,
  makePayment,
  makePaymentFx,
} from '.'

sample({
  clock: getRostelecomSnackssByCity,
  source: {},
  fn: (_, data) => data,
  target: getRostelecomSnackssByCityFx,
})

sample({
  clock: makePayment,
  source: {},
  fn: (_, data) => data,
  target: makePaymentFx,
})
