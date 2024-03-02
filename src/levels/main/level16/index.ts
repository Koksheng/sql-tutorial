import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level16",
  title: "Function - Aggregate Functions",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer:
    "SELECT\n" +
    "  SUM(score) AS total_score,\n" +
    "  AVG(score) AS avg_score,\n" +
    "  MAX(score) AS max_score,\n" +
    "  MIN(score) AS min_score\n" +
    "FROM\n" +
    "  student;",
    hint: "Please carefully review the examples provided in this level.",
  type: "main",
} as LevelType;
