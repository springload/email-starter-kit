---
displayName: image_small_block
classBase: image_small_block
schema:
  todo:
    type: string
    description: todo of the image_small_block
usage:
  - class: .todo
    required: True
    elements:
      - table
    outcome: Defines the image_small_block component
flavours:
  - title: Base
    status: production
    states:
      - title: Default
        data:
          todo: default
---
