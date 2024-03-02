import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level5",
  title: "Basic Syntax - Query - Conditional Query - WHERE",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer: "select name, score from student where name = 'Harry'",
  hint: "Please carefully review the examples provided in this level.",
  type: "main",
} as LevelType;
