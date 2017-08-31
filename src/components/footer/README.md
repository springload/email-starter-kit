---
displayName: footer
classBase: footer
schema:
  todo:
    type: string
    description: TODO
usage:
  - class: .footer
    required: True
    elements:
      - table
    outcome: Defines the footer component
flavours:
  - title: Base
    status: production
    states:
      - title: Default
        data:
          todo: todo
---
