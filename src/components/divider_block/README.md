---
displayName: divider_block
classBase: divider_block
schema:
  todo:
    type: string
    description: todo of the divider_block
usage:
  - class: .todo
    required: True
    elements:
      - table
    outcome: Defines the divider_block component
flavours:
  - title: Base
    status: production
    states:
      - title: Default
        data:
          todo: default
---
