
export default async function getAllMovies({ type }: { type: "selected" | "top" }) {
  const response = await fetch(`https://advanced-internship-api-production.up.railway.app/${type}Movies`)
  if (!response.ok) return undefined

  const data = await response.json()

  // Convert rating from string → number
  const formattedData = data.data.map((movie: any) => ({
    ...movie,
    rating: Number(movie.rating),
  }))

  return formattedData
}

