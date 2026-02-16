type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  dueDate: Date;
}

function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const STATUS_LABELS: Record<TaskStatus, string> = {
  todo: "To Do",
  "in-progress": "In Progress",
  done: "Done",
};

const STATUS_STYLES: Record<TaskStatus, string> = {
  todo: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  "in-progress":
    "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  done: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
};

export function TaskList({ tasks }: { tasks: Task[] }) {
  if (tasks.length === 0) {
    return <p>No tasks</p>;
  }

  return (
    <ul className="flex flex-col gap-3 w-full">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between rounded-lg border border-zinc-200 px-4 py-3 dark:border-zinc-800"
        >
          <div className="flex flex-col gap-1">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              {task.title}
            </span>
            <span className="text-sm text-zinc-500">
              Due: {formatDate(task.dueDate)}
            </span>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${STATUS_STYLES[task.status]}`}
          >
            {STATUS_LABELS[task.status]}
          </span>
        </li>
      ))}
    </ul>
  );
}
