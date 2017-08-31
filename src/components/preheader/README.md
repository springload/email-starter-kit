---
displayName: preheader
classBase: preheader
schema:
  layout:
    type: string
    description: Layout of the preheader
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
          layout: default
      - title: Culture Club
        data:
          layout: cultureclub
---
