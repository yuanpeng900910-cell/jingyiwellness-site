"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { HeaderActions } from "@/components/HeaderActions";
import { siteNavigation } from "@/lib/site-navigation";

export function DesktopNavigation() {
  return <nav className="site-nav jy-site-navigation" aria-label="主导航"><ul className="site-nav__depth1">
    {siteNavigation.map((item) => <li className="site-nav__item jy-site-navigation__item" key={item.label}>
      <p className="site-nav__menu"><Link href={item.href} className="site-nav__link site-nav__link--depth1">{item.label}</Link></p>
      {"children" in item && <ul className="jy-site-navigation__submenu" aria-label={`${item.label}分类`}>{item.children.map((child) => <li key={child.label}><Link href={child.href}>{child.label}</Link></li>)}</ul>}
    </li>)}
  </ul></nav>;
}

export function MobileNavigation({ onNavigate }: { onNavigate?: () => void }) {
  return <ul className="mobile-drawer__list jy-mobile-navigation">{siteNavigation.map((item) => <li className="mobile-drawer__item" key={item.label}>
    <Link href={item.href} className="mobile-drawer__link mobile-drawer__link--depth1 no-fold" onClick={onNavigate}>{item.label}</Link>
    {"children" in item && <ul className="jy-mobile-navigation__submenu">{item.children.map((child) => <li key={child.label}><Link href={child.href} onClick={onNavigate}>{child.label}</Link></li>)}</ul>}
  </li>)}</ul>;
}

export function InnerHeader() {
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  return <header className="jy-inner-header">
    <Link href="/" aria-label="京颐养方首页" className="jy-inner-header__logo"><Image src="/images/logo.webp" alt="京颐养方 JINGYI WELLNESS" width={184} height={63} /></Link>
    <DesktopNavigation />
    <HeaderActions onOpen={() => { if (mobileMenu.current) mobileMenu.current.open = false; }} />
    <details className="jy-inner-header__mobile" ref={mobileMenu}><summary aria-label="打开导航菜单"><span /><span /><span /></summary><nav aria-label="移动端主导航"><MobileNavigation onNavigate={() => { if (mobileMenu.current) mobileMenu.current.open = false; }} /></nav></details>
  </header>;
}
