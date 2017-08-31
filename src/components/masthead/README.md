---
displayName: masthead
classBase: masthead
schema:
  layout:
    type: string
    description: Layout of the masthead
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
          layout: default
      - title: Culture Club
        data:
          layout: cultureclub
---
