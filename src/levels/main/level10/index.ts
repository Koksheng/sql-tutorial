import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level10",
  title: "Basic Syntax - Query - Distinct",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer: "select distinct class_id, exam_num from student;",
  hint: "Please carefully review the examples provided in this level.",
  type: "main",
} as LevelType;
