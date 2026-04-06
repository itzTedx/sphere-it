import * as migration_20260403_101728_initial_schema from './20260403_101728_initial_schema';
import * as migration_20260406_101500_perf_indexes from './20260406_101500_perf_indexes';

export const migrations = [
  {
    up: migration_20260403_101728_initial_schema.up,
    down: migration_20260403_101728_initial_schema.down,
    name: '20260403_101728_initial_schema'
  },
  {
    up: migration_20260406_101500_perf_indexes.up,
    down: migration_20260406_101500_perf_indexes.down,
    name: '20260406_101500_perf_indexes'
  },
];
