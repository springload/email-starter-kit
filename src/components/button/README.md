---
displayName: button
classBase: button
schema:
  todo:
    type: string
    description: todo of the button
usage:
  - class: .todo
    required: True
    elements:
      - table
    outcome: Defines the button component
flavours:
  - title: Base
    status: production
    states:
      - title: Default
        data:
          todo: default
---
