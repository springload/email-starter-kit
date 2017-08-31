---
displayName: button_centered_block
classBase: button_centered_block
schema:
  todo:
    type: string
    description: todo of the button_centered_block
usage:
  - class: .todo
    required: True
    elements:
      - table
    outcome: Defines the button_centered_block component
flavours:
  - title: Base
    status: production
    states:
      - title: Default
        data:
          todo: default
---
