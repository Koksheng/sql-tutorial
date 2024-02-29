<template>
  <div id="levelsPage">
    <a-row :gutter="[16, 16]">
      <a-col :md="12" :xs="24">
        <a-card title="Main Level">
          <a-list item-layout="horizontal" :data-source="mainLevels">
            <template #renderItem="{ item: level, index }">
              <a-list-item>
                <a-list-item-meta :title="`${index + 1}、${level.title}`" />
                <template #actions>
                  <router-link :to="`/learn/${level.key}`">
                    <a-button>Start</a-button>
                  </router-link>
                </template>
              </a-list-item>
            </template>
          </a-list>
        </a-card>
      </a-col>
      <a-col :md="12" :xs="24">
        <a-card title="Custom Level">
          <a-list item-layout="horizontal" :data-source="customLevels">
            <template #renderItem="{ item: level }">
              <a-list-item>
                <a-list-item-meta :title="level.title" />
                <template #actions>
                  <router-link :to="`/learn/${level.key}`">
                    <a-button>Start</a-button>
                  </router-link>
                </template>
              </a-list-item>
            </template>
          </a-list>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import mainLevels from "../levels/mainLevels";
import customLevels from "../levels/customLevels";
</script>

<style scoped></style>
