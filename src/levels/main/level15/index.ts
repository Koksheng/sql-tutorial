import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level15",
  title: "Function - String Functions",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer:
    "SELECT id, name, UPPER(name) AS upper_name\n" +
    "FROM student\n" +
    "WHERE name = 'Harry';",
    hint: "Please carefully review the examples provided in this level.",
  type: "main",
} as LevelType;
