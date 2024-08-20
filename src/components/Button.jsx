/* eslint-disable react/prop-types */
const Button = ({ operador, fn }) => {
  return (
    <button
      className='h-10 w-10 items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
      type='button'
      onClick={fn}>
      {operador}
    </button>
  )
}

export default Button
