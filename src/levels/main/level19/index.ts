import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level19",
  title: "Grouping Aggregates - HAVING Clause",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer:
    "SELECT\n" +
    "  class_id,\n" +
    "  SUM(score) AS total_score\n" +
    "FROM\n" +
    "  student\n" +
    "GROUP BY\n" +
    "  class_id\n" +
    "HAVING\n" +
    "  SUM(score) > 150;",
  hint: "Please carefully review the examples provided in this level.",
  type: "main",
} as LevelType;
