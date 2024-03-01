# Adventurers and Coins

Assuming there's an adventurers guild that maintains a table named `rewards` to record the gold coin rewards earned by each adventurer in various tasks.

The table fields are as follows:

- `adventurer_id`: The unique identifier for each adventurer.
- `adventurer_name`: The name of the adventurer.
- `task_id`: The unique identifier for each task.
- `task_name`: The name of the task.
- `reward_coins`: The number of gold coins rewarded to the adventurer for the task.

Please write an SQL query to output the adventurer id (`adventurer_id`), adventurer name (`adventurer_name`), and the total gold coins rewarded (`total_reward_coins`) for each adventurer, ordered by total gold coins rewarded in descending order. Only list the top 3 adventurers based on total gold coins rewarded.