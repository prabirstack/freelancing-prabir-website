import { posts } from '#site/content'
import { PostItem } from '@/components/post-item'

import { Separator } from '@/components/ui/separator'
import { sortPosts } from '@/lib/utils'

export default async function BlogPage() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published))
  const displayPosts = sortedPosts

  return (
    <div className='container max-w-4xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block font-black text-4xl lg:text-5xl'>Blog</h1>
          <p className='text-xl text-muted-foreground'>
            My rambling on all things web dev and UX/UI design.
          </p>
        </div>
      </div>
      <Separator className='mt-8' />
      {displayPosts?.length > 0 ? (
        <ul className='flex flex-col'>
          {displayPosts.map((post) => {
            const { slug, title, date, description } = post

            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  title={title}
                  desccription={description}
                  date={date}
                />
              </li>
            )
          })}
        </ul>
      ) : (
        <p className='mt-8 text-muted-foreground'>Nothing to see here yet </p>
      )}
    </div>
  )
}