import { siteConfig } from '@/config/site'
import { Mail } from 'lucide-react'
import { Icons } from './icons'

export function Sitefooter() {
  return (
    <footer>
      <div className='mb-6 mt-14 flex flex-col items-center'>
        <div className='mb-3 flex space-x-4'>
          <a href='mailto:hello@example.com' target='_blank' rel='noreferrer'>
            <span className='sr-only'>Mail</span>
            <Mail className='h-6 w-6' />
          </a>
          <a href={siteConfig.links.twitter} target='_blank' rel='noreferrer'>
            <span className='sr-only'>Twitter</span>
            <Icons.twitter className='h-5 w-5' />
          </a>
          <a href={siteConfig.links.github} target='_blank' rel='noreferrer'>
            <span className='sr-only'>Github</span>
            <Icons.gitHub className='h-6 w-6' />
          </a>
        </div>
        <div className='mb-2 flex space-x-2 text-sm text-muted-foreground'>
          <a href={siteConfig.links.linkedin} target='_blank'>
            {siteConfig.author}
          </a>
        </div>
      </div>
    </footer>
  )
}
