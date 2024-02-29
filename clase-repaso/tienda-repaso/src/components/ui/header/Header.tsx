import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";


export const Header = () => {

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
          Productos
        </Link>
        <Link href="./tycs">
          Términos y condiciones
        </Link>
      </div>
      <div className={styles.localeSwitch}>
        {/* Mediante el atributo locale le indicamos a Next que idioma queremos utilizar al hacer la
          redirección
           */}
        <Link href="/">
          <p>
            <Image
              src="/img/spanish.png"
              alt="spanish"
              layout="fixed"
              width={20}
              height={20}
            />
            ES
          </p>
        </Link>
        <Link href="/">
          <p>
            <Image
              src="/img/brazil.png"
              alt="usa"
              layout="fixed"
              width={20}
              height={20}
            />
            PT
          </p>
        </Link>
        <Link href="/">
          <p>
            <Image
              src="/img/usa.png"
              alt="usa"
              layout="fixed"
              width={20}
              height={20}
            />
            EN
          </p>
        </Link>
      </div>
    </header>
  );
};


