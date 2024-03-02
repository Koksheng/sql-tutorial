import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level9",
  title: "Basic Syntax - Query - Conditional Query - Logical Operations",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer:
    "select name, score from student where name like '%ar%' or score > 500;",
    hint: "Please carefully review the examples provided in this level.",
  type: "main",
} as LevelType;
