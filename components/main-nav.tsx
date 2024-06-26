'use client'

import Link from 'next/link'
import { Icons } from './icons'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export function MainNav() {
  const pattname = usePathname()
  return (
    <nav className='flex items-center space-x-4 lg:space-x-6'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <Icons.logo className='h-6 w-6' />
        <span className='font-bold'>{siteConfig.name}</span>
      </Link>

      <Link
        href='/about'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pattname === '/about' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        {' '}
        About me
      </Link>
      <Link
        href='/portfolio'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pattname === '/portfolio' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        {' '}
        Portfolio
      </Link>
      <Link
        href='/blog'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pattname === '/blog' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        {' '}
        Blog
      </Link>
    </nav>
  )
}
