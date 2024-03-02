import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level14",
  title: "Function - Date Functions",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer: "select name, date() as Current_Date from student",
  hint: "Please carefully review the examples provided in this level.",
  type: "main",
} as LevelType;
