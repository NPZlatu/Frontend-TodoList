import { render, screen } from "@testing-library/react";
import App from "./AppComponent";

jest.mock("../HeaderFooter/HeaderComponent", () => () => (
  <div>Mock Header</div>
));
jest.mock("../HeaderFooter/FooterComponent", () => () => (
  <div>Mock Footer</div>
));
jest.mock("../Auth/LoginComponent", () => () => (
  <div>Mock Login Component</div>
));
jest.mock("../Auth/RegisterComponent", () => () => (
  <div>Mock Register Component</div>
));
jest.mock("../Todo/TodoComponent", () => () => <div>Mock Todo Component</div>);

describe("App Component", () => {
  test("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText("Mock Header")).toBeInTheDocument();
    expect(screen.getByText("Mock Footer")).toBeInTheDocument();
  });

  test("shows login page by default", () => {
    render(<App />);
    expect(screen.getByText("Mock Login Component")).toBeInTheDocument();
  });
});
