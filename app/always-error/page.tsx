export const revalidate = 15

async function getData() {
  // Always throw an error
  throw new Error("This page always fails to generate")
}

export default async function AlwaysErrorPage() {
  const data = await getData()

  // This code will never execute because getData always throws an error
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  )
}
