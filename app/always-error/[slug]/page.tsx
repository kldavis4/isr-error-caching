export const dynamicParams = true
export const revalidate = 15

// Generate no paths at build time
export function generateStaticParams() {
  return []
}

async function getData(slug: string): Promise<{ title: string; content: string; }> {
  // Always throw an error, regardless of build time or runtime
  throw new Error(`This page always fails to generate (slug: ${slug})`)
}

export default async function AlwaysErrorPage({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug)

  // This code will never execute because getData always throws an error
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  )
}
