import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "level28",
  title: "Advanced Query - Window Functions - rank",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer:
    "SELECT \n" +
    "    id,\n" +
    "    name,\n" +
    "    age,\n" +
    "    score,\n" +
    "    class_id,\n" +
    "    RANK() OVER (PARTITION BY class_id ORDER BY score DESC) AS ranking\n" +
    "FROM\n" +
    "    student;",
  hint: "Pay attention to the fields of partition by and order by",
  type: "main",
} as LevelType;
