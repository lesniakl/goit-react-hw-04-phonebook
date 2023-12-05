# SimplePhonebook app v2.5

This is a React app built using
[Create React App](https://github.com/facebook/create-react-app) as a part of
GoIT course. It allows you to save phone numbers together with names and store
them in your browser's local storage.

## Features

Using this app you store the following contact information:

- Name
- Phone number

Each entry can be deleted manually.

![Application interface](./assets/interface-1.png)

You can also filter your phonebook by name (this feature is case insensitive):

![Filtering feature](./assets/interface-2.png)

New entries cannot share the same names with exisiting ones (this feature also
is not case sensitive):

![Adding new contact with exisiting name](./assets/interface-3.png)

## Setup

1. Clone this repository.
2. Install the project's base dependencies using command

```shell
npm install
```

3. Start development mode by running command

```shell
npm start
```

4. You will now be able to access the app by going to
   [http://localhost:3000](http://localhost:3000) in your browser.
