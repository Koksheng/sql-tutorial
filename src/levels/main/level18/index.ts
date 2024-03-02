import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level18",
  title: "Grouping Aggregates - Multiple Field Grouping",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer:
    "SELECT\n" +
    "  class_id,\n" +
    "  exam_num,\n" +
    "  COUNT(*) AS total_num\n" +
    "FROM\n" +
    "  student\n" +
    "GROUP BY\n" +
    "  class_id, exam_num;",
    hint: "Please carefully review the examples provided in this level.",
  type: "main",
} as LevelType;
