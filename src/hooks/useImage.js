import { useEffect, useState } from 'react'

const useImage = (sneakersColor, direction) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [image, setImage] = useState(null)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../assets/products/${sneakersColor}/${direction}.webp`)
        setImage(response.default)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchImage()
  }, [sneakersColor, direction])

  return {
    loading,
    error,
    image,
  }
}

export default useImage