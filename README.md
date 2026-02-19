# TAKE YOUR NEXT STEP

<br>

## Design

<br>

### Colors:

---

- **#FF5E30** <div style="height: 50px; aspect-ratio: 1/1; background-color: #478778; display: inline-flex; transform: translate(25px, 25px)"></div>
- **#ffffef**<div style="height: 50px; aspect-ratio: 1/1; background-color: #ffffef; display: inline-flex; transform: translate(25px, 25px)"></div>
- **#10100e** <div style="height: 50px; aspect-ratio: 1/1; background-color: #10100e; display: inline-flex; transform: translate(25px, 25px)"></div>

<div style="height: 200px; width: 30%;  background-color: #478778; display: inline-flex; transform: translate(25px, 25px)"></div>
<div style="height: 200px; width: 30%; background-color: #FFFFE3; display: inline-flex; transform: translate(25px, 25px)"></div>
<div style="height: 200px; width: 30%; background-color: #10100e; display: inline-flex; transform: translate(25px, 25px);"></div>


<br>
<br>

### Fonts

---

- [Delight](https://rajputrajesh-448.gumroad.com/l/Delight9)
- [Familjen Grotesk](https://bestfreefonts.com/familjen-grotesk?text=Wie+werde+ich+)


<br>
<br>

### Sections:

---

#### Hero

- Grosser Banner "TAKE YOUR NEXT STEP" (animated) + CTA
- Subtitle
- Images (tbd)


<br>

#### Bible Verse:

- Gradient Background + Bible Verse

<br>

#### Steps

- Guide, how things will go on
- Video (maybe of Staff what this means, etc.)

<br>

#### Registration

- Form with guide ---> Google Forms needed

<br>

#### Live-Chat (Bonus) 

- Get immediate help from staff (completely anonymous)

<br>
<br>

### Features

- Automated Confirmation Message via email
- Q&A would be nice
- Other offers (Youth, Gellert, etc.) --> [In this style](https://dribbble.com/shots/10167980-Clients-Logos-or-Partners)
    - On click --> detail dialog with futher information (e.g. location, mission, links, etc.)

<br>
<br>

## Backend Notes

<br>

### Session Management

- When user starts a Chat call endpoint "api/start/chat" --> create session, user and chat object. Show in Admin Panel
- Create session for admins when logging in
- Work with ROLES for API endpoints

<br>

### Chats

- Users start a chat to ask question
- Implement with websockets (if too time-consuming --> polling)
- User starts a Chat
- When admin opens chat --> show message "&#60;Name of admin&#62; joined the conversation"
- show typing bubbles --> if enough time to implement

<br>

### Form

- Show form submits in Admin panel --> If needed add a badge if only one person makes contact

<br>

### Media

- use r2 Blob Storage from Cloudflare so media gets cached --> ask for subdomain "media.blessbasel.ch" if not possible "next-step.ch"
  

<br>
<br>

# COMMENTS







