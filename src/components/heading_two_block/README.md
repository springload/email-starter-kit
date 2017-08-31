---
displayName: heading_two_block
classBase: heading_two_block
schema:
  layout:
    type: string
    description: Layout of the block
usage:
  - class: .layout
    required: True
    elements:
      - table
    outcome: Defines the heading_two_block component
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
