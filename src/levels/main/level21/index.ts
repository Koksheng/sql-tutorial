import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level21",
  title: "Advanced Query - Join Query - Inner Join",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer:
    "select s.name student_name, s.age student_age, s.class_id class_id, c.name class_name, c.level class_level from student s join class c on s.class_id = c.id;",
  hint: "Please carefully review the examples provided in this level.",
  type: "main",
} as LevelType;
