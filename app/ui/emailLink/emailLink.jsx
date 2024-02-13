"use client";

import { useState } from "react";
import styles from "./emailLink.module.css";
import { data } from "@/app/lib/data";

const about = data.about;

function EmailLink() {
  const [isCopied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.emailLink__Wrapper}>
      <p className={styles.emailLink__Text}>Click to copy to clipboard:</p>
      <a
        className={`${styles.emailLink__Link} hoverAccent`}
        onClick={() => copyToClipboard(JSON.stringify(about.email))}
      >
        {isCopied ? "Copied to clipboard" : about.email}
      </a>
    </div>
  );
}

export default EmailLink;
