import {INCREMENT} from './types'
export const increment = ({ commit,state },data) => {
  console.log('0000000000')
  console.log(state)
  console.log(data)
  commit('INCREMENT') //
};
// console.log(arguments)
//console.log('3333333333')
//commit(INCREMENT)
/*export const decrement = ({ dispatch }) => dispatch('DECREMENT')

export const incrementIfOdd = ({ dispatch, state }) => {
  if ((state.count + 1) % 2 === 0) {
    dispatch('INCREMENT')
  }
}

export const incrementAsync = ({ dispatch }) => {
  setTimeout(() => {
    dispatch('INCREMENT')
  }, 1000)
}*/
