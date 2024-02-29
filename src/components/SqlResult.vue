<template>
  <a-card
    id="sqlResult"
    title="Execution Result"
    :extra="RESULT_STATUS_INFO_MAP[resultStatus]"
    :bordered="false"
    style="max-height: 420px; overflow-y: auto"
  >
    <sql-result-table v-if="!errorMsg" :result="result" />
    <div v-else>❌ Statement Error: {{ errorMsg }}</div>
  </a-card>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { QueryExecResult } from "sql.js";
import SqlResultTable from "./SqlResultTable.vue";
import { RESULT_STATUS_INFO_MAP } from "../core/result";

interface Props {
  result: QueryExecResult[];
  answerResult: QueryExecResult[];
  resultStatus: number;
  errorMsg?: string;
  // eslint-disable-next-line vue/require-default-prop
  level?: LevelType;
}

const props = withDefaults(defineProps<Props>(), {
  result: () => [],
  answerResult: () => [],
  errorMsg: () => "",
});

// e.g. [{"columns":["a","b"],"values":[[0,"hello"],[1,"world"]]}]
const { result } = toRefs(props);
</script>

<style></style>
