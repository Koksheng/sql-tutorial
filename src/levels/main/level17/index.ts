import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level17",
  title: "Grouping Aggregates - Single Field Grouping",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer:
    "SELECT\n" +
    "  class_id,\n" +
    "  AVG(score) AS avg_score\n" +
    "FROM\n" +
    "  student\n" +
    "GROUP BY\n" +
    "  class_id;",
  hint: "Which aggregate function can be used for average grade?",
  type: "main",
} as LevelType;
