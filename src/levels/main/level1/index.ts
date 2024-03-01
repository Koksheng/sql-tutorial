import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level1",
  title: "Basic Syntax - Query - Full Table Query",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer: "select * from student",
  hint: "Please carefully review the examples provided in this level.",
  type: "main",
} as LevelType;
