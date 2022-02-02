import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders learn react link", () => {
  render(<App />)
  const linkElement = screen.getByText(/world/i)
  expect(linkElement).toBeInTheDocument()
})

test("should result in 4", () => {
  expect(2 + 2).toBe(4)
})
