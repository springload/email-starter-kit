---
displayName: headline_block
classBase: headline_block
schema:
  align:
    type: string
    description: Alignment of the headline text
  text:
    type: string
    description: Textual content
usage:
  - class: .todo
    required: True
    elements:
      - table
    outcome: Defines the headline_block component
flavours:
  - title: Base
    status: production
    states:
      - title: Default
        data:
          text: Email title to go here
      - title: Centered
        data:
          align: center
          text: Email title to go here
---
