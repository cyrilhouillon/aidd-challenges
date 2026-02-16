# 01-B: Display task list WITHOUT Context Engineering

## First attemps

### Prompt

```text
I want to create a TaskList component that displays tasks with:
- Title
- Status (todo, in-progress, done)
- Due date

Use mock data.
```
### Result

Code compiles, tasks are displayed, 9 tests are created and passing.
But the date format don't match my expectations.

## First attemps

### Prompt

```text
I want to create a TaskList component that displays tasks with:
- Title
- Status (todo, in-progress, done)
- Due date

Due date, like all dates, should be formatted in french format "Due: dd/MM/yyyy".
Use mock data.
```
### Result

Code compiles, tasks are displayed, 7 tests are created and passing, 
The date format meets my requirements.
The css style is different from previous attempt as it is not specified so it's not determinist.
