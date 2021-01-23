import { render } from "@testing-library/react";
import { Header } from "./Header";

const setup = () => {
  const utils = render(<Header />);

  return {
    ...utils,
  };
};

test("renders logo and user account", () => {
  const { getByAltText, getByTestId } = setup();
  const logoElement = getByAltText(/Logo/i);
  const userAccountElement = getByTestId("user-account");
  expect(logoElement).toBeInTheDocument();
  expect(userAccountElement).toBeInTheDocument();
});
