import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level11",
  title: "Basic Syntax - Query - Sorting",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer: "select name, age, score from student order by score desc, age asc;",
  hint: "Need to use multi-field sorting",
  type: "main",
} as LevelType;
