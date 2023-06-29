import useImage from '../hooks/useImage'

const Image = ({ sneakersColor, direction, ...rest }) => {
  const { loading, error, image } = useImage(sneakersColor, direction)

  if (error) return <h1>product</h1>

  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <img
          className='product-img'
          src={image}
          alt='product'
          {...rest}
        />
      )}
    </>
  )
}

export default Image