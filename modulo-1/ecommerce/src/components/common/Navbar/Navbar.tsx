import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-7">
      <div>
        <Link href="/">
          <Image  src="/images/navbar/logo.webp" alt="logo" width={40} height={40} />
        </Link>
      </div>
      <ul className="flex items-center gap-6">
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/cart">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  )
}