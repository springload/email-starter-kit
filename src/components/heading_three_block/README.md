---
displayName: heading_three_block
classBase: heading_three_block
schema:
  todo:
    type: string
    description: todo of the heading_three_block
usage:
  - class: .todo
    required: True
    elements:
      - table
    outcome: Defines the heading_three_block component
flavours:
  - title: Base
    status: production
    states:
      - title: Default
        data:
          todo: default
---
