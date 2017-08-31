---
displayName: preheader
classBase: preheader
schema:
  list_type:
    type: string
    description: Type of list eg. Bulleted, numbered, alphanumeric
usage:
  - class: .preheader
    required: True
    elements:
      - table
    outcome: Defines the preheader component
flavours:
  - title: Base
    status: production
    states:
      - title: Default
        data:
          list_type: styled
---
