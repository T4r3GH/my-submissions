## Sequence Diagram For SPA new note

```mermaid
sequenceDiagram
   participant browser
   participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Note DATA/JSON
    browser[ Then the JS code update the HTML FILE]
    deactivate server
    Note right of browser: The browser rerenders the new note

