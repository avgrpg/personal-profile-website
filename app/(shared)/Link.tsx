import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

const SmoothLink = ({
  page,
  selectedPage,
  setSelectedPage,
  isMobileScreen = false,
}: {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isMobileScreen?: boolean;
}) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const className = isMobileScreen ? "my-4" : "mx-4";
  const className2 = isMobileScreen ? "bg-light dark:!bg-dark" : "";

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "" : ""}
         group relative ${className}
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-0.5 bg-black transition-all duration-300 group-hover:w-full dark:bg-light ${
          selectedPage === lowerCasePage ? "w-full" : "w-0"
        } ${className2}
    `}
      >
        &nbsp;
      </span>
    </AnchorLink>
    //   <Link href={href} className={className + " group relative"}>
    //   {title}
    //   <span
    //     className={`ease absolute -bottom-0.5 left-0 inline-block h-0.5 bg-black transition-all duration-300 group-hover:w-full dark:bg-light
    //   ${pathname === href ? "w-full" : "w-0"}
    //   ${className2}
    //   `}
    //   >
    //     &nbsp;
    //   </span>
    // </Link>
  );
};

export default SmoothLink;
