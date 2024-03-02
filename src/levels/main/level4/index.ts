import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level4",
  title: "Basic Syntax - Query - Constants and Operations",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer: "select name, score, score * 2 as double_score from student;",
  hint: "Please carefully review the examples provided in this level.",
  type: "main",
} as LevelType;
