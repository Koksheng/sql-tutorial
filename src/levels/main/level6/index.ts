import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level6",
  title: "Basic Syntax - Query - Conditional Query - Operators",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer: "select name, age from student where name != 'George'",
  hint: "Please carefully review the examples provided in this level.",
  type: "main",
} as LevelType;
