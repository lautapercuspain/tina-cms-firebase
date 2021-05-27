import * as React from "react";
import { ThemeContext } from "./theme";
import { Section } from "./section";
import { Icon, ICON_FIELDS } from "./icon";
import { BiSun } from "react-icons/bi";
import { RiMoonClearLine } from "react-icons/ri";

export const Nav = ({ data }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Section>
      <div className="relative flex flex-col flex-wrap py-8 px-8 lg:px-12 2xl:px-16 mx-auto md:items-center md:flex-row">
        <a
          href="#"
          className="pr-2 lg:pr-8 mb-8 md:mb-0 focus:outline-none flex items-center"
        >
          <div className="inline-flex items-center">
            <div className={`mr-2`}>
              <Icon icon={data.wordmark.icon} />
            </div>
            <h2 className="font-bold tracking-tight transition duration-150 ease-out transform text-blueGray-500 dark:text-blueGray-200 lg:text-md text-bold">
              {data.wordmark.name}
            </h2>
          </div>
        </a>
        <div className="flex-grow md:flex md:justify-end">
          <nav className="flex flex-wrap items-center justify-between sm:justify-end text-base -mx-2 sm:-mx-6 md:mx-0">
            {data.items.map(function (item, index) {
              return (
                <a
                  key={index}
                  href="#"
                  className={`mx-2 sm:mx-6 md:mx-8 text-sm tracking-wide font-semibold transition duration-150 ease-out text-gray-600 dark:text-gray-200`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <button
            onClick={() => {
              theme.toggleThemeMode();
            }}
            type="button"
            className="ml-8 outline-none opacity-30 hover:opacity-70 focus:opacity-100 focus:outline-none transparent absolute top-9 right-6  md:relative md:top-auto md:right-auto transition duration-150 ease-out"
            aria-pressed="false"
          >
            <BiSun
              className={`w-6 h-6 transition duration-300 ease-out transform`}
            />
            <RiMoonClearLine
              className={`w-6 h-6 absolute top-0 left-0 transition duration-300 ease-out transform`}
            />
          </button>
        </div>
      </div>
    </Section>
  );
};

export const NAV_FIELDS = [
  {
    label: "Wordmark (Group)",
    name: "wordmark",
    component: "group",
    fields: [
      {
        label: "Name (Text)",
        name: "name",
        component: "text",
      },
      ...ICON_FIELDS,
    ],
  },
  {
    label: "Nav Items",
    name: "items",
    component: "group-list",
    itemProps: (item) => ({
      key: item.key,
      label: item.label,
    }),
    defaultItem: () => ({
      label: "New Link",
      link: "/",
    }),
    fields: [
      {
        label: "Label",
        name: "label",
        component: "text",
      },
      {
        label: "Link",
        name: "link",
        component: "text",
      },
      {
        label: "Order",
        name: "order",
        component: "number",
      },
    ],
  },
];
