import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level25",
  title: "Advanced Query - Compound Query",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer:
    "select name, age, score, class_id from student\n" +
    "union all\n" +
    "select name, age, score, class_id from student_new;",
  hint: "Please carefully review the examples provided in this level.",
  type: "main",
} as LevelType;
