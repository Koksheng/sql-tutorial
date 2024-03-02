import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level30",
  title: "Advanced Query - Window Functions - lag / lead",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer:
    "SELECT \n" +
    "    id,\n" +
    "    name,\n" +
    "    age,\n" +
    "    score,\n" +
    "    class_id,\n" +
    "    LAG(name) over (PARTITION BY class_id ORDER BY score DESC) as prev_name,\n" +
    "    LEAD(name) OVER (PARTITION BY class_id ORDER BY score DESC) AS next_name\n" +
    "FROM\n" +
    "    student;",
  hint: "Please carefully review the examples provided in this level.",
  type: "main",
} as LevelType;
