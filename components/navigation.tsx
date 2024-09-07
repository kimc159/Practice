"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/" >Home</Link> {path === '/' ? 'O' : ''}
                </li>
                <li>
                    <Link href="/about-us" >about-us</Link>{path === '/about-us' ? 'O' : ''}
                </li>
            </ul>
        </nav>
    )
}