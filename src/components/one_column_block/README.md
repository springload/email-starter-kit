---
displayName: one_column_block
classBase: one_column_block
schema:
  todo:
    type: string
    description: todo of the one_column_block
usage:
  - class: .todo
    required: True
    elements:
      - table
    outcome: Defines the one_column_block component
flavours:
  - title: Base
    status: production
    states:
      - title: Default
        data:
          todo: default
---
