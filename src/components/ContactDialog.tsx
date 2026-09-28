"use client";

import Image from "next/image";
import { useId } from "react";
import { contact } from "@/lib/products";
import { SiteDialog } from "@/components/SiteDialog";

export function ContactDialog({ onClose }: { onClose: () => void }) {
  const titleId = useId();
  return <SiteDialog titleId={titleId} onClose={onClose} className="jy-contact-dialog jy-wechat-dialog" closeLabel="关闭合作咨询">
    <div className="jy-wechat-contact">
      <h2 id={titleId}>合作咨询</h2>
      <p>微信扫码，联系咨询</p>
      <Image src="/images/wechat-liang-manager.webp" alt="梁经理微信二维码" width={438} height={438} sizes="240px" loading="eager" />
      <strong>梁经理</strong>
      <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
    </div>
  </SiteDialog>;
}
