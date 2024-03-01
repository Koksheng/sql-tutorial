import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level3",
  title: "Basic Syntax - Query - Alias",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer: "select name as StudentName, age as StudentAge from student",
  hint: "Please carefully review the examples provided in this level.",
  type: "main",
} as LevelType;
