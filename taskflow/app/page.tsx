import { TaskList } from "@/app/components/TaskList";
import { MOCK_TASKS } from "@/app/data/tasks";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-8 py-16 px-16 bg-white dark:bg-black">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          TaskFlow
        </h1>
        <TaskList tasks={MOCK_TASKS} />
      </main>
    </div>
  );
}
