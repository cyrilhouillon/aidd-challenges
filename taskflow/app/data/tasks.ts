import type { Task } from "@/app/components/TaskList";

export const MOCK_TASKS: Task[] = [
  {
    id: "1",
    title: "Setup project structure",
    status: "done",
    dueDate: new Date("2026-02-10"),
  },
  {
    id: "2",
    title: "Implement authentication",
    status: "in-progress",
    dueDate: new Date("2026-02-20"),
  },
  {
    id: "3",
    title: "Write API documentation",
    status: "todo",
    dueDate: new Date("2026-02-28"),
  },
];
