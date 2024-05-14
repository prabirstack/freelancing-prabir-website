import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { siteConfig } from '@/config/site'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Information about me',
}

export default async function AboutPage() {
  return (
    <div className='container max-w-6xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-x-4'>
          <h1 className='inline-block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light'>
            About Me
          </h1>
        </div>
      </div>
      <hr className='my-8' />
      <div className='flex flex-col md:flex-row gap-8 items-center md:items-start'>
        <div className='min-w-48 max-w-48 flex flex-col gap-2'>
          <Avatar className='h-48 w-48'>
            <AvatarImage src='/avatar.jpg' alt={siteConfig.author} />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
          <h2 className='text-2xl font-bold break-words text-center'>
            {siteConfig.author}
          </h2>
          <p className='text-muted-foreground text-center break-words'>
            Freelance Developer
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-muted-foreground text-lg pt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            maxime illo laboriosam minus rem dolores sequi consequatur maiores
            repudiandae culpa, aliquid natus cum esse molestias. Magnam earum
            velit officiis illum?
          </p>
          <p className='text-muted-foreground text-lg py-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            sunt, iure optio facere porro minima officia quis ratione. Id iste
            minima delectus repellendus quas, tempora reiciendis accusantium
            iusto corporis aut dignissimos aperiam doloribus accusamus
            voluptatibus maxime praesentium error doloremque a?
          </p>
          <p className='text-muted-foreground text-lg py-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            sunt, iure optio facere porro minima officia quis ratione. Id iste
            minima delectus repellendus quas, tempora reiciendis accusantium
            iusto corporis aut dignissimos aperiam doloribus accusamus
            voluptatibus maxime praesentium error doloremque a?
          </p>
        </div>
      </div>
    </div>
  )
}
