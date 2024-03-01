import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";
import { useRouter } from "next/router";
import { DEFAULT_LOCALE, TEXTS_BY_LANGUAGE, locales, localesNames } from "@/locale/constants";


export const Header = () => {

  const { locale, asPath } = useRouter();
  
  const {HEADER} =  TEXTS_BY_LANGUAGE[locale as keyof typeof TEXTS_BY_LANGUAGE] ?? TEXTS_BY_LANGUAGE[DEFAULT_LOCALE]

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <figure>
          <Image src="/img/logo.png" alt="logo" width={50} height={50} />
        </figure>
        <div className={styles.appName}>
          <p>Tienda</p>
        </div>
      </div>
      <div className={styles.navbar}>
        <Link href="./">
          {HEADER.PRODUCTS}
        </Link>
        <Link href="./tycs">
          {HEADER.TYCS}
        </Link>
      </div>
      <div className={styles.localeSwitch}>
        <Link href={asPath} locale={locales.ES_ES}>
          <p className={locale === locales.ES_ES ? styles.active :""}>
            <Image
              src="/img/spanish.png"
              alt="spanish"
              layout="fixed"
              width={20}
              height={20}
            />
            {localesNames[locales.ES_ES as keyof typeof localesNames]}
          </p>
        </Link>
        <Link href={asPath} locale={locales.PT_BR}>
          <p className={locale === locales.PT_BR ? styles.active :""}>
            <Image
              src="/img/brazil.png"
              alt="usa"
              layout="fixed"
              width={20}
              height={20}
            />
            {localesNames[locales.PT_BR as keyof typeof localesNames]}
          </p>
        </Link>
        <Link href={asPath} locale={locales.EN_US}>
          <p className={locale === locales.EN_US ? styles.active :""}>
            <Image
              src="/img/usa.png"
              alt="usa"
              layout="fixed"
              width={20}
              height={20}
            />
            {localesNames[locales.EN_US as keyof typeof localesNames]}
          </p>
        </Link>
      </div>
    </header>
  );
};


