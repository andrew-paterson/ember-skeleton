// BEGIN-SNIPPET import-custom-sort-objects.js
import customSortObjects from 'ember-skeleton/utils/ember-skeleton/custom-sort-objects';
//END-SNIPPET

// BEGIN-SNIPPET custom-sort-objects-string-match.js
const contigs = [
  {
    id: 1,
    alias: 'INT',
    code: 'IN',
    status: {
      name: 'failed',
      id: 6102,
    },
  },
  {
    id: 2,
    alias: 'PRRT',
    code: 'PRRT',
    status: {
      name: 'action_required',
      id: 6120,
    },
  },
  {
    id: 3,
    alias: 'PRRT',
    code: 'PRRT',
    status: {
      name: 'completed',
      id: 6100,
    },
  },
  {
    id: 4,
    alias: 'INT',
    code: 'IN',
    status: {
      name: 'qc_pending',
      id: 6100,
    },
  },
];

var ordered = customSortObjects({
  array: contigs,
  order: ['PRRT', 'IN'],
  key: 'code',
});

// Result
[
  {
    id: 2,
    alias: 'PRRT',
    code: 'PRRT',
    status: {
      name: 'action_required',
      id: 6120,
    },
  },
  {
    id: 3,
    alias: 'PRRT',
    code: 'PRRT',
    status: {
      name: 'completed',
      id: 6100,
    },
  },
  {
    id: 1,
    alias: 'INT',
    code: 'IN',
    status: {
      name: 'failed',
      id: 6102,
    },
  },
  {
    id: 4,
    alias: 'INT',
    code: 'IN',
    status: {
      name: 'qc_pending',
      id: 6100,
    },
  },
];
//END-SNIPPET

// BEGIN-SNIPPET custom-sort-objects-regex-match.js
var ordered = customSortObjects({
  array: contigs,
  order: [new RegExp(`.*?RT`), 'IN'],
  key: 'code',
});
//END-SNIPPET
