import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level7",
  title: "Basic Syntax - Query - Conditional Query - Null Values",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer: "select name, age, score from student where age is not null",
  hint: "Please carefully review the examples provided in this level.",
  type: "main",
} as LevelType;
