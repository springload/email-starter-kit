---
displayName: text_block
classBase: text_block
schema:
  todo:
    type: string
    description: todo of the text_block
usage:
  - class: .todo
    required: True
    elements:
      - table
    outcome: Defines the text_block component
flavours:
  - title: Base
    status: production
    states:
      - title: Default
        data:
          todo: default
---
