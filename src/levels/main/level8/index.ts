import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level8",
  title: "Basic Syntax - Query - Conditional Query - Fuzzy Query",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer: "select name, score from student where name not like '%ar%'",
  hint: "Please carefully review the examples provided in this level.",
  type: "main",
} as LevelType;
