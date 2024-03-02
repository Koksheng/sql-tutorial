import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level23",
  title: "Advanced Query - Subquery",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer:
    "select name, score, class_id from student where class_id in (select distinct id from class);",
  hint: "First query all class numbers, and then query the student information whose numbers are in all class numbers.",
  type: "main",
} as LevelType;
