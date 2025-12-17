import React from "react";
import styles from "../css/starborder.module.css";

type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties["animationDuration"];
    thickness?: number;
  };

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";
  const restProps = rest as React.ComponentPropsWithoutRef<T> & {
    style?: React.CSSProperties;
  };

  return (
    <Component
      className={`${styles.star_border_container} ${className}`}
      {...(rest as Record<string, unknown>)}
      style={{
        padding: `${thickness}px 0`,
        ...restProps.style,
      }}
    >
      <div
        className={styles.border_gradient_bottom}
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className={styles.border_gradient_top}
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className={styles.inner_content}>{children}</div>
    </Component>
  );
};

export default StarBorder;
