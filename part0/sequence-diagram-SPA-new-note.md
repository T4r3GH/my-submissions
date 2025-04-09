## Sequence Diagram For SPA new note

```mermaid
sequenceDiagram
   participant browser
   participant DOM
   participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Note DATA/JSON
    deactivate server

    Note right of browser: JS code update the HTML FILE
    browser->>DOM: The browser rerenders the new note
    

