---
displayName: button_block
classBase: button_block
schema:
  todo:
    type: string
    description: todo of the button_block
usage:
  - class: .todo
    required: True
    elements:
      - table
    outcome: Defines the button_block component
flavours:
  - title: Base
    status: production
    states:
      - title: Default
        data:
          todo: default
---
