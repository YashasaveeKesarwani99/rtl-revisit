# RTL - Revisit

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YashasaveeKesarwani99/rtl-revisit.git
   cd rtl
   ```

2. **Install dependencies:**

   ```bash
   cd rtl
   npm install
   ```

## Usage

1. **Navigate to the `root` directory:**

   ```bash
   cd rtl
   ```

2. **Start the React development server:**

   ```bash
   npm run start
   ```

   This will run the React app on `http://localhost:3000`.

## Notes

- **Philosphy** - Tests should be written to expect and assert outcomes and not how that outcome has been implemented.

- **What to test?** - Test what the component has been made for i.e rendering of component, updatation of it's states, props. It's behaviour when user interacts with it through all the channels ( mouse click, keyboard actions, voice and gesture interactions ). Next, it's behaviour when side effects are triggered ( it's response to the outside world, http calls)

- **What not to test?** - Don't test implemenation details, third party code. This will enable you to refactor your code and still run the tests succesfully.

- **Rendering elements** - use getBy, queryBy and findBy along with their companions to query elements synchronously as well as asynchronously.

- **User interaction** - Here I've used `user-event` library to utilize mouse and keyboard actions

- **Mocking functions and http calls** - Here I've used `jest.fn()` for mocking functions ( touched only fundamentals ). For intercepting real time http calls I've leveraged the `service worker` api using `msw`.

- **Ending comments** - I've inspired myself to apply these learning into the `streamify` or the `coin-app` to write unit as well as integration testing. The challenge would be to implement the specs using `vitest` instead of `jest`.
