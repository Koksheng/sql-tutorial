import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "waveChicken",
  title: "Big Wave Chicken",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from chicken_observation",
  answer:
    "SELECT \n" +
    "    observer_name,\n" +
    "    observation_date,\n" +
    "    wave_intensity\n" +
    "FROM \n" +
    "    chicken_observation\n" +
    "WHERE \n" +
    "    observation_location LIKE '%Big Wave%' and wave_intensity > 5;",
  hint: "like Fuzzy Search",
  type: "custom",
} as LevelType;
