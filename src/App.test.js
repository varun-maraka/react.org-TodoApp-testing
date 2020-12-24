import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from "react-dom"; 
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders the correct content",()=>{
  const root = document.createElement("div");
  ReactDOM.render(<App/>,root);
  expect(root.querySelector("h3").textContent).toBe("TODO");
})