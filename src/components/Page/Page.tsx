import { ReactElement, ReactNode, useEffect } from "react";

import styles from "./Page.module.scss";

const Page = ({
  title,
  children,
}: {
  title?: string;
  children?: ReactNode;
}): ReactElement => {
  useEffect(() => {
    document.title = title ? `${title} - Hikari Hayashi` : "Hikari Hayashi";
  }, [title]);

  return (
    <article className={styles.page}>
      {title && <h1 className={styles.title}>{title}</h1>}
      <div className={styles.content}>{children}</div>
    </article>
  );
};

export { Page };