import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { MainNav } from '@/components/main-nav'
import { MobileNav } from './mobile-nav'

export function SiteHeader() {
  return (
    <header className='sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <MainNav />
        <div className='flex flex-1 items-center justify-end space-x-2'>
          <nav className='flex items-center'>
            <Link href='/'>
              <div
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'hidden sm:inline-flex'
                )}
              >
                Get in Touch
              </div>
            </Link>
            <MobileNav />
          </nav>
        </div>
        
      </div>
    </header>
  )
}

// target='_blank' rel='noreferrer'
