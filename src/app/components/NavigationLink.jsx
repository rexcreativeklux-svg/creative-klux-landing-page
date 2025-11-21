'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import NProgress from 'nprogress';

export default function NavigationLink({ href, children, className, ...props }) {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        
        // Start progress bar
        NProgress.start();
        
        // Show full screen loader
        if (window.setNavigationLoading) {
            window.setNavigationLoading(true);
        }
        
        // Navigate
        router.push(href);
    };

    return (
        <Link href={href} onClick={handleClick} className={className} {...props}>
            {children}
        </Link>
    );
}