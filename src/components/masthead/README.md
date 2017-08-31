---
displayName: masthead
classBase: masthead
schema:
  todo:
    type: string
    description: TODO
usage:
  - class: .masthead
    required: True
    elements:
      - table
    outcome: Defines the masthead component
flavours:
  - title: Base
    status: production
    states:
      - title: Default
        data:
          todo: todo
---
