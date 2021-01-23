import React from "react";
import { render } from "@testing-library/react";
import { UserAccountMenu } from "./UserAccountMenu";
import MENU_ITEMS from "./data";

const setup = () => {
  const utils = render(<UserAccountMenu />);

  return {
    ...utils,
  };
};

test("menu items are displayed", () => {
  const { getAllByRole, getByText } = setup();
  const menuItemElements = getAllByRole("menuitem");
  expect(menuItemElements.length).toEqual(MENU_ITEMS.length + 2);

  MENU_ITEMS.forEach(({ title }) => {
    expect(getByText(title)).toBeInTheDocument();
  });

  expect(getByText(/English/i)).toBeInTheDocument();
  expect(getByText(/Logout/i)).toBeInTheDocument();
});
