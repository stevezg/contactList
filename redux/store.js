import {createStore} from 'redux'

import {addContact} from './actions'
import reducer from './reducer'

const store = createStore(reducer)

/*
store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))
store.dispatch(updateUser({foo: 'baz'}))
*/

store.dispatch(addContact({name: 'Daniel Smith', phone: '(123) 456-7890'}))
store.dispatch(addContact({name: 'Peter Willis', phone: '(123) 456-7890'}))
store.dispatch(addContact({name: 'Nathan Cordes', phone: '(505) 050-5050'}))
store.dispatch(addContact({name: 'Alex Smith', phone: '(050)502-3029'}))
store.dispatch(addContact({name: 'Brendan Wagner', phone: '(501) 050-5750'}))
store.dispatch(addContact({name: 'Joey Vernier', phone: '(565) 054-5050'}))
store.dispatch(addContact({name: 'Daniel Kelso', phone: '(305) 056-5050'}))
store.dispatch(addContact({name: 'James Pardee', phone: '(505) 055-5050'}))
store.dispatch(addContact({name: 'Elon Musk', phone: '(505) 050-5250'}))
store.dispatch(addContact({name: 'Kate Upton', phone: '(505) 050-4650'}))
store.dispatch(addContact({name: 'Lily Shree', phone: '(507) 505-0500'}))
store.dispatch(addContact({name: 'Lil Windex', phone: '(505) 052-5050'}))
store.dispatch(addContact({name: 'Jordy Alba', phone: '(505) 059-5050'}))
store.dispatch(addContact({name: 'Kate Smith', phone: '(505) 050-2050'}))
store.dispatch(addContact({name: 'Ronaldo Messi', phone: '(505) 050-5050'}))
store.dispatch(addContact({name: 'Orlando Bloom', phone: '(203) 050-5050'}))
store.dispatch(addContact({name: 'John Snow', phone: '(303) 050-6050'}))
store.dispatch(addContact({name: 'Jamie Fox', phone: '(505) 050-7050'}))
store.dispatch(addContact({name: 'Paige Brenner', phone: '(508) 050-5050'}))
store.dispatch(addContact({name: 'Tommy Doyle', phone: '(505) 080-5050'}))
store.dispatch(addContact({name: 'Jake Northrup', phone: '(503) 050-5050'}))
store.dispatch(addContact({name: 'Pusha T', phone: '(505) 050-5040'}))
store.dispatch(addContact({name: 'Kendrick Lamar', phone: '(545) 0505-050'}))
store.dispatch(addContact({name: 'Dr. Dre', phone: '(505) 650-5060'}))
store.dispatch(addContact({name: 'Eminem', phone: '(505) 050-5058'}))
store.dispatch(addContact({name: 'Cher', phone: '(505) 050-5056'}))
store.dispatch(addContact({name: 'Drew Carry', phone: '(564) 505-0501'}))
store.dispatch(addContact({name: 'Will Smith', phone: '(525) 050-5050'}))
store.dispatch(addContact({name: 'Steve Anderson', phone: '(120) 505-0505'}))
store.dispatch(addContact({name: 'Jeff Besoz', phone: '(505) 053-0050'}))

console.log(store.getState())

export default store
