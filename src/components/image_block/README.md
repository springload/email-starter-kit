---
displayName: image_block
classBase: image_block
schema:
  todo:
    type: string
    description: todo of the image_block
usage:
  - class: .todo
    required: True
    elements:
      - table
    outcome: Defines the image_block component
flavours:
  - title: Base
    status: production
    states:
      - title: Default
        data:
          todo: default
---
