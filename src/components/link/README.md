---
displayName: link
classBase: link
schema:
  todo:
    type: string
    description: todo of the link
usage:
  - class: .todo
    required: True
    elements:
      - table
    outcome: Defines the link component
flavours:
  - title: Base
    status: production
    states:
      - title: Default
        data:
          todo: default
---
