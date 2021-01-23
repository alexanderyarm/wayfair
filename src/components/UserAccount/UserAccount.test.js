import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { UserAccount } from "./UserAccount";

const setup = () => {
  const utils = render(<UserAccount />);

  return {
    ...utils,
  };
};

test("username is displayed", () => {
  const { getByTestId } = setup();
  const usernameElement = getByTestId(`user-account-name`);

  expect(usernameElement).toBeInTheDocument();
});

test("menu is displayed when click on user account button and is hidden when click again", () => {
  const { getByRole, queryByRole } = setup();
  const userAccountElement = getByRole(`button`);

  expect(queryByRole(`menu`)).toBeNull();
  fireEvent.click(userAccountElement);
  expect(getByRole(`menu`)).toBeVisible();
  fireEvent.click(userAccountElement);
  expect(queryByRole(`menu`)).toBeNull();
});
