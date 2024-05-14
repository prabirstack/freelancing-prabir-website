import { Button, buttonVariants } from '@/components/ui/button'
import { cn, sortPosts } from '@/lib/utils'
import { posts } from '#site/content'

import Image from 'next/image'
import Link from 'next/link'
import { PostItem } from '@/components/post-item'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { siteConfig } from '@/config/site'

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5)
  return (
    <>
      <section className=' spacey6 pb-8 pt-6 md:pb-12 md:mt-6 lg:py-15'>
        <div className='container flex flex-col gap-4 justify-between min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-10rem)]'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-balance tracking-tight'>
              Crafting Digital <br /> Experiences That Resonates
            </h1>
            <div className='flex gap-4 justify-start'>
              <Link
                href='/blog'
                className={cn(buttonVariants({ size: 'lg' }), 'w-fit')}
              >
                About me
              </Link>
              <Link
                href='/contact'
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'outline' }),
                  'w-fit'
                )}
              >
                Let&apos;s Connect
              </Link>
            </div>
          </div>
          {/* <Avatar className='h-48 w-48'>
            <AvatarImage src='/avatar.jpg' alt={siteConfig.author} />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar> */}
          <div className='flex gap-4'>
            <span className='relative flex h-3 w-3 mt-1'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-green-500'></span>
            </span>
            <p className='sm:text-xl lg:text-2xl'>
              Your One-Stop Web Development, Design, and Digital Marketing
              Maestro
            </p>
          </div>
        </div>
      </section>
      <section className='container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-20'>
        <h2 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light'>
          Latest Posts
        </h2>
        <ul className='flex flex-col'>
          {latestPosts.map((post) => (
            <li key={post.slug} className='first:border-t first:border-border'>
              <PostItem
                slug={post.slug}
                title={post.title}
                desccription={post.description}
                date={post.date}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
