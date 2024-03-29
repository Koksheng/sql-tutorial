import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "adventurer",
  title: "Adventurers and Gold",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from rewards",
  answer:
    "SELECT \n" +
    "    adventurer_id,\n" +
    "    adventurer_name,\n" +
    "    SUM(reward_coins) AS total_reward_coins\n" +
    "FROM \n" +
    "    rewards\n" +
    "GROUP BY\n" +
    "    adventurer_id,\n" +
    "    adventurer_name\n" +
    "ORDER BY\n" +
    "    total_reward_coins DESC\n" +
    "LIMIT 3;",
  hint: "Group Aggregation",
  type: "custom",
} as LevelType;
