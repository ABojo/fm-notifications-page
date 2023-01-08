# Notifications Page

I built this project to complete [this FrontendMentor.io challenge](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). The challenge was to design the page based on the mock up and implement a button that allows you to mark all the notifications as read. It wouldn't have been very complicated to select all the elements with the unread class, remove it, and then set the counters text content to zero so I decided to go a bit beyond the challenge.

[Click here to view the project](https://abojo-notifications-page.netlify.app/)

## How I went beyond the challenge

- Structuring the code in a way that would allow you to quickly make the changes needed to use data from a real server/implement persistence
- Allowing the users to tap notifications to mark them as read one by one
- Making the unread counter sync to the unread count rather than just dropping to zero.

## How I structured my code

- A display controller to handle DOM manipulation and the construction of notification elements.
- Notification storage to handle marking noticiations as read and return data about the stored notifications(the unread notification count).
- A fake API wrapper to simulate fetching notification data from a server

## Why I structured my code this way

If I need to make changes to a certain portion of the code it should be as isolated as possible to limit potential side effects.
For example, I don't want to break the DOM manipulation when I'm changing where the notification data comes from or how its stored. All of these responsibilities
should be entirely independent and changing one should not put the other at risk of breaking.

Writing the code this way also lets me take advantage of polymorphism. I can swap in modules with the same interface but different implementation details. I could
replace the API wrapper with one that actually contacts a server and returns live data. I could replace the notification storage
with a version that will persist/load data from local storage so the state of notifications is tracked. As long as these new modules implement the same
interface and return the same kind of data the code will work exactly as it did before.

Each module also serves to abstract away underlying implementation details that the outer code does not need to be concerned with. Writing the higher level code that makes these modules work together becomes easier to read, write, and change when you can remain ignorant of what's going on under the hood and put all of your focus on the interface.
