---
displayName: two_columns_block
classBase: two_columns_block
schema:
  todo:
    type: string
    description: todo of the two_columns_block
usage:
  - class: .todo
    required: True
    elements:
      - table
    outcome: Defines the two_columns_block component
flavours:
  - title: Base
    status: production
    states:
      - title: Default
        data:
          todo: default
---
