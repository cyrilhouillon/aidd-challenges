import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { TaskList, type Task } from "@/app/components/TaskList";

const TASKS: Task[] = [
  {
    id: "1",
    title: "Setup project",
    status: "done",
    dueDate: new Date("2026-01-15"),
  },
  {
    id: "2",
    title: "Write tests",
    status: "in-progress",
    dueDate: new Date("2026-03-05"),
  },
  {
    id: "3",
    title: "Deploy app",
    status: "todo",
    dueDate: new Date("2026-12-25"),
  },
];

test("renders all task titles", () => {
  render(<TaskList tasks={TASKS} />);
  expect(screen.getByText("Setup project")).toBeDefined();
  expect(screen.getByText("Write tests")).toBeDefined();
  expect(screen.getByText("Deploy app")).toBeDefined();
});

test("renders status labels", () => {
  render(<TaskList tasks={TASKS} />);
  expect(screen.getByText("Done")).toBeDefined();
  expect(screen.getByText("In Progress")).toBeDefined();
  expect(screen.getByText("To Do")).toBeDefined();
});

test("formats dates in french format dd/MM/yyyy", () => {
  render(<TaskList tasks={TASKS} />);
  expect(screen.getByText("Due: 15/01/2026")).toBeDefined();
  expect(screen.getByText("Due: 05/03/2026")).toBeDefined();
  expect(screen.getByText("Due: 25/12/2026")).toBeDefined();
});

test("renders empty state when no tasks", () => {
  render(<TaskList tasks={[]} />);
  expect(screen.getByText("No tasks")).toBeDefined();
});
