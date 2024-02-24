import {homeContentEs} from "@/locale/es/home";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {homeContentEn} from "@/locale/en/home";

export default function Navbar() {
  const router = useRouter();

  const changeLanguage = () => {
    const newLocale = router.locale === "es" ? "en" : "es";
		router.push(router.pathname, router.asPath, {locale: newLocale});
	};

	const content = router.locale === "es" ? homeContentEs.navbar : homeContentEn.navbar;

	return (
		<nav className="flex items-center justify-between px-7">
			<div>
				<Link href="/">
					<Image
						src="/images/navbar/logo.webp"
						alt="logo"
						width={40}
						height={40}
					/>
				</Link>
			</div>
			<ul className="flex items-center gap-6">
				<li>
					<Link href="/about">{content.about}</Link>
				</li>
				<li>
					<Link href="/contact">{content.contact}</Link>
				</li>
				<li>
					<Link href="/cart">{content.cart}</Link>
				</li>
				<li>
					<Link href="/series">{content.series}</Link>
				</li>
				<li>
					<button onClick={changeLanguage}>
						{router.locale === "es" ? "EN" : "ES"}
					</button>
				</li>
			</ul>
		</nav>
	);
}
