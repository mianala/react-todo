import { render, screen } from "@testing-library/react"
import TodoList from "./TodoList"

test("Hello world in todo list", () => {
  render(<TodoList />)
  const linkElement = screen.getByText(/hello world/i)
  expect(linkElement).toBeInTheDocument()
})
