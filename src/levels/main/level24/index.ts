import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level24",
  title: "Advanced Query - Subquery - Exists",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer:
    "select name, age, class_id from student where not exists (select class_id from class where class.id = student.class_id);",
  hint: "Please carefully review the examples provided in this level.",
  type: "main",
} as LevelType;
