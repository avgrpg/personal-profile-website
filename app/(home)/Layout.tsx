import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <div
      className={`${props.className}  w-full h-full inline-block z-0 bg-light p-8
      xl:p-32 lg:p-24 md:p-16 sm:p-8
      dark:bg-dark`}
    >
      {props.children}
    </div>
  );
};

export default Layout;
